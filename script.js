document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const close = document.querySelector('.close-lightbox');
    const artworkTitle = document.querySelector('.artwork-details h3');
    const artworkDesc = document.querySelector('.artwork-details p');

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            
            // Get artwork details from parent art-item
            const artInfo = image.closest('.art-item').querySelector('.art-info');
            artworkTitle.textContent = artInfo.querySelector('h3').textContent;
            artworkDesc.textContent = artInfo.querySelector('p').textContent;
        });
    });

    close.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});
