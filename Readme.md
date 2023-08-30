# This repos is for learning TypeScript 

## TypeScript cheatsheet: 
- https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

- https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

__npm and npx__  
npm will download the package and execute, while npx will execute it without downloading

`npm init react-app my-app --template typescript` is the same as `npx create-react-app my-app --template typescript`

`"npm init <initializer> <name> <options>"` will call `"npx create-<initializer> <name> <options>"` for you. It's just a different syntax for the same thing, one that explicitly says that you are initializing a new package.

__ts and tsx__ are the same thing, but tsx is used for files that contain jsx.

### create a new project
`npx create-react-app my-app --template typescript`

or

`yarn create react-app my-app --template typescript`

### add typescript to an existing project
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

or

`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

### run the project 
```
 cd getting-start
 npm start
```

## what is typescript?
- TypeScript is a superset of JavaScript that adds types to variables and functions.
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

__type and interface__  
In TypeScript, both interface and type are used to define custom types that can be used to describe the shape and structure of data. 

An interface can extend a statically known `type alias`. A type alias in TypeScript is a way to give a name to a specific type or to define custom types that can be reused throughout your code
```typeScript
type Point = {
    x: number;
    y: number;
};

const origin: Point = { x: 0, y: 0 };
```


so, what's the difference between type and interface?
- interface is used to define an object type, and type is used to define any other type like string, number, boolean, etc.
- interface can be used to extend or export other interfaces, but type can't.
- no omit "=" sign in interface
- when hover over interface, it shows "interface" but when hover over type, it shows details of defination, attributes, etc.





