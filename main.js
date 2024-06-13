// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// collegare il container dei div a js  

const container = document.getElementById("container");

// creare un ciclo che crea 100 div
for (i = 0; i < 100; i++){

    // creiamo i div
    const box = document.createElement ('div');

    console.log(box);

    // assegniamo una classe ai div 

    box.classList.add('square');
    console.log(box);

    container.append(box);
}

 



// dare l'input click dei div per cambiargli il colore

// associare al click l'aggiunta di una classe per fargli cambiare colore 

// assegnare un numero ad ogni casella e far apparire il numero in console log 


