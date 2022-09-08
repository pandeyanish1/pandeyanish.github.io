burger = document.querySelection('.burger')
navbar = document.querySelection('.navbar')
navList = document.querySelection('.navList')
rightNav = document.querySelection('.rightNav')
nav 

burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})
