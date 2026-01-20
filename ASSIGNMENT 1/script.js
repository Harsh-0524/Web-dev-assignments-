// Given input
let searchQuery = "  Learn JavaScript Functions Arrow IIFE  ";

// 1) 
let cleaned = searchQuery.trim();

console.log("Cleaned Query:", cleaned);
console.log("Length:", cleaned.length);

// 2) 
console.log("Lowercase:", cleaned.toLowerCase());
console.log("Uppercase:", cleaned.toUpperCase());

// 3) 
let startIndex = cleaned.indexOf("JavaScript");
let endIndex = startIndex + "JavaScript".length;

let js_using_substring = cleaned.substring(startIndex, endIndex);
let js_using_slice = cleaned.slice(startIndex, endIndex);

console.log("JavaScript (substring):", js_using_substring);
console.log("JavaScript (slice):", js_using_slice);

// 4) 
let lower = cleaned.toLowerCase();

console.log("Contains 'functions'?", lower.includes("functions"));
console.log("Contains 'arrow'?", lower.includes("arrow"));
console.log("Contains 'iife'?", lower.includes("iife"));

// 5) 
console.log("Character at index 6:", cleaned.charAt(6));
console.log("ASCII of first character:", cleaned.charCodeAt(0));

// 6) 
console.log("Case-insensitive check for 'javascript':", lower.includes("javascript"));
