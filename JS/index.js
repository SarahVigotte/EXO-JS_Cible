// sélectionner la cible

let target = document.querySelector('.target');
let stock = target.textContent;
// console.log(stock);

//sélectionner déclencheurs dans div class="listeners-area" > div class="listeners":

//1) Clique pour changer le fond en bleu
let listener1 = document.querySelector('#listener1');

//2) Double-clique pour changer de sens
let listener2 = document.querySelector('#listener2');

//3) Passe la souris pour zoomer
let listener3 = document.querySelector('#listener3');

//4) Change le texte (max. 10). (contient <input type="text"></input>)
let listener4 = document.querySelector('#listener4 input');
listener4.value = '';

//attribuer les evenements aux déclencheurs

listener1.addEventListener('click', ()=>{

    target.classList.toggle('background');
    // if (target.style.backgroundColor != 'blue'){
    //     target.style.backgroundColor = 'blue';
    // }
    // else if (target.style.backgroundColor = 'blue'){
    //     target.style.backgroundColor = '#A8FF55';
    // }

});


listener2.addEventListener('dblclick', ()=>{

    if (target.style.rotate !='190deg'){
        target.style.rotate = '190deg';
    }
    else if (target.style.rotate ='190deg'){
        target.style.rotate= 'none';
    }

});


listener3.addEventListener('mouseenter', ()=>{
    target.style.transform = 'scale(1.2)'

});
listener3.addEventListener('mouseout', ()=>{
    target.style.transform = 'scale(1)'

});


listener4.addEventListener('keyup', (e)=>{
    target.textContent = e.target.value.slice(0,10);
});

listener4.addEventListener('focusout', ()=>{
    if (listener4.value == ''){
        target.textContent = stock;
    }
});