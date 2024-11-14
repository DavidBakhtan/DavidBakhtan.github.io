    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    let lastPressedImageId = null;
    let isPressed = false;
    function isMobileDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    document.querySelectorAll('.image-container').forEach((imageContainer) => {
    const image = imageContainer.querySelector('.image');
    const link = imageContainer.querySelector('a');
    
    if (isMobileDevice()) {
    image.addEventListener("touchstart", function(event) {
      if (lastPressedImageId !== image.id) {
        lastPressedImageId = image.id; 
        image.classList.add('hover-effect');
        isPressed = true;
        event.preventDefault();
        } else if (isPressed) {
          window.open(link.href, '_blank');
          isPressed = false;
          lastPressedImageId = null; 
        }
        });
    } else {
    document.addEventListener("mouseover", function(event) {
    window.open(link.href, '_blank');
    })
     }
    });
