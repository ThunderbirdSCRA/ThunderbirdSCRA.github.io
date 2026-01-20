(function () {
  try {
    // get the span element to insert the copyrighr year
    var el = document.getElementById('copyright-year');
    if (!el) return;

    // determine the current year
    var currentYear = new Date().getFullYear();
    var start = parseInt(el.getAttribute('data-start'), 10);

    if (!isNaN(start) && start < currentYear) {
      el.textContent = start + '–' + currentYear;
    } else {
      el.textContent = currentYear;
    }
  } catch (e) {
    // Fail silently; fallback remains.
  }
})();
