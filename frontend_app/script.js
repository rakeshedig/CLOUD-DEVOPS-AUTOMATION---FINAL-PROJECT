window.addEventListener('load', () => {
    const img = document.getElementById('backend-image');
    const status = document.getElementById('status');

    img.onerror = () => {
        status.textContent = 'Could not load image from backend. Is the backend running on http://localhost:5000 ?';
        status.style.color = 'crimson';
    };

    img.onload = () => {
        status.textContent = 'Image loaded from backend successfully.';
        status.style.color = 'green';
    };
});