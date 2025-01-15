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
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
      item.classList.remove('.hide-on-start');
      item.classList.remove('.hide-on-start-top');
      item.classList.remove('.hide-on-start-bottom');

    });
  }
}

document.addEventListener('DOMContentLoaded', triggerAnimations);
