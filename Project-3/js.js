const timeElement = document.querySelector('#time')

setInterval(() => {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}, 1000);