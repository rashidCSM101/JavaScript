const circles = document.querySelectorAll('.circle');
const body = document.querySelector('body')
circles.forEach(function(circle) {    
    circle.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.id === 'circle1') {
            body.style.backgroundColor = 'rgb(48, 48, 48)'; 
        }
        if (e.target.id === 'circle2') {
            body.style.backgroundColor = "green";
        }
        if (e.target.id === 'circle3') {
            body.style.backgroundColor = 'blue';
        }
        if (e.target.id === 'circle4') {
            body.style.backgroundColor = 'orange';
        }
    });
});