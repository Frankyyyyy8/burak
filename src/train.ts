/**
 TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda
 */

//Yechim:
function countOccurrences(obj: any, key: string): number {
  let count = 0;

  for (const currentKey in obj) {
    if (currentKey === key) {
      count++;
    }

    if (typeof obj[currentKey] === "object" && obj[currentKey] !== null) {
      count += countOccurrences(obj[currentKey], key);
    }
  }

  return count;
}

const data = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30,
  },
};

console.log(countOccurrences(data, "model"));
/**
 TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
 */

// Yechim:
/*function chunkArray(array: any[], size: number): any[][] {
  const result: any[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
*/
/**
 TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.
*/

// Yechim:
/* function countChars(str: string): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (const char of str) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

console.log(countChars("hello"));
*/
/**
 TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
*/
//Yechim:
/* function sumOdds(n: number): number {
  let count = 0;

  for (let i = 1; i < n; i += 2) {
    count++;
  }

  return count;
}

console.log(sumOdds(9));
console.log(sumOdds(11));
*/

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
