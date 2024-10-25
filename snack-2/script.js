/*Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array in cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


const squadraCalcio = [
    {name : "inter", punti : 0 , fallisubito : 0},
    {name : "Milano", punti : 0 , fallisubito : 0},
    {name : "Torino", punti : 0 , fallisubito : 0},

];
//  console. log(squadraCalcio); // ho  fatto il console.log per verificare se funczione bene
 
squadraCalcio.forEach(name => {
    name.punti =Math.floor(Math.random()*100);
    name.fallisubito =Math.floor(Math.random()*205);

});
console.log(squadraCalcio)
