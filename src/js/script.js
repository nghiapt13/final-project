date = new Date();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
year = date.getFullYear();
let m = month[date.getMonth()];
day = date.getDate();
document.getElementById("date").innerHTML = m + " " + day + ", " + year;

// banner

//sticky header
window.onscroll = function () { myFunction() };
var header = document.getElementById("head__stick");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
console.log(123);
//banner 
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide');
    splide.mount();
});


let splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
});

splide.mount();

carousel
document.addEventListener('DOMContentLoaded', function () {
    var carousel = new Splide('.splide_carousel');
    carousel.mount();
});

let carousel = new Splide('.splide_carousel', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
});

carousel.mount();