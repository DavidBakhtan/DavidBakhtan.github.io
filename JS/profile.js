// تحديد العنصر
const image = document.getElementById("myImage");

// وظيفة عند الضغط على الصورة
image.addEventListener("click", function() {
  // إضافة/إزالة الكلاس المسؤول عن تكبير الصورة
//   image.classList.toggle("enlarged");
  
  // الانتظار لبعض الوقت ثم فتح الصفحة الجديدة
//   setTimeout(() => {
    window.open("https://play.google.com/store/apps/details?id=tv.belight.mobile.android&pcampaignid=web_share", "_blank"); // افتح الصفحة في نافذة جديدة
//   }, 300); // 300 مللي ثانية، وهي نفس مدة الأنيميشن
});
