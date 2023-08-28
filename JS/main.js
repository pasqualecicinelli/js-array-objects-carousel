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


let cardIdElem = document.getElementById('container-card');
let cardElem = document.getElementsByClassName('card');

let buttonBack = document.getElementById('btn-back');
let buttonNext = document.getElementById('btn-next');



let activeImgCounter = 0;

// ciclo per creare il 'DIV' in base alla lunghezza dell'array

images.forEach((keyImages, index) => {

    const cardImgElem = document.createElement('div');

    // add la classe card-img

    cardImgElem.classList.add('card-img');

// se index dell'array e il contatore activeImgConter sono uguali add 'active' alla classe

    if (index == activeImgCounter) cardImgElem.classList.add('active');

    //scrivo nel html tutto l'arrey di oggetti ad ogni ciclo

    cardImgElem.innerHTML = `
    <img src="./${keyImages.image} ">
    <div class="card-title-description m-2">
    <h5 class="card-title text-end" id="title"> ${keyImages.title}</h5>
    <p class="card-text text-end" id="description"> ${keyImages.text}</p>
    </div>
    `;

    console.log(cardImgElem);

//creo un nodo con la classe 'active'

    keyImages.nodo = cardImgElem;
    cardIdElem.append(cardImgElem);
   
});


buttonNext.addEventListener('click', next)

function next() {

//creo una varibile e gli passo l'arrey con il nodo con la classe 'active'

    const oldCardActive = images[activeImgCounter].nodo;

    //rimuovo la classe 'active'

    oldCardActive.classList.remove('active');

//incremento il contatore

    activeImgCounter++;
    
//se il contatore è minore della lunghezza dell'arrey add 'active' alla classe successiva
//altrimenti quando il contatore è maggiore o uguale alla lunghezza dell'arrey, il contatore ritorna a 0

    if (activeImgCounter >= images.length) activeImgCounter = 0;

    const newCardActive = images[activeImgCounter].nodo;
    newCardActive.classList.add('active');
}

next();

buttonBack.addEventListener("click", back)

function back() {

//creo una varibile e gli passo l'arrey con il nodo con la classe 'active'

    const oldCardActive = images[activeImgCounter].nodo;

    //rimuovo la classe 'active'

    oldCardActive.classList.remove('active');

//decremento il contatore

    activeImgCounter--;

//se il contatore è minore di 0 la lunghezza dell'arrey va all'ultimo oggetto dell'arrey
//altrimenti add 'active' alla classe precedente

    if (activeImgCounter < 0) activeImgCounter = images.length - 1;

        const newCardActive = images[activeImgCounter].nodo;
    newCardActive.classList.add('active');

};

back();