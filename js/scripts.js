
/* ------------------------------Smooth Scrolling------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    // Hover effects for social icons
    const socialIcons = document.querySelectorAll(".socials img");
    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.opacity = "0.8";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.opacity = "1";
        });
    });

    // Dynamic styling for download links on viewport changes
    const downloadLink = document.querySelector(".download-link");
    if (downloadLink) {
        const adjustDownloadLink = () => {
            if (window.innerWidth < 1200) {
                downloadLink.style.position = "absolute";
            } else {
                downloadLink.style.position = "fixed";
            }
        };

        window.addEventListener("resize", adjustDownloadLink);
        adjustDownloadLink(); // Call on initial load
    }
});

/*------------------------------image generation------------------------------
Following part are original JS 
This part is creative as it generate the background using canvas.*/
// get the canvas and context 
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define colors 
const colors = ["#ff5f57", "#ffbb33", "#34c3eb", "#7f4dd3", "#f7e04a"];

// Array to store squares
let squares = [];

// Function to generate the random squares
function generateSquares(count) {
  squares = []; // Clear the previous squares

  for (let i = 0; i < count; i++) {
      // Create a square with random properties
      const square = {
          x: Math.random() * canvas.width, // Random x position
          y: Math.random() * canvas.height, // Random y position
          size: Math.random() * 60 + 5, // Random size (5 to 55px)
          color: colors[Math.floor(Math.random() * colors.length)], // Random color
          isFilled: Math.random() < 0.5, // Randomly decide if filled
      };
      squares.push(square); // Add square to the array
  }
}
  
// Function to draw squares
function drawSquares() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  squares.forEach((square) => {
      if (square.isFilled) {
          // Draw a filled square
          ctx.fillStyle = square.color;
          ctx.fillRect(square.x, square.y, square.size, square.size);
      } else {
          // Draw an outlined square
          ctx.strokeStyle = square.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(square.x, square.y, square.size, square.size);
      }
  });
}

// Function to handle resizing
function handleResize() {
  // Update canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = 375;

  // Adjust squares to stay within the new canvas size
  squares.forEach((square) => {
      square.x = Math.random() * canvas.width; // Re-randomize position
      square.y = Math.random() * canvas.height;
  });

  drawSquares(); // Redraw squares after resizing
}

// Generate initial squares and draw them
generateSquares(100); // Adjust the count of squares as needed
drawSquares();

// Handle window resizing
window.addEventListener("resize", handleResize);