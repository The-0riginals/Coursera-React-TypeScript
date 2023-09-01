1. Question 1 Complete the following phrase. “Typescript is a ________________________.”  
 - typed superset of JavaScript that compiles to plain JavaScript  
 - JavaScript library for building user interfaces  
 - developer tool that helps you type out code faster  
 ```
 answer: typed superset of JavaScript that compiles to plain JavaScript
 Correct Correct. This allows us to have ‘static’ type checking in Javascript
 ```
2. Question 2 Does TypeScript Compile React Code? 
 - True  
 - False   
 ```
 answer: True
 Correct Correct. Technically it does, but by setting ‘no emit’ to true in the ts config file, we can skip the emitting of any javascript when it does.
 ```  
3. Question 3 An INTERFACE shows more information about a type and its features than using a regular TYPE in our code editor. 
 - A: True  
 - False  
 ```
 answer:false
 Correct Correct, in fact a TYPE will offer more visible information than an INTERFACE
 ```
4. Question 4 Consider the following code example: `const [val, toggle] = React.useState(false); ` In this case we have not provided a type for the state value. What will happen in our code editor?
 - Throws error: Typescript reminds us that there was no provided type, which it doesn’t accept.  
 - Throws error: Typescript is not happy that the state value is assigned ‘any’ type, and it needs us to explicitly tell it the type  
 - No Error: Typescript can sometimes infer types in certain conditions. 
 ```
   answer: No Error: Typescript can sometimes infer types in certain conditions.
   Correct Correct. This will only ever be a boolean type and Typescript can infer that.
 ```  
5. Question 5  Typing props and state in a CLASS component is optional. 
 - True  
 - False  
 ```
 answer: False
 Correct Correct. You could also type the state again inside the component for better type inference.
 ```  
6. Question 6  Look at the code below:  
```typeScript
changeCount = (event: ChangeEvent<HTMLInputElement>) => {  
this.setState({ count: +event.target.value });  
};
//….changeCount function fired from click handler on input element in  
//.....jsx element below....  
<input onChange={this.changeCount} />  
```
Is the following statement true or false:  
Typing the ‘event’ parameter here is optional because it has already been inferred by Typescript.
 - True  
 - False  
 ```
 answer: False
 Correct Correct. Only handlers declared INLINE, ie, on the JSX element itself can be inferred from
 ```