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
// 	// 🔁 Make it globally accessible for dynamic header injection
// 	window.siteMenuClone = siteMenuClone;

// })()
// (function () {
//   'use strict';

//   function siteMenuClone() {
//     const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
//     const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
//     if (!siteMobileMenuBody || jsCloneNavs.length === 0) return;

//     // Clear previous clones to avoid duplicates
//     siteMobileMenuBody.innerHTML = '';

//     // Clone navigation into mobile menu
//     jsCloneNavs.forEach(nav => {
//       const navCloned = nav.cloneNode(true);
//       navCloned.className = 'site-nav-wrap'; // Better than setAttribute
//       siteMobileMenuBody.appendChild(navCloned);
//     });

//     // Setup collapsible dropdowns
//     setTimeout(() => {
//       document.querySelectorAll('.site-mobile-menu .has-children').forEach((item, index) => {
//         const link = item.querySelector('a');
//         const dropdown = item.querySelector('.dropdown');

//         if (!link || !dropdown) return;

//         const toggleBtn = document.createElement('span');
//         toggleBtn.className = 'arrow-collapse collapsed';
//         toggleBtn.setAttribute('data-bs-toggle', 'collapse');
//         toggleBtn.setAttribute('data-bs-target', `#collapseItem${index}`);

//         item.insertBefore(toggleBtn, link);
//         dropdown.className = 'collapse'; // overwrite existing class
//         dropdown.id = `collapseItem${index}`;
//       });
//     }, 10); // fast enough after DOM is manipulated

//     // Handle menu toggle
//     const toggles = document.querySelectorAll('.js-menu-toggle');
//     toggles.forEach(toggle => {
//       toggle.addEventListener('click', e => {
//         e.preventDefault();
//         const isActive = document.body.classList.toggle('offcanvas-menu');
//         toggle.classList.toggle('active', isActive);
//       });
//     });

//     // Close menu when clicking outside
//     document.addEventListener('click', e => {
//       const menu = document.querySelector('.site-mobile-menu');
//       const clickedInsideMenu = menu && menu.contains(e.target);
//       const clickedToggle = Array.from(toggles).some(toggle => toggle.contains(e.target));

//       if (!clickedInsideMenu && !clickedToggle) {
//         document.body.classList.remove('offcanvas-menu');
//         toggles.forEach(t => t.classList.remove('active'));
//       }
//     });
//   }

//   // Auto-run on DOM ready
//   if (document.readyState !== 'loading') {
//     siteMenuClone();
//   } else {
//     document.addEventListener('DOMContentLoaded', siteMenuClone);
//   }

//   // Expose to global scope
//   window.siteMenuClone = siteMenuClone;
// })();


(function () {
  'use strict';

  function initMobileMenu() {
    const toggles = document.querySelectorAll('.js-menu-toggle');
    const menu = document.querySelector('.site-mobile-menu');

    // Toggle the menu
    toggles.forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('offcanvas-menu');
        toggle.classList.toggle('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', e => {
      const clickedInside = menu && menu.contains(e.target);
      const clickedToggle = Array.from(toggles).some(t => t.contains(e.target));
      if (!clickedInside && !clickedToggle) {
        document.body.classList.remove('offcanvas-menu');
        toggles.forEach(t => t.classList.remove('active'));
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initMobileMenu);
})();
