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

// (function() {
//   'use strict';

//   function siteMenuClone() {
//     const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
//     const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
//     if (!siteMobileMenuBody || jsCloneNavs.length === 0) return;

//     siteMobileMenuBody.innerHTML = '';
//     jsCloneNavs.forEach(nav => {
//       const navCloned = nav.cloneNode(true);
//       navCloned.setAttribute('class', 'site-nav-wrap');
//       siteMobileMenuBody.appendChild(navCloned);
//     });

//     // Dropdown toggles
//     setTimeout(() => {
//       document.querySelectorAll('.site-mobile-menu .has-children').forEach((hasChild, i) => {
//         const refEl = hasChild.querySelector('a');
//         const newElSpan = document.createElement('span');
//         newElSpan.setAttribute('class', 'arrow-collapse collapsed');
//         newElSpan.setAttribute('data-bs-toggle', 'collapse');
//         newElSpan.setAttribute('data-bs-target', '#collapseItem' + i);

//         hasChild.insertBefore(newElSpan, refEl);

//         const dropdown = hasChild.querySelector('.dropdown');
//         if (dropdown) {
//           dropdown.setAttribute('class', 'collapse');
//           dropdown.setAttribute('id', 'collapseItem' + i);
//         }
//       });
//     }, 10); // 🔁 reduce to 10ms to avoid missing timing

//     // Menu toggle
//     const toggles = document.querySelectorAll('.js-menu-toggle');
//     toggles.forEach(toggle => {
//       toggle.addEventListener('click', e => {
//         e.preventDefault();
//         document.body.classList.toggle('offcanvas-menu');
//         toggle.classList.toggle('active');
//       });
//     });

//     // Close menu on outside click
//     document.addEventListener('click', e => {
//       const menu = document.querySelector('.site-mobile-menu');
//       const isClickInside = menu && menu.contains(e.target);
//       const isBurger = Array.from(toggles).some(t => t.contains(e.target));
//       if (!isClickInside && !isBurger) {
//         document.body.classList.remove('offcanvas-menu');
//         toggles.forEach(t => t.classList.remove('active'));
//       }
//     });
//   }
// //   siteMenuClone();
//   // Run it if DOM is ready
//   if (document.readyState !== 'loading') {
//     siteMenuClone();
//   } else {
//     document.addEventListener('DOMContentLoaded', siteMenuClone);
//   }

//   // 👇 expose globally
//   window.siteMenuClone = siteMenuClone;
// })();

(function () {
  'use strict';

  function siteMenuClone() {
    const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
    const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');
    if (!siteMobileMenuBody || jsCloneNavs.length === 0) return;

    siteMobileMenuBody.innerHTML = '';
    jsCloneNavs.forEach(nav => {
      const navCloned = nav.cloneNode(true);
      navCloned.setAttribute('class', 'site-nav-wrap');
      siteMobileMenuBody.appendChild(navCloned);
    });

    // Dropdown toggles
    setTimeout(() => {
      document.querySelectorAll('.site-mobile-menu .has-children').forEach((hasChild, i) => {
        const refEl = hasChild.querySelector('a');
        const newElSpan = document.createElement('span');
        newElSpan.setAttribute('class', 'arrow-collapse collapsed');
        newElSpan.setAttribute('data-bs-toggle', 'collapse');
        newElSpan.setAttribute('data-bs-target', '#collapseItem' + i);

        hasChild.insertBefore(newElSpan, refEl);

        const dropdown = hasChild.querySelector('.dropdown');
        if (dropdown) {
          dropdown.setAttribute('class', 'collapse');
          dropdown.setAttribute('id', 'collapseItem' + i);
        }
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

    // Close menu on outside click
    document.addEventListener('click', e => {
      const menu = document.querySelector('.site-mobile-menu');
      const isClickInside = menu && menu.contains(e.target);
      const isBurger = Array.from(toggles).some(t => t.contains(e.target));
      if (!isClickInside && !isBurger) {
        document.body.classList.remove('offcanvas-menu');
        toggles.forEach(t => t.classList.remove('active'));
      }
    });
  }

  // Expose globally
  window.siteMenuClone = siteMenuClone;
})();
