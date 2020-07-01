//фильтрация строки


const string = "Привет! Как дела?";
var pattern = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
const getVowels = stringToFilter => {
let extractedVowels = ""

for (let i=0 ; i < stringToFilter.length; i++){

   const curentLettres = stringToFilter[i].toLowerCase();

        if (pattern.includes(curentLettres)){
            extractedVowels += curentLettres;
        }
}
return extractedVowels;
}

console.log(getVowels(string));

// Выборка обекта


const workers = [
   {"name":"John","salary":500},
   {"name":"Mike","salary":1300},
   {"name":"Linda","salary":1500}];


var ar_names = [];
var getWorthyWorkers = arFilter =>{

for (let i=0 ; i < workers.length; i++){
  
        if (arFilter[i].salary > 1000){
            ar_names.push(workers[i].name);
        }

}
return(ar_names)
};
console.log(getWorthyWorkers(workers))


// Анализ строки

const path = "/users/download/index.html"

var isHtml = string =>{
   
   return(path.endsWith(".html"))
} 

console.log(isHtml(path))

//