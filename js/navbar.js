// (function(){

// 	'use strict'


// 	var siteMenuClone = function() {
// 		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
// 		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
		


// 		jsCloneNavs.forEach(nav => {
// 			var navCloned = nav.cloneNode(true);
// 			navCloned.setAttribute('class', 'site-nav-wrap');
// 			siteMobileMenuBody.appendChild(navCloned);
// 		});

// 		setTimeout(function(){

// 			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll(' .has-children');

// 			var counter = 0;
// 			hasChildrens.forEach( hasChild => {
				
// 				var refEl = hasChild.querySelector('a');

// 				var newElSpan = document.createElement('span');
// 				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

// 				// prepend equivalent to jquery
// 				hasChild.insertBefore(newElSpan, refEl);

// 				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
// 				arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
// 				arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

// 				var dropdown = hasChild.querySelector('.dropdown');
// 				dropdown.setAttribute('class', 'collapse');
// 				dropdown.setAttribute('id', 'collapseItem' + counter);

// 				counter++;
// 			});

// 		}, 1000);


// 		// Click js-menu-toggle

// 		var menuToggle = document.querySelectorAll(".js-menu-toggle");
// 		var mTog;
// 		menuToggle.forEach(mtoggle => {
// 			mTog = mtoggle;
// 			mtoggle.addEventListener("click", (e) => {
// 				if ( document.body.classList.contains('offcanvas-menu') ) {
// 					document.body.classList.remove('offcanvas-menu');
// 					mtoggle.classList.remove('active');
// 					mTog.classList.remove('active');
// 				} else {
// 					document.body.classList.add('offcanvas-menu');
// 					mtoggle.classList.add('active');
// 					mTog.classList.add('active');
// 				}
// 			});
// 		})



// 		var specifiedElement = document.querySelector(".site-mobile-menu");
// 		var mt, mtoggleTemp;
// 		document.addEventListener('click', function(event) {
// 			var isClickInside = specifiedElement.contains(event.target);
// 			menuToggle.forEach(mtoggle => {
// 				mtoggleTemp = mtoggle
// 				mt = mtoggle.contains(event.target);
// 			})

// 			if (!isClickInside && !mt) {
// 				if ( document.body.classList.contains('offcanvas-menu') ) {
// 					document.body.classList.remove('offcanvas-menu');
// 					mtoggleTemp.classList.remove('active');
// 				}
// 			}

// 		});

// 	}; 
// 	siteMenuClone();


// })()

(function () {
  'use strict';

  const siteMenuClone = function () {
    const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
    const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

    if (!jsCloneNavs.length || !siteMobileMenuBody) return;

    // Clear and clone
    siteMobileMenuBody.innerHTML = '';
    jsCloneNavs.forEach(nav => {
      const cloned = nav.cloneNode(true);
      cloned.setAttribute('class', 'site-nav-wrap');
      siteMobileMenuBody.appendChild(cloned);
    });

    // Set up collapsible dropdowns
    setTimeout(() => {
      const items = document.querySelectorAll('.site-mobile-menu .has-children');
      let counter = 0;
      items.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown');
        if (!link || !dropdown) return;

        const arrow = document.createElement('span');
        arrow.className = 'arrow-collapse collapsed';
        arrow.setAttribute('data-bs-toggle', 'collapse');
        arrow.setAttribute('data-bs-target', `#collapseItem${counter}`);
        item.insertBefore(arrow, link);

        dropdown.classList.add('collapse');
        dropdown.setAttribute('id', `collapseItem${counter}`);
        counter++;
      });
    }, 10);

    // Menu toggle
    const toggles = document.querySelectorAll('.js-menu-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('offcanvas-menu');
        toggle.classList.toggle('active');
      });
    });

    // Click outside to close
    document.addEventListener('click', e => {
      const menu = document.querySelector('.site-mobile-menu');
      const inside = menu && menu.contains(e.target);
      const toggleClicked = Array.from(toggles).some(t => t.contains(e.target));
      if (!inside && !toggleClicked) {
        document.body.classList.remove('offcanvas-menu');
        toggles.forEach(t => t.classList.remove('active'));
      }
    });
  };

  document.addEventListener('DOMContentLoaded', siteMenuClone);
})();
