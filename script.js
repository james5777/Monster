// variables

let greenCan = document.querySelector('.producto_1');
let blueCan = document.querySelector('.producto_2');
let yellowCan = document.querySelector('.producto_3');
let bodyStyle = document.querySelector('body');
let desing = document.querySelector('.imagen');
let greenButton = document.querySelector('.myButton');
let instagramBlack = document.querySelector('.instagram');
let facebookBlack = document.querySelector('.facebook');
let tiktokBlack = document.querySelector('.tiktok')

//EVENTO

blueCan.addEventListener('click', ()=>{
    desing.classList.remove('green');
    desing.classList.remove('yellow');

    desing.classList.add('blue');

    bodyStyle.classList.remove('yellow');
    bodyStyle.classList.remove('green');

    bodyStyle.classList.add('blue');

    greenButton.classList.remove('green');
    

    instagramBlack.classList.add('negro');
    facebookBlack.classList.add('negro');
    tiktokBlack.classList.add('negro');


})

greenCan.addEventListener('click', ()=>{
    desing.classList.remove('yellow');
    desing.classList.remove('blue');

    desing.classList.add('green');

    bodyStyle.classList.remove('yellow');
    bodyStyle.classList.remove('blue');

    instagramBlack.classList.remove('negro');
    facebookBlack.classList.remove('negro');
    tiktokBlack.classList.remove('negro');

    
    
    
})

yellowCan.addEventListener('click', ()=>{
    desing.classList.remove('green');
    desing.classList.remove('blue');

    desing.classList.add('yellow');

    bodyStyle.classList.remove('green');
    bodyStyle.classList.remove('blue');

    bodyStyle.classList.add('yellow');

    greenButton.classList.remove('green');

    instagramBlack.classList.add('negro');
    facebookBlack.classList.add('negro');
    tiktokBlack.classList.add('negro');
})


