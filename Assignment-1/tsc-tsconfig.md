
#  An Inside View of `tsc` and How `tsconfig.json` Guides It

  `Brendan Eich`, the creator of JavaScript, never thought it would end up having such massive home libraries like react or nodejs. In it's initial days, js helped developers pacing fast to develop frontend logics by removing the need of type safety. Later it became a problem as Front-End became more and more complex. Then Microsoft came up with Typescript. In this blog we will learn about how `tsc` compiler convert ts to js and how `tsconfig.json` guides it.

  

##  The Compilers Job

  

Your wrote perfect type safe code in typescript. But your browser does not even understand it. What to do ?
Here comes `tsc` compilers. It checks your every type and code working accordingly or not, build your code and re-write every stuff in JavaScript after making sure that, there will be no run time error. Unlike Clang, rustc compiler, it does not run your typescript code rather make safety check for your code and re-write it to JavaScript. 

  

##  Ts to Js Conversion 

  

```typescript

// src/pricing.ts

interface Product {
	name: string;
	price: number;
}
export  function formatPrice(product:  Product):  string  {
	return  `${product.name}: $${product.price.toFixed(2)}`;
}

```

  

`tsc` makes sure the `product` argument is of the `Product` type which enforce safety of data types and re-write it to javascript.

  

```javascript

// dist/pricing.js

"use strict";

Object.defineProperty(exports,  "__esModule",  {  value:  true  });
exports.formatPrice  =  formatPrice;
function formatPrice(product)  {
	return  `${product.name}: $${product.price.toFixed(2)}`;
}

```

Each source file maps to one output file, so `src/pricing.ts` becomes `dist/pricing.js` with the same folder layout. By default, `tsc` still emits JavaScript even when it finds type errors, because checking and emitting are independent steps.

  

##  Telling the Compiler What to Do With `tsconfig.json`

  

`tsc` is like "Santiago" of the book "The Alchemist" and `tsconfig.json` is the omen that guides him to the path of achievement. We run the command `npx  tsc  --init` and it automatically creates a file called tsconfig.json. These are the options you will meet first:

-  `target` chooses which JavaScript version to emit, so `ES2022` keeps modern syntax while an older target such as `ES5` rewrites it.

-  `module` chooses the module system of the output, and `NodeNext` follows Node.js rules, producing CommonJS or ES modules depending on the nearest `package.json`.

-  `rootDir` marks where your source tree begins, and `outDir` is where the mirrored JavaScript is written.

-  `strict` turns on a family of stricter checks, such as `strictNullChecks`, which catches mistakes like using a value that might be `undefined`.

-  `noEmit` writes no files at all, which suits projects where a bundler produces the JavaScript and `tsc` only checks types.

-  `noEmitOnError` still emits files, but only when there are no type errors, so broken code never reaches `dist`.

  

##  A Realistic Minimal Configuration

Here's how a real tsconfig.json looks like :
  

```json

{

"compilerOptions": {
	"target":  "ES2022",
	"module":  "NodeNext",
	"rootDir":  "src",
	"outDir":  "dist",
	"strict":  true,
	"noEmitOnError":  true
},
"include": ["src"]
}

```


  

##  Conclusion

`tsc` is the brain that process typescript and writes javascript where `tsconfig.json` is the organizer that organizes our thousands of files properly so that we can run it easily. Thanks for reading :)