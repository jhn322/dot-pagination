// Cycle through the dots with scroll function

const dots = document.querySelectorAll(".dots button");
let currentIndex = 0;
let scrollAccumulator = 0;
// Scroll sensitivity
const scrollThreshold = 3;

// Function to handle dot focus
const focusDot = (index) => {
  dots.forEach((dot) => dot.blur());
  dots[index].focus();
};

// Function to handle scrolling
const handleScroll = (event) => {
  // Detects scroll direction
  const delta = Math.sign(event.deltaY);

  if (delta !== 0) {
    // Accumulates the scroll action
    scrollAccumulator += Math.abs(delta);

    if (scrollAccumulator >= scrollThreshold) {
      if (delta > 0) {
        // If scrolling down, move to the next dot
        currentIndex = (currentIndex + 1) % dots.length;
      } else if (delta < 0) {
        // If else scrolling up, move to the previous dot
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
      }

      // Sets focus on the new dot
      focusDot(currentIndex);
      // Resets scroll counter
      scrollAccumulator = 0;
    }
  }
};

// Adds evenlistener for scrolling
document.addEventListener("wheel", handleScroll);
