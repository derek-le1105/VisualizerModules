'use strict';

const moduleCards = document.getElementsByClassName("card"); 
const navbarLinks = document.getElementsByClassName("nav")
const title = document.getElementById("title-name");
console.log('title: ', navbarLinks[0].id);

function sortingVisualizer(){
    for(let i = 0; i < moduleCards.length; ++i)
        moduleCards[i].classList.add('hidden');
    for(let i = 0; i < navbarLinks.length; ++i){
        if(navbarLinks[i].classList.contains('active'))
            navbarLinks[i].classList.remove('active');
        if(navbarLinks[i].id == 'sort-nav')
            navbarLinks[i].classList.add('active')
    }

    title.classList.add('hidden');
}

function tilePuzzle(){
    for(let i = 0; i < moduleCards.length; ++i)
        moduleCards[i].classList.add('hidden');
    for(let i = 0; i < navbarLinks.length; ++i){
        if(navbarLinks[i].classList.contains('active'))
            navbarLinks[i].classList.remove('active');
        if(navbarLinks[i].id == 'tile-nav')
            navbarLinks[i].classList.add('active')
    }

    title.classList.add('hidden');  
}