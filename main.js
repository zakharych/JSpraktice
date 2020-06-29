
const string = "Привет! Как дела?";
var pattern = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
const getVowels = stringToFilter => {
let extractedVowels = ""

for (let i=0 ; i < stringToFilter.length; i++){

   const curentLettres = stringToFilter[i];

        if (pattern.includes(curentLettres)){
            extractedVowels =+ curentLettres;
        }
}
return extractedVowels;
}

console.log(getVowels(string));
