const nav = document.querySelector('.br');
const pt = document.querySelector('.pt');
const ptm = document.querySelector('.ptm');
const image = document.querySelectorAll('.M1, .M2, .M3, .M4 ,.M5')

let compteur = 1;

const affichage = (num)=>{
    image.forEach((img,index)=>{
        if(index + 1 === num){
            img.classList.remove('hidden')
            console.log(index)
        }else{
            img.classList.add('hidden')
        }
    })
    
} 

const interval = setInterval(()=>{
    if(compteur<5){
        compteur++; 
    }else if(compteur == 5){
        compteur = 1;
    }
    affichage(compteur)

},2000)

window.addEventListener('scroll',() =>{
    if(window.scrollY > 0){
        nav.classList.remove('view');
        pt.classList.remove('view2');
        ptm.classList.remove('view3');
    }else{
        nav.classList.add('view');
        pt.classList.add('view2');
        ptm.classList.add('view3')
    }
})