/*
TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true; 
*/

// Yechim:
function hasProperty(obj: object, prop: string): boolean {
  for (const key in obj) {
    if (key === prop) {
      return true;
    }
  }
  return false;
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

/*   Project Standards:
- Logging standards
- Naming standards   
    function, method, variable => CAMEL        
    class => PASCAL                            
    folder => KEBAB   
    css => SNAKE
- Error handling

*/

/* 
Traditional API
Rest API
GraphQl API
...
*/

/*
 Traditional FD    =>  SSR  =>  EJS
 Modern FD         =>  SPA  =>  REACT
*/

/*
request join
self destroy 
*/
