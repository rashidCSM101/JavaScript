# University Website

A modern, interactive university website featuring smooth scrolling, image slider, and 3D Three.js effects.

## Features

### Navigation
- Fixed navigation bar with links to all sections
- Smooth scroll navigation using Locomotive.js

### Hero Section
- Automatic image slider with 3 images
- 5-second transition interval
- Manual navigation with previous/next buttons
- Dot indicators for slide selection
- Overlay text with parallax effects

### Content Sections
- **About**: Information about the university
- **Programs**: Academic programs showcase with interactive cards
- **Contact**: Contact information with grid layout

### 3D Canvas Section
- Interactive Three.js rotating sphere
- Green wireframe effect
- Dynamic lighting

### Technologies Used
- HTML5
- CSS3 (Modern layouts with Grid and Flexbox)
- JavaScript (ES6+)
- Three.js (r128) - 3D graphics
- Locomotive Scroll (v4.1.0) - Smooth scrolling

## Setup Instructions

1. **Image Files**: Replace the placeholder image references with actual images:
   - `image1.jpg` - Campus view 1
   - `image2.jpg` - Campus view 2
   - `image3.jpg` - Campus view 3

2. **Open the Website**: Simply open `index.html` in a modern web browser.

3. **Customization**:
   - Modify colors in `styles.css`
   - Adjust slider interval in `scripts.js` (line 82)
   - Change sphere color in `scripts.js` (line 92)
   - Update content in `index.html`

## Configuration Options

### Slider Settings
```javascript
// In scripts.js
slideInterval = setInterval(autoSlide, 5000); // Change 5000 to desired milliseconds
```

### Three.js Sphere Settings
```javascript
// In scripts.js
color: 0x00ff00, // Change color (hex format)
sphere.rotation.x += 0.01; // Adjust rotation speed
```

### Smooth Scrolling
```javascript
// In scripts.js
smooth: true, // Enable/disable smooth scrolling
```

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure
```
university-website/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── scripts.js          # JavaScript functionality
├── image1.jpg          # Slider image 1 (add your own)
├── image2.jpg          # Slider image 2 (add your own)
├── image3.jpg          # Slider image 3 (add your own)
└── README.md           # This file
```

## License
Free to use for educational purposes.
