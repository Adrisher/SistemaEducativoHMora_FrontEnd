// jQuery(function ($) {

//     $(".sidebar-dropdown > a").click(function () {
//         $(".sidebar-submenu").slideUp(200);
//         if (
//             $(this)
//                 .parent()
//                 .hasClass("active")
//         ) {
//             $(".sidebar-dropdown").removeClass("active");
//             $(this)
//                 .parent()
//                 .removeClass("active");
//         } else {
//             $(".sidebar-dropdown").removeClass("active");
//             $(this)
//                 .next(".sidebar-submenu")
//                 .slideDown(200);
//             $(this)
//                 .parent()
//                 .addClass("active");
//         }
//     });

//     $("#close-sidebar").click(function () {
//         $(".page-wrapper").removeClass("toggled");
//     });
//     $("#show-sidebar").click(function () {
//         $(".page-wrapper").addClass("toggled");
//     });
// });







let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
