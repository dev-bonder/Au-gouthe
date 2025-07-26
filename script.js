const nav = document.querySelector('.br');
const pt = document.querySelector('.pt');

window.addEventListener('scroll',() =>{
    if(window.scrollY > 0){
        nav.classList.remove('view');
        pt.classList.remove('view2');
    }else{
        nav.classList.add('view');
        pt.classList.add('view2');
    }
})