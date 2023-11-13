/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum =0;

let a=10;
let b=20;

sum=a+b;

console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random=Math.round(Math.random()*20)

console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me={ name:"Giuseppe",
surname:"Sansone",
age:30};


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills=["Html","Java","Javascript","Css"]

console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills[4]="PHP"

console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
delete me.skills[2]

console.log(me)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


function dice(){

  let dado=Math.round(Math.random()*6)
return dado
}

console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function WhoIsBigger(num1,num2){

if(num1>num2){return num1+ " è il numero più grande"}
else if(num1===num2){return console.log("numbers are equal")}
else{return num2 + " è il numero più grande"}}



console.log(WhoIsBigger(4,5))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(Stringa){

  return Stringa.split(" ")
}

console.log(splitMe("tutto ciò è divertente"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(Stringa,booleano){

  if (booleano===true){return Stringa.slice(1,Stringa.length)}
  else  {return Stringa.slice(0,-1)}
}

console.log(deleteOne("dorio",true))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/



function onlyLetters(Stringa){
return Stringa.replace(/[0-9]+\d*/g,"")

}

console.log(onlyLetters("I have 5  dogs and 3 cats"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/


function isThisAnEmail(Stringa){
let regex=/^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
if (regex.test(Stringa)===true){return "la tua e-mail è valida"}
else{return "la tua mail non è valida"}

}

console.log(isThisAnEmail("info@mail.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


function whatDayIsIt(date){

let days=['DOM','LUN','MAR','MER','GIO','VEN','SAB']
return days[date.getDay()]
}

let date=new Date()

//alert( whatDayIsIt(date))





/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dice(){

  let dado=Math.round(Math.random()*6)
return dado
}

console.log(dice(3))

function rollTheDices(num){
let invocazioni=[];
 
for(let i=0; i<num;i++)
{  invocazioni[i]=dice()}
 return invocazioni
}
console.log(rollTheDices(5))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


let data1 = new Date("05/9/2011");
let data2 = new Date();

function howManyDays(){
  var diffTempo = data2.getTime() - data1.getTime();
  var diffGiorni = diffTempo / (1000 * 3600 * 24);
  console.log("Differenza in ore: "+diffTempo);
  console.log("Differenza in giorni: "+diffGiorni)
}


console.log(howManyDays())
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
let isTodayMyBirthday = () => {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  if(month === 6 && day === 18){
    return true;
  } else {
    return false;
  };
}
console.log(isTodayMyBirthday())

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


let obj ={
  name: "Giuseppe",
  surname: "Sansone"
}
function deleteProp(obj, str){
  delete obj[str]
  return obj
}
console.log(deleteProp(obj, "name"))




// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/



function container(){

  const body = document.querySelector('body')
  let div=document.createElement("div")
  let appendidiv=body.appendChild(div)
  
  let divo=document.querySelector("#container")
  let p=document.createElement("p")
  let appendip=div.appendChild(p)
  p.innerText="evvai"

}

container()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/


function tagtdselection(){
  for(i=0;i<5;i++){
  const td = document.createElement("td");
  td.innerText = "td";
  document.body.appendChild(td);
  const tuttitd = document.querySelectorAll('td')
  tuttitd.forEach(ele=>ele.innerText="vafanculooooo")
}

}

console.log(tagtdselection())
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function tagtdselection(){
  for(i=0;i<5;i++){
  const td = document.createElement("td");
  td.innerText = "td";
  document.body.appendChild(td);
  const tuttitd = document.querySelectorAll('td')
  tuttitd.forEach(ele=>ele.innerText="vafanculooooo")
}

}

console.log(tagtdselection())




/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function backgroundLink(){
  for(i=0;i<5;i++){
    const a = document.createElement("a");
    a.innerText = "clicca";
    a.href="www.wattelapesca.com"
    document.body.appendChild(a);
    const tuttia = document.querySelectorAll('a')
    tuttia.forEach(ele=>
      
      ele.style.backgroundColor="red")
  }
  
  }
  
  console.log(backgroundLink())

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/



  const addToTheSecond = function (content) {
    const ul = document.getElementById('myList')
    const li = document.createElement("li");
    li.innerText = content;
    ul.appendChild(li);

    // OPPURE
    // ul.innerHTML += `<li>${content}</li>`
  }
  addToTheSecond('nuovo elemento')


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotalista(){
  
   
  const ul = document.getElementById('myList')
  
ul.innerHTML="" //per cancellare ul e svuotarla?


}

console.log(svuotalista())



/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function trclass(){
  for(i=0;i<5;i++){
    const tr = document.createElement("tr");
    
   
    document.body.appendChild(tr);
    const tuttitr = document.querySelectorAll('tr')
    tuttitr.forEach(ele=>
      
     { ele.className="test"
      ele.innerText="test"
    console.dir(ele)}
      )
  }
  
  }
  console.log(trclass())
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

 

*/

    const halfTree = (x)=>{
      for(let i = 1; i<=x; i++){
        let riga ="";
        for(let j = 1; j<=i; j++){
          riga += '*'; 
        }
        console.log(riga)
      }
  }

  
console.log(halfTree(8))

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(num){
  for(let i = 0; i <= num; i++){
    let albero = ""
    for(let x = 0; x < num - i; x++){
      albero += " "
    }
    for(let y = 0; y<i; y++){
      albero += " *"
    }
    console.log(albero)
  }
}
tree(4)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num){
  let cont = 0;
  
    for(let i = 1; i<=num;i++){
      if(num % i === 0){
        cont++
      }
    }
    if(cont>2){
      console.log(num + ' non è un numero primo')
    }else{
      console.log(num + ' è un numero primo')
    }
  }

  isItPrime(20)






/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]





/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) =>{

  let nuovo=array[0];
  array.forEach(film=>{if (nuovo.Year<film.Year){

    nuovo=film
  }})

return nuovo}
  
console.log(newestMovie(movies))


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


function countMovies(array){

return array.length
}

console.log(countMovies(movies))


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


function onlyTheYears(array){

  return array.map(film=> { return film = parseInt(film.Year)})
  }
  
  console.log(onlyTheYears(movies))

  /* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/



function onlyInLastMillennium(array){
//impara a sovrascirvere modificare valore corrente a tuo vantaggio
return array.filter(film=>{ film=parseInt(film.Year)

return film<1999})

}

console.log(onlyInLastMillennium(movies))



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears= (array)=>{

   return array.reduce((contatoreanni,film)=>
  
contatoreanni+parseInt(film.Year),0)
  
  }
  console.log(sumAllTheYears(movies))


  
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


const searchByTitle= (array,StringaTitolo)=>{

  return array.find(film=>film.Title===StringaTitolo)
}
console.log(searchByTitle(movies,'Avengers: Age of Ultron'))
  




/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


const searchAndDivide=(array,Stringa)=>{
  oggetto={match:[],
    unmatch:[]}
  

   array.forEach((film)=>{if(film.Title.includes(Stringa)){oggetto.match.push(film.Title)}
  else{oggetto.unmatch.push(film.Title)}})

  return oggetto
}

console.log(searchAndDivide(movies,'Avengers: Age of Ultron'))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


const removeIndex = function (array, numeroindice) {

return array.splice(numeroindice,1)
}
console.log(removeIndex(movies,5))





