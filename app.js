const burger = document.querySelector('.burger');
const ul = document.querySelector('header ul');

window.addEventListener('resize', function(){
    ul.classList.remove('active');
    burger.classList.remove('active');
})


burger.addEventListener('click', function(){
    toggleActive(burger, ul)
})


function toggleActive(...ele){
ele.forEach(el =>{
    el.classList.toggle('active');
})
}