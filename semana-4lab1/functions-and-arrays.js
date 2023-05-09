// Iteration #1: Find the maximum

function maxOfTwoNumbers() {
    
console.log(Math.max(4,7,8));

}
maxOfTwoNumbers()

// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

let MiPalabraMasLarga = [""]

function namfindLongestWorde(params) {
    
    for (let index = 0; index < words.length; index++) {
       console.log(words[index].split(""));

       if(words[index].length > MiPalabraMasLarga.length ){
        MiPalabraMasLarga = words[index];

       }
        
    }
    return MiPalabraMasLarga;
}
console.log(namfindLongestWorde());

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

let sumatotal = 0



     for (let i = 0; i < numbers.length; i++) 
        
        sumatotal += numbers[i]
  
console.log(sumatotal)


// Iteration #4: Calculate the average

console.log(sumatotal /numbers.length );

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    for (let i = 0; i < numbersAvg.length; i++) {
       console.log(numbersAvg[i] / numbersAvg.length); 

    }
}

averageNumbers();



// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

let averageWordLength = ((promediototal) => {

    for (let i = 0; i < wordsArr.length; i++) {
        
        console.log(wordsArr[i].length / wordsArr.length);
    }
     
 })
 averageWordLength()

 // Iteration #5: Unique arrays
const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  let result = wordsUnique.filter((item,index)=>{
    return wordsUnique.indexOf(item) === index;
  })
  console.log(result)  

  // Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience' ];

let YesWordExist = wordsFind.some((SiExiste) =>
    SiExiste === "machine" );

const NoWordExist = wordsFind.some((NoExiste) => {

    return NoExiste ==="dog"
})

console.log(YesWordExist);
console.log(NoWordExist);

// Iteration #7: Count repetition
const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
  ];
  
  
  function howManyTimes(arryVerificar,palabrabuscar) {
    let total = 0

    arryVerificar.forEach(element => {
        if( element === palabrabuscar){
            total++
        }
        
    })
    console.log(total);
    return total
  }
 howManyTimes(wordsCount, "matter");