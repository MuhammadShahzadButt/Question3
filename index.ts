//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName: string = "Shahzad" 

//step 1 show in lower case:
let lowercaseName: string = personName.toLowerCase();
console.log(lowercaseName);

//step 2 show in upper case:
let uppercaseName: string = personName.toUpperCase();
console.log(uppercaseName);

//step 3 show in title case:
let words: string[] = personName.split(" ");
let titlecaseName: string = ""
for (let i = 0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};