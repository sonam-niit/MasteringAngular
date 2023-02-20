///<reference path="validation.ts"/>
///<reference path="LettersValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>

var strings=["HelloWorld","123456","1234"];

var testValidation= new validation.LettersValidator();
for(let s of strings){
    console.log(s+" "+testValidation.isAcceptable(s));
}

// var validators:{[s:string]:validation.StringValidator}={};
// validators["Zip Code"] = new validation.ZipCodeValidator();
// validators["Letters"] = new validation.LettersValidator();

// for(let s of strings){
//     for(let name in validators){
//         console.log(s+" "+validators[name].isAcceptable(s))
//     }
// }
