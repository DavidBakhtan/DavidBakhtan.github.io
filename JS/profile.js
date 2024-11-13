const images = document.querySelectorAll('.image-container');

  images.forEach((imageContainer) => {
    let isPressed = false;
    const image = imageContainer.querySelector('.image');
    const link = imageContainer.querySelector('a');
    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    image.addEventListener('click', function(event) {
      if (isMobile) {
        if (!isPressed) {
          image.classList.add('hover-effect');
          isPressed = true;
          event.preventDefault(); 
        } else {
          window.location.href = link.href;
          isPressed= false;
        }
      } else {
        window.location.href = link.href;
      }
    });
  });
