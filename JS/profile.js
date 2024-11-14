const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
  let lastPressedImageId = null;

  document.querySelectorAll('.image-container').forEach((imageContainer) => {
    let isPressed = false;
    const image = imageContainer.querySelector('.image');
    const link = imageContainer.querySelector('a');

    image.addEventListener('click', function(event) {
      if (isMobile) {
        // تحقق مما إذا كانت الصورة التي ضغط عليها هي نفس الصورة الأخيرة
        if (lastPressedImageId !== image.id) {
          // صورة جديدة: تطبيق تأثير "hover" وإعادة تعيين الحالة
          lastPressedImageId = image.id; // تحديث معرف الصورة الأخيرة
          image.classList.add('hover-effect');
          isPressed = true;
          event.preventDefault(); // منع الانتقال للرابط
        } else if (isPressed) {
          // الضغط الثاني على نفس الصورة يؤدي إلى الانتقال للرابط
          window.location.href = link.href;
          isPressed = false;
          lastPressedImageId = null; // إعادة تعيين معرف الصورة بعد الانتقال
        }
      } else {
        // على الكمبيوتر: الانتقال مباشرة
        window.location.href = link.href;
      }
    });
  });