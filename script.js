const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = item.src;
        currentIndex = index;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

prev.addEventListener('click', (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    lightboxImage.src = galleryItems[currentIndex].src;
});

next.addEventListener('click', (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    lightboxImage.src = galleryItems[currentIndex].src;
});

function openAlbum() {
    document.getElementById("myModal").style.display = "block";
}

function closeAlbum() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
        closeAlbum();
    }
}