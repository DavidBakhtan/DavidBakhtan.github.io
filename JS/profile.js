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

let lastClickedElement = null;
let isMobile = /Mobi|Android/i.test(navigator.userAgent); // Check if it's a mobile device

// Function to handle click event
function handleClick(event) {
    const imageContainer = event.currentTarget; // The container where image was clicked
    const link = imageContainer.querySelector('a'); // The link inside the image container

    // If it's a mobile device, handle click in a special way
    if (isMobile) {
        // If the same image container was clicked twice, navigate to the link
        if (lastClickedElement === imageContainer) {
            window.open(link.href, '_blank'); // Open link in a new tab
            lastClickedElement = null; // Reset the last clicked element
        } else {
            lastClickedElement = imageContainer; // Set the current clicked image container
            imageContainer.classList.add('hovered'); // Apply the hover effect
        }
    } else {
        // On desktop, navigate immediately when clicked
        window.open(link.href, '_blank'); // Open the link in a new tab
    }
}

// Attach event listeners to each image container
document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', handleClick);
});
