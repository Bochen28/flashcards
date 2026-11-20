/*
 * Praca offline: najpierw sieć (zawsze najnowsza wersja), a gdy jej nie ma – kopia z pamięci.
 * W pamięci ląduje wszystko, co już raz zostało otwarte: strony kursów, dane, lekcje i odsłuchane nagrania.
 */
const CACHE = 'fiszki-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('fiszki-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  if (req.headers.has('range')) {
    // nagrania (odtwarzacz prosi o fragmenty): online bez zmian, w tle zapamiętujemy cały plik na później
    e.respondWith(fetch(req).then(res => {
      caches.open(CACHE).then(c => c.match(url.href).then(hit => hit || c.add(url.href))).catch(() => { /* */ });
      return res;
    }).catch(() => caches.match(url.href).then(hit => hit || Response.error())));
    return;
  }
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => { /* brak miejsca – trudno */ });
      }
      return res;
    }).catch(() => caches.match(req).then(hit => hit ||
      // inna wersja pliku (?v=…) albo strona bez końcowego „/”
      caches.match(req, { ignoreSearch: true }).then(h2 => h2 || Response.error())))
  );
});
