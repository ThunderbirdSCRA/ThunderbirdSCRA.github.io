
(function () {
  function applyYear() {
    var currentYear = new Date().getFullYear();

    // Single element by ID
    var el = document.getElementById('copyright-year');
    if (el) {
      var start = parseInt(el.getAttribute('data-start'), 10);
      el.textContent = (!isNaN(start) && start < currentYear) ? (start + '–' + currentYear) : String(currentYear);
    }

    // Optional: support multiple elements via class if you ever add more
    var nodes = document.querySelectorAll('.copyright-year');
    nodes.forEach(function (n) {
      var s = parseInt(n.getAttribute('data-start'), 10);
      n.textContent = (!isNaN(s) && s < currentYear) ? (s + '–' + currentYear) : String(currentYear);
    });
  }

  // verify DOM has located correctly before attempting to updaqte year.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyYear);
  } else {
    applyYear();
  }
})();
``
