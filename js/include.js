// Load Navbar

// Detect base path for GitHub Pages
const repoName = "/tesya-makeup-artist";

// Load Navbar
fetch(`${repoName}/navbar.html`)
    .then(res => res.text())
    .then(data => {
        const el = document.getElementById("navbar-placeholder");
        if (el) el.innerHTML = data;
    });

// Load Footer
fetch(`${repoName}/footer.html`)
    .then(res => res.text())
    .then(data => {
        const el = document.getElementById("footer-placeholder");
        if (el) el.innerHTML = data;
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
