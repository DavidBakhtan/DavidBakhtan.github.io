// const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
//   let lastPressedImageId = null;
//   let isPressed = false;

//   document.querySelectorAll('.image-container').forEach((imageContainer) => {
//     const image = imageContainer.querySelector('.image');
//     const link = imageContainer.querySelector('a');

//     image.addEventListener('click', function(event) {
//       if (isMobile) {
//         // تحقق مما إذا كانت الصورة التي ضغط عليها هي نفس الصورة الأخيرة
//         if (lastPressedImageId !== image.id) {
//           // صورة جديدة: تطبيق تأثير "hover" وإعادة تعيين الحالة
//           lastPressedImageId = image.id; // تحديث معرف الصورة الأخيرة
//           image.classList.add('hover-effect');
//           isPressed = true;
//           event.preventDefault(); // منع الانتقال للرابط
//         } else if (isPressed) {
//           // الضغط الثاني على نفس الصورة يؤدي إلى الانتقال للرابط
//           window.open(link.href, '_blank');
//           isPressed = false;
//           lastPressedImageId = null; // إعادة تعيين معرف الصورة بعد الانتقال
//         }
//       } else {
//         // على الكمبيوتر: الانتقال مباشرة
//         window.open(link.href, '_blank');
//       }
//     });
//   });

let lastClickedElement = null; // To store the last clicked element
let isMobile = /Mobi|Android/i.test(navigator.userAgent); // Detect if the device is mobile

// Function to handle click event
function handleClick(event) {
    const imageContainer = event.currentTarget; // The image container that was clicked
    const link = imageContainer.querySelector('a'); // Find the link inside the clicked image container

    // Handle behavior on mobile devices
    if (isMobile) {
        // If the same image container was clicked twice, navigate to the link
        if (lastClickedElement === imageContainer) {
            window.open(link.href, '_blank'); // Open the link in a new tab
            lastClickedElement = null; // Reset the last clicked element
        } else {
            lastClickedElement = imageContainer; // Set the current image container as clicked
            imageContainer.classList.add('hovered'); // Apply the hover effect on mobile
        }
    } else {
        // Handle behavior on desktop devices (immediate link opening on click)
        window.open(link.href, '_blank'); // Open the link in a new tab
    }
}

// Attach event listeners to each image container
document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', handleClick);
});
