# Carosello Array di Oggetti

## TRACCIA

Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica, ma dedicargli molto tempo da subito può farvi rimanere indietro.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


## SVOLGIMENTO

### Milestone 0:

Costruisco un container con una card una card-img per inserire l'img, card-title e card-description
fuori dalla card-img inserisco 2 bottoni 'Back' and 'Next'

### Milestone 1:

Rimuovo gli elementi statici li aggiungo all'interno di due bottoni che al click attiveranno la funzione:
- Back che tornera all'img prima con il titolo e testo annesso attraverso un decremento dell'index o
- Next che andrà all'img successiva con il titolo e testo annesso attraverso un incremento dell'index

### Milestone 2:

Attraverso un ciclo for ed if controllo in base al numero del img e al click sul bottone se hanno lo stesso indice max allora ritornerà alla prima img e viceversa con il min