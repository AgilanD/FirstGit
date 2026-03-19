function capitalize(str){
   if(typeof str =='string'){
    return str.toUpperCase();
   }
   return "The input is not a String";
}

function lower(str){
   if(typeof str =='string'){
    return str.toLowerCase();
   }
   return "The input is not a String";
}

console.log(capitalize("agilan"));
console.log(capitalize("1234"));
console.log(capitalize(12345));
console.log(lower("AGILAN"));
