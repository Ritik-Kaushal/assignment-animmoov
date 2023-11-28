document.addEventListener('DOMContentLoaded', function () {
    const contentTextElement = document.getElementById('contentText');
    const imageContainer = document.getElementById('imageContainer');
    const headlight = document.getElementById('headlight');
    const machine = document.getElementById('machine');
    const car = document.getElementById('car');
    const sliderContainer = document.getElementById('sliderContainer');
    const handAnimation = document.getElementById('handAnimation');
    const slider = document.getElementById('mySlider');
    const videoContainer = document.getElementById('videoContainer');
    const lastImageContainer = document.getElementById('lastImageContainer');
    const video = document.querySelector('#videoContainer video');

    handAnimation.style.display = 'flex';
    let sliderValue = 0;
    let videoEnded = false;

    slider.addEventListener('input', function () {
        sliderValue = Number(slider.value);
        sliderContainer.style.display = sliderValue === 100 ? 'none' : 'flex';
        handAnimation.style.display = sliderValue === 0 ? 'flex' : 'none';
        imageContainer.style.display = sliderValue === 100 ? 'none' : 'flex';
        videoContainer.style.display = sliderValue === 100 ? 'block' : 'none';
        car.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0% 100%)`;
        headlight.style.display = sliderValue >= 25 && sliderValue <= 35 ? 'flex' : 'none';
        machine.style.display = sliderValue >= 70 && sliderValue <= 80 ? 'flex' : 'none';

        contentTextElement.textContent = (sliderValue >= 25 && sliderValue <= 35) ? 'High intensed LED light' : (sliderValue >= 70 && sliderValue <= 80) ? 'Lithium-ion High Voltage Battery' : '';
    });

    video.addEventListener('ended', function () {
        videoEnded = true;
        lastImageContainer.style.display = 'flex';

    });
});
