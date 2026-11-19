/*
 * Ustawienia języka hiszpańskiego dla wspólnej aplikacji (../shared/app.js):
 * głosy es-ES / es-MX, rząd znaków á é ñ ¿ ¡, wyrozumiałość dla brakujących akcentów i rodzajników.
 */
window.LANG = {
  name: 'Hiszpański', short: 'ES', inLang: 'po hiszpańsku', storeKey: 'fiszki-hiszpanski-v1',
  subtitle: 'Od pierwszych słów do poziomu C1', sample: '¡Hola! ¿Qué tal?',
  voices: [{ code: 'es-ES', label: 'hiszpański' }, { code: 'es-MX', label: 'meksykański' }], requireVoice: true,
  strip: null, keepFirst: null, translit: null, keyboard: null,
  extraKeys: 'á é í ó ú ñ ü ¿ ¡', foldAccents: true, softStrip: /^(el|la|los|las|un|una)\s+/
};
