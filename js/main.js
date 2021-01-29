document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
});

class Main {
  constructor() {
    this.menuBars = document.querySelector('#menu-bars');
    this.navItems = this._getNavItems();
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _getNavItems() {
    const nav1 = document.querySelector('#nav-1');
    const nav2 = document.querySelector('#nav-2');
    const nav3 = document.querySelector('#nav-3');
    const nav4 = document.querySelector('#nav-4');
    const nav5 = document.querySelector('#nav-5');
    const navItems = [nav1, nav2, nav3, nav4, nav5];
    return navItems;
  }

  // Control Navigation Animation
  _navAnimation(direction1, direction2) {
    this.navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
  }

  _toggleNav() {
    const overlay = document.querySelector('#overlay');
    // Toggle: Menu Bars Open/Closed
    this.menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
      // Animate In - Overlay
      overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
      // Animate In - Nav Items
      this._navAnimation('out', 'in');
    } else {
      // Animate Out - Overlay
      overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
      // Animate Out - Nav Items
      this._navAnimation('in', 'out');
    }
  }

  // Event Listeners
  _addEvent() {
    this.menuBars.addEventListener('click', () => this._toggleNav());
    this.navItems.forEach((nav) => {
      nav.addEventListener('click', () => this._toggleNav());
    });
  }
}
