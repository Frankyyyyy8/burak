/**
 TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
*/
//Yechim:
function sumOdds(n: number): number {
  let count = 0;

  for (let i = 1; i < n; i += 2) {
    count++;
  }

  return count;
}

console.log(sumOdds(9));
console.log(sumOdds(11));

/**
 TASK T

  Shunday function tuzing, u sonlardan tashkil topgan 2'ta 
array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
  MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); 
return [0, 3, 4, 4, 6, 30, 31];
*/

//Yechim:
/* function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); */

/*
S-TASK

Shunday function yozing, u numberlardan tashkil topgan 
list qabul qilsin va osha numberlar orasidagi tushib 
qolgan sonni topib uni return qilsin
MASALAN: missing_number([3, 0, 1]) return 2
*/

// Yechim:
/*function missing_number(nums: number[]): number {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}

console.log(missing_number([3, 0, 1]));
*/
/*
R-TASK

Shunday function yozing, u string parametrga ega bolsin. 
String "1+2" holatda pass qilinganda string ichidagi 
sonlar yigindisini number holatda qaytarsin.
MASALAN: calculate("1+3") return 4; 
*/

// Yechim:
// function calculate(expression: string): number {
//   let current = "";
//   let sum = 0;

//   for (const char of expression) {
//     if (char === "+") {
//       sum += Number(current);
//       current = "";
//     } else {
//       current += char;
//     }
//   }

//   sum += Number(current);

//   return sum;
// }

// console.log(calculate("1+3"));

/*
TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true; 
*/

// Yechim:
// function hasProperty(obj: object, prop: string): boolean {
//   for (const key in obj) {
//     if (key === prop) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

/*   Project Standards:
- Logging standards
- Naming standards   
    function, method, variable => CAMEL        
    class => PASCAL                            
    folder => KEBAB   
    css => SNAKE
- Error handling

*/

/* Request:
Traditional API
Rest API
GraphQl API
...
*/

/* Frontend Development:
 Traditional FD    =>  SSR  =>  EJS
 Modern FD         =>  SPA  =>  REACT
*/

/* Cookies
request join
self destroy 
*/

/* Validation
Frontend validation
Backend validation
Datebase validation 
*/
