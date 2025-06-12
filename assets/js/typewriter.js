/**
 * Typewriter effect for elements with the class 'typewriter-subtitle'
 * Adds a blinking cursor while typing, which disappears after typing is complete.
 * Only runs on the homepage and if the element exists.
 *
 * Usage: Ensure the subtitle <span> has class="typewriter-subtitle"
 * and include this script after the DOM is loaded.
 */
(function () {
  function typewriterEffect(element, text, speed = 60, delay = 400) {
    // Start with a non-breaking space to reserve space and prevent layout shift
    element.innerHTML = "&nbsp;";
    element.classList.add("typing");
    let i = 0;
    function type() {
      if (i < text.length) {
        // Replace the non-breaking space with the first character
        if (i === 0) {
          element.textContent = text.charAt(i);
        } else {
          element.textContent += text.charAt(i);
        }
        i++;
        setTimeout(type, speed);
      } else {
        // Remove the typing class to hide the cursor, add 'typed' to reserve cursor space
        element.classList.remove("typing");
        element.classList.add("typed");
      }
    }
    setTimeout(type, delay);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Only run on homepage or if you want to target everywhere, remove this check
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/index.html"
    ) {
      return;
    }
    const el = document.querySelector(".typewriter-subtitle");
    if (!el) return;

    // Store the original text (in case it's rendered by Hugo/markdownify)
    const originalText = el.textContent.trim();
    typewriterEffect(el, originalText);
  });
})();
