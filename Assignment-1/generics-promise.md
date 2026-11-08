
#  TypeScript Generics and `Promise<T>`: A Dynamic Way to Add types

  

Remember your childhood pencil box? That one with built in sharpener which we use to pretend as a spacecraft ? 😄. From the pencils of class 1 to pens of class 4, it held everything. Different tools, same wrapper. Generics are like that wrapper that holds different data types inside. This blog shows how generics work and why they matter for asynchronous `Promise<T>` responses.

  

##  The Genesis of Generics
  

Let's say your function will return an array named items. But the "item" of items are not fixed. They can be string, number anything. Writing same function for each type breaks the DRY principle. Writing "any" type is just worse then writing in js. What to do ?

  

```typescript

function confusedItem(items:  any[]):  any  {
	return  items[0];
}
const  value  =  confusedItem([1,  2,  3]);
value.toUpperCase();  // No compile error, but this crashes at runtime.
```

  

##  Generic Functions and it's avatar `T`

 
Now a generic function declares a type placeholder in angle brackets. We call it `T`, which means " Type the caller uses". But we don't often write that type ourselves. Smart Typescript infers it from the arguments and this time type is remembered and give compile time error if misused. Cool right ?

```typescript
function organizedItem<T>(items:  T[]):  T  |  undefined  {
	return  items[0];
}
const  value1  =  organizedItem([10,  20,  30]);  // number | undefined
const  value2  =  organizedItem(["Ana",  "Ravi"]);  // string | undefined
```
  
The same idea fits API responses, which share an envelope but carry different data, so `ApiResponse<User>` knows that `data` is a single `User`.
```typescript
interface ApiResponse<T> {
	data: T;
	status: number;
	message: string;
}
interface User {
	id: number;
	name: string;
	email: string;
}
```
  

##  Promises and `Promise<T>`

We know the asynchronous feature about Javascript. It use Promises for long processing works which says "Hey, the value is not arrived yet but we will assure that it will either arrive or be rejected". Now in `Promise<T>`, we use Promise as a wrapper generic functions for any async function that returns a Promise and T holds the generic type of any value that is expected to come.

  

##  Fetch Function With Type Safety

  

Here's how we use generics in real fetch functions :

  

```typescript

async  function fetchJson<T>(url:  string):  Promise<T>  {
	const  response  =  await fetch(url);
	if  (!response.ok) throw  new Error(`Request failed with status ${response.status}`);		
	return  (await  response.json())  as  T;
}
```

  

Here `fetch` function returns a promise first. Then it either resolves a value or get rejected. So we wrap the generic data type with Promise and later while resolving the value, we set the type as T.
  

##  Conclusion
Typescript provides the static type features and Generics add a flavor of dynamics into it. Which makes our life easy as we have to write less code that can do more and more works. 