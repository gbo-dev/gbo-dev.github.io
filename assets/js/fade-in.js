function hasVisitedBefore() {
  if (localStorage.getItem('hasVisitedBefore')) {
    return true;
  }
  localStorage.setItem('hasVisitedBefore', 'true');
  return false;
}

function triggerAnimations() {
  if (!hasVisitedBefore()) {
    if (window.location.pathname === '/') {
      requestAnimationFrame(() => {
        document.querySelectorAll('.hide-on-start, .hide-on-start-top, .hide-on-start-bottom').forEach(item => {
          item.classList.add('show-on-start');
        });
      });
    }
  } else {
    // If not first visit, show elements without animation
    document.querySelectorAll('.hide-on-start, .hide-on-start-top, .hide-on-start-bottom').forEach(item => {
      item.classList.add('show-on-start');

      // Ensure they don't remain hidden after subsequent visits
      item.style.transition = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', triggerAnimations);
