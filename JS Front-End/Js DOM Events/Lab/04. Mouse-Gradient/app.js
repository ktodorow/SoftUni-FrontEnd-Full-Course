function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const width = event.target.clientWidth;
        const progress = Math.floor((currentWidth / width) * 100);

        resultElement.textContent = `${progress}%`;
    });
}