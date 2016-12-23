document.addEventListener("DOMContentLoaded", () => {

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
    navItems.forEach(navItem => {
      navItem.addEventListener("click", () => {
        let name = navItem.innerText.toLowerCase();
        window.location.hash = name;
      });
    });






});
//



// document.addEventListener("DOMContentLoaded", () => {
//   let content = document.querySelector(".content");
//   router = new Router(content, routes);
//   router.start();
//   window.location.hash = "#inbox";
//   let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
//   navItems.forEach(navItem => {
//     navItem.addEventListener("click", () => {
//       let name = navItem.innerText.toLowerCase();
//       location.hash = name;
//     });
//   });
// });
