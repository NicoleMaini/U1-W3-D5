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
const a = 10;
const b = 20;

const sum = a + b;

console.log("Es a:", sum);


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21) 

console.log("Es b:", random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Nicole",
  surname: "Maini",
  age: "27",
}

console.log("Es c:", me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age

console.log("Es d:", me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di 
  programmazione che conosci.
*/

me.skills = ["html","css", "js", "php"]

console.log("Es e:", me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("java")

console.log("Es f:", me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()

console.log("Es g:", me);


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => {
 return Math.floor(Math.random() * 6) + 1
} 

console.log("Es 1:", dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {

   if(typeof n1 === "number" && typeof n2 === "number"){
    if(n1 > n2){
       console.log(`Es 2: ${n1} è il numero maggiore`);
    } else{
      console.log(`Es 2: ${n2} è il numero maggiore`);
    }
  } else {
    console.log("Inserisci un numero valido");
  }

}

whoIsBigger(5,2)


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => {
  const words = string.split(" ")
  const wordsArray = []
  for (let i = 0; i < words.length; i++){
      let firstChar = words[i].charAt().toUpperCase();
      let lastLetters = words[i].slice(1);
      let word = firstChar + lastLetters;
      wordsArray.push(word)
  }
  return wordsArray
}

console.log("Es 3:", splitMe("Sto frequentando un corso Epicode"));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, booleanValue) => {
  if(booleanValue === true){
    return string.slice(1);
  } else {
    return string.slice(0, string.length -1)
  }
}

console.log("Es 4:", deleteOne("Sono una stringa zoppa", true))


/* ESERCIZIO 5 -------------
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => { 
  let words = string.split(" ")
  const phrase = []
  console.log(words);
  for(let i = 0; i < words.length; i++){
    if(isNaN(parseInt(words[i]))){
      phrase.push(words[i])
    }
  }
  return phrase.join(" ")
}
console.log("Es 5:", onlyLetters("Ho 2 cani e 3 gatti"));

// corretto, a mia discolpa però dico che l'avevo pensata (un po' maccheronica) ma non ho avuto il tempo di metterla in pratica... eh pazienza :'()


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (string)=>{
  console.log(`"Es 6: E' questo indirizzo ${string} una mail?`, string.includes("@"))
}

isThisAnEmail("epicode@intoepicode.com")


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]

const whatDayIsIt = ()=>{
    const date = new Date()
    let dayIndex = date.getDay()
    return days[dayIndex]
}
 
console.log("Es 7:", whatDayIsIt());


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

const rollTheDices = (number)=>{
  const obj = {};
    if(typeof number === "number"){
      const values = []
        for (let i = 0; i < number; i++) {
          values.push(dice())
       }
       const sum = values.reduce((total, correntValue)=> total + correntValue, 0);
       obj.sum = sum;
       obj.values = values;
       return obj
    } else {
      return "inserisci un numero valido"
    }
}

console.log("Es 8:", rollTheDices(9));


/* ESERCIZIO 9 --------
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// const howManyDays = (date) => {

// }


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const myBirthdayDate = new Date ("1996-12-19");
  const todayDate = new Date()
  if(myBirthdayDate === todayDate){
    return console.log("Es 10: Oggi è il mio compleano 🥳")
  } else {
    return console.log("Es 10: Oggi non è il mio compleano 😢")
  }

}

isTodayMyBirthday();


// Arrays & Oggetti

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


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// vedi oggetto me Esercizio C

const deleteProp = (obj, string) => {
  delete obj[string]
  return obj
 
}

console.log("Es 11:", deleteProp(me, "name"));


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) => {
  let newMovies = array[0]
for (let i = 0; i < array.length; i++){
    const movie = array[i];
    let currentYears = parseInt(array[i].Year)
    if(currentYears > newMovies.Year){
      newMovies = movie
    }
}
  console.log("Es 12:", newMovies)
}

newestMovie(movies);


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (array) => {
  return array.length
}

console.log("Es 13:", countMovies(movies));


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (array) => {
  let years = []
  array.forEach(year => { years.push(year.Year)});
 return years
}

console.log("Es 14:", onlyTheYears(movies));


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (array) => {
  let newMovies = []
for (let i = 0; i < array.length; i++){
    const movie = array[i];
    let currentYears = parseInt(array[i].Year)
    if(currentYears < 2000){
      newMovies.push(movie)
    }
}
  console.log("Es 15:", newMovies)
}

onlyInLastMillennium(movies);


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (array) => {
  let newMovies = []
for (let i = 0; i < array.length; i++){
    let currentYears = parseInt(array[i].Year)
      newMovies.push(currentYears)
    }
    let sum = newMovies.reduce((total, correntValue) => total + correntValue, 0)
    return sum
  }

console.log("Es 16:", sumAllTheYears(movies))


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (array, string) => {
  let titleMovies = []
  for (let i = 0; i < array.length; i++){
      let currentMovie = array[i].Title.toLowerCase()
      if (currentMovie.includes(string.toLowerCase())){
        titleMovies.push(array[i])
      }
      }
  return titleMovies
}

console.log("Es 17:", searchByTitle(movies, "lords"));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, string) => {
  let match = []
  let unmatch = []
  for (let i = 0; i < array.length; i++){
      let currentMovie = array[i].Title.toLowerCase()
      if (currentMovie.includes(string.toLowerCase())){
        match.push(array[i])
      } else {
        unmatch.push(array[i])
      }
      }
  console.log("Es 18:", match, unmatch);
}
searchAndDivide(movies, "lord")


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, number) => {
if (typeof number === "number"){
   array.splice(number, 1)
   return array
}
}

console.log(removeIndex(movies, 6));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const idContainer = () => {
  const container = document.getElementById("container")
  console.log("Es 20:", container.innerText)
}

idContainer();


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = () => {
  const tdTable = document.getElementsByTagName("td")
  console.dir(tdTable)
  console.log("Es 21:", tdTable[0].innerText)
}

td()


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampTd = () => {
  const tdTable = document.querySelectorAll("td")
  tdTable.forEach(td => {console.log(td.innerText)})
}

stampTd()


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const backgRed = () => {
  const allLinkInThePage = document.querySelectorAll("a")
  allLinkInThePage.forEach((a) => a.classList.add("backg-color"))
    
  }

backgRed()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLi = () => {
  const ul = document.getElementById("myList")
  const li = document.createElement("li")
  li.innerText = "Element 4"
  ul.appendChild(li)
}

addLi()


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const toEmptyUl = () => {
  const ul = document.querySelectorAll("#myList")
  ul.forEach((li) => li.remove())
}

toEmptyUl()


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTextInTr = () => {
  const tr = document.querySelectorAll("tr")
  tr.forEach((tr) => tr.classList.add("test"))
}

addClassTextInTr()


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (number) =>{

  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let n = 1; n <= i; n++) {
     row += "* ";
    }
    console.log(row);
  }
}

halfTree(5)


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// const tree = (number) =>{

//   for (let i = 1; i <= number; i++) {
//     let row = "";
//     for (let n = 1; n <= i; n++) {
//      row += " * "
//     }
//     console.log(row);
//   }
// }

// tree(5)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

// const isItPrime = (number) => {
//   for(let i = 0; i < number; i++){
//   if ((number/i) === 1 || (number/i) === number && (number/i) !== i){
//   console.log("Es 29: true");
//   } else {
//   console.log("Es 29: false");
//   }
//   }
// }

// isItPrime(5)
 
/* Questo array viene usato per gli esercizi. Non modificarlo. */

