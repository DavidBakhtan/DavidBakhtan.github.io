 // التحقق مما إذا كان الجهاز محمول
 const isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
 const images = document.querySelectorAll('.image-container');

 images.forEach((imageContainer) => {
   let isPressed = false;
   const image = imageContainer.querySelector('.image');
   const link = imageContainer.querySelector('a');

   image.addEventListener('click', function(event) {
     if (isMobile) {
       // إعادة تعيين حالة "الضغط" لكل الصور الأخرى عند الضغط على صورة جديدة
       images.forEach((container) => {
         if (container !== imageContainer) {
           container.querySelector('.image').classList.remove('hover-effect');
           container.isPressed = false;
         }
       });

       if (!isPressed) {
         // الضغط الأول: إضافة التأثير فقط
         image.classList.add('hover-effect');
         isPressed = true;
         event.preventDefault(); // منع الانتقال للرابط
       } else {
         // الضغط الثاني: الانتقال للرابط
         window.location.href = link.href;
       }
     } else {
       // على الكمبيوتر: الانتقال مباشرة
       window.location.href = link.href;
     }
   });
 });