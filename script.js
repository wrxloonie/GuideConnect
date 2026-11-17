/* GuideConnect 2026 countdown. All times are Singapore time (UTC+8). */
(function () {
  var DEADLINE = Date.parse('2026-11-24T23:59:00+08:00'); // ticket sales close
  var DAY = Date.parse('2026-11-25T00:00:00+08:00');      // event day begins
  var END = Date.parse('2026-11-25T15:30:00+08:00');      // event ends
  var label = document.querySelector('[data-cd-label]');
  var units = document.querySelector('[data-cd-units]');
  var short = document.querySelector('[data-cd-short]');
  if (!label || !units) return;
  var names = { d: ['day', 'days'], h: ['hour', 'hours'], m: ['minute', 'minutes'], s: ['second', 'seconds'] };
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function set(k, n, text) {
    var v = units.querySelector('[data-cd="' + k + '"]');
    var l = units.querySelector('[data-cdl="' + k + '"]');
    if (v) v.textContent = text;
    if (l) l.textContent = names[k][n === 1 ? 0 : 1];
  }
  function tick() {
    var now = Date.now();
    if (now < DEADLINE) {
      var s = Math.floor((DEADLINE - now) / 1000);
      var d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
      label.textContent = 'Ticket sales close in';
      units.hidden = false;
      set('d', d, String(d)); set('h', h, pad(h)); set('m', m, pad(m)); set('s', sec, pad(sec));
      if (short) short.textContent = 'Sales close in ' + (d > 0 ? d + 'd ' : '') + h + 'h ' + pad(m) + 'm';
      return true;
    }
    units.hidden = true;
    if (now < DAY) {
      label.textContent = 'Ticket sales have closed. See you on Wednesday.';
      if (short) short.textContent = 'Ticket sales have closed';
    } else if (now < END) {
      label.textContent = 'GuideConnect 2026 is happening today.';
      if (short) short.textContent = 'Happening today';
    } else {
      label.textContent = 'Thank you for joining us at GuideConnect 2026.';
      if (short) short.textContent = 'Thank you for joining us';
    }
    return false;
  }
  if (tick()) {
    var timer = setInterval(function () { if (!tick()) clearInterval(timer); }, 1000);
  }
})();
