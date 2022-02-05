 function padString(str, strLen, char, symbRight = true) {
   if (typeof str !== 'string') {
    return "Invalid string";
   }
   if (typeof strLen !== 'number') {
    return "Invalid string length";
   }
   if (char === null) {
    return "Invalid symbol";
   }
   if (typeof symbRight !== 'boolean') {
    return "Invalid symbol side";
   }
   const diff = strLen - str.length;
   if (strLen > str.length) {
    for (let i = 0; i < diff; i++) {
      symbRight ? (str += char) : (str = char + str);
    }  
    return str;
  } 
  if ((strLen < str.length) || (strLen === str.length))   {
    str = str.substring(0, strLen);
    return str;
  } 
} 

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));