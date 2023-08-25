const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];

let cardPicture = document.getElementById('card-picture');
let cardImg = document.getElementsByClassName('card-img');
let cardTitle = document.getElementById('title');
let cardDescription = document.getElementById('description');
let buttonBack = document.getElementById('btn-back');
let buttonNext = document.getElementById('btn-next');

let activeImg = 0;

buttonNext.addEventListener("click", function () {

//non funziona

    const activePicture = document.querySelector(".cardImg");

    cardPicture.classList.remove('active');

    if (activeImg <= images.image) {

        activeImg++;
        let newCardPicture = cardPicture;
        newCardPicture.classList.add('active');
    } else {
        activeImg = 0;

    }


    /* for (let keyPicture of images) {
 
         cardPicture.innerHTML +=
             '<img src="./' + `${keyPicture.image}` + '">';
     }*/


});