//HAMBURGER MENU
const menuBtn = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('show');
  if (menu.classList.contains('show')){
    menuBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  } else {
    menuBtn.innerHTML = 'MENU<i class="fa-solid fa-bars"></i>';
  }
});



//HERO SECTION BUTTON
const showBtn = document.getElementById("btn1");
const showBtn2 = document.getElementById("btn2");
const showImage = document.getElementById("contactId");
const showContent = document.getElementById("caseStudyId");
const hideContent = document.getElementById("contactId");




showBtn.addEventListener("click", () => {  //WORK WITH ME btn
  showImage.src  = "images/Hubspot_AEO_Cert.png" 
  hideContent.style.display = "block"
  showContent.style.display = "none"
});

showBtn2.addEventListener("click", () => {   //LEARN MORE btn
  showContent.style.display = "none"
  hideContent.style.display = "block"
});



//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
});

