var gallery = [
    { src: "img 2.jpeg", caption: "Maulana Masood Azhar" },
    { src: "images.jpg", caption: "Ayman Al-Zawahiri" },
    { src: "images.webp", caption: "Osama bin Laden" },

    { src: "suraj.jpg", caption: "GOAT" }
];

var index = 0;
var imgElement = document.getElementById("image");
var captionElement = document.getElementById("caption");
var prevBtn = document.getElementById("button1");
var nextBtn = document.getElementById("button2");

function updateGallery() {
    imgElement.src = gallery[index].src;
    captionElement.textContent = gallery[index].caption;
}

button2.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

button1.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();