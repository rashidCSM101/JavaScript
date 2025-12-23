// Initialize Locomotive Smooth Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#scroll-container'),
    smooth: true,
    smoothMobile: false,
    resetNativeScroll: true
});

// Update scroll on window resize
window.addEventListener('resize', () => {
    scroll.update();
});

// Image Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Wrap around if index is out of bounds
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Add active class to current slide and dot
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetSlideInterval();
}

function currentSlide(index) {
    showSlide(index);
    resetSlideInterval();
}

function autoSlide() {
    showSlide(currentSlideIndex + 1);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000);
}

// Start auto-sliding
slideInterval = setInterval(autoSlide, 5000);

// Three.js Canvas Setup
const canvas = document.getElementById('threejs-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create rotating sphere
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    wireframe: false,
    shininess: 100
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Add wireframe overlay
const wireframeGeometry = new THREE.SphereGeometry(2.05, 32, 32);
const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const wireframeSphere = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
scene.add(wireframeSphere);

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0x00ff00, 0.5, 100);
pointLight2.position.set(-5, -5, -5);
scene.add(pointLight2);

camera.position.z = 5;

// Animation loop
function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);

    // Rotate sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    wireframeSphere.rotation.x += 0.01;
    wireframeSphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animateThreeJS();

// Handle window resize for Three.js
window.addEventListener('resize', () => {
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    
    scroll.update();
});

// Smooth scroll to sections
document.querySelectorAll('a[data-scroll-to]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
            scroll.scrollTo(target);
        }
    });
});

// Initialize on load
window.addEventListener('load', () => {
    scroll.update();
});

console.log('University Website Initialized');
console.log('Locomotive Scroll: Active');
console.log('Image Slider: Active (5s interval)');
console.log('Three.js Canvas: Active (Rotating Sphere)');
