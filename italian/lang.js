/*
 * Ustawienia języka włoskiego dla wspólnej aplikacji (../shared/app.js):
 * głos it-IT, rząd znaków à è é ì ò ù, wyrozumiałość dla brakujących akcentów i rodzajników.
 */
window.LANG = {
  name: 'Włoski', short: 'IT', inLang: 'po włosku', storeKey: 'fiszki-wloski-v1',
  subtitle: 'Od pierwszych słów do poziomu C1', sample: 'Ciao! Come stai?',
  voices: [{ code: 'it-IT', label: 'włoski' }], requireVoice: true,
  strip: null, keepFirst: null, translit: null, keyboard: null,
  extraKeys: 'à è é ì ò ù',
  foldAccents: true,
  // brak rodzajnika (libro zamiast il libro, acqua zamiast l'acqua) = drobny błąd, nie zła odpowiedź
  softStrip: /^(?:(?:il|lo|la|i|gli|le|un|uno|una)\s+|(?:l|un)['’]\s*)/
};
