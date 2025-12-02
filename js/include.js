// Load Navbar

// Detect base URL otomatis untuk GitHub Pages
const BASE = window.location.pathname.replace(/\/[^/]*$/, "");

// Load Navbar
fetch(`${BASE}/navbar.html`)
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    });

// Load Footer
fetch(`${BASE}/footer.html`)
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    });


// fetch("/components/navbar.html")
//   .then(res => res.text())
//   .then(data => {
//       document.getElementById("navbar-placeholder").innerHTML = data;
//   });

// Load Footer
// fetch("/components/footer.html")
//   .then(res => res.text())
//   .then(data => {
//       document.getElementById("footer-placeholder").innerHTML = data;
//   });

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("navbar.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("navbar-placeholder").innerHTML = data;
//         });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("footer.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("navbar-placeholder").innerHTML = data;
//         });
// });
