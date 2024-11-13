
const images = document.querySelectorAll('.image-container');

  images.forEach((imageContainer) => {
    let isPressed = false;
    const image = imageContainer.querySelector('.image');
    const link = imageContainer.querySelector('a');

    image.addEventListener('click', function(event) {
      if (!isPressed) {
        image.classList.add('hover-effect');
        isPressed = true;
        event.preventDefault();  
      } else {
        window.location.href = link.href;
      }
    });
  });
