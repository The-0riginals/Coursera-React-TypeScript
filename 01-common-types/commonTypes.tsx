//import React from 'react';

//type is a keyword to create a new type in typescript
//In TypeScript, you can use `type` to define custom data types that can be used to describe the shape and structure of data.

//is it same as var, let, const in javascript?
//answer: no, it is not same as var, let, const in javascript because it is not a variable declaration


type  PersonProps = {
    name: string;
    age: number;
    email: string;
    isFemale: boolean;
}

const person1: PersonProps = {
    name: 'John',
    age: 25,
    email: 'John@gmail.com',
    isFemale: false
}

type AnimalsListTypes = {
    name: string[];
    animalType: 'mammal' | 'reptile' | 'bird';
}

const animalsList: AnimalsListTypes = {
    name: ['Lion', 'Tiger', 'Elephant'],
    animalType: 'mammal'
}

type SomeObjectExamples = {
    obj: object;
    obj1: {};
    item:{
        id: string;
        name: string;
    }
    items: {
        id: string;
        name: string;
    }[];
}

type Item = {
    id: string;
    name: string;
}

type Items ={
    item: Item;
    items: Item[];
}

type CustomItemHash = {
    [key: string]: Item;
}

type CustomItemHash2= {
    [key: string]: string;
}

type Functions= {
    onClick: () => void;
    onChange: (id: number) => void;
    onClick2(e: React.MouseEvent<HTMLButtonElement>): void; //<> angle brackets are used to specify the type of element we are working with
    // e : event, we can use `event` instead of e
}

// declaring a function what it takes and what it returns
const addFunction = (a: number, b: number): number => {
    return a + b;
}

const addFunction2 = (a: number, b: number) => {
    return a + b;
}

//sth funny here
const addFunction3 = (a: number, b: number): string => {
    return (a + b)+"hello";
}


type OptionalProps = {
    required: string; //it must be present in an object of type OptionalProps, and its value must be a string.
    optional?: string; // ? means optional., This means that it's not required to be present in an object of type OptionalProps, and if it is present, its value must be a string.
}

// Define an object with both required and optional properties
const example1: OptionalProps = {
    required: "This is required",
    optional: "This is optional"
};

// Define an object with only the required property
const example2: OptionalProps = {
    required: "This is required"
};

// This would be an error because 'required' property is missing
const example3: OptionalProps = {
    optional: "This is optional"
};

interface OptionalProps2 {
    required: string;
    optional?: string;
}
/* difference between type and interface
- interface is used to define an object type, and type is used to define any other type like string, number, boolean, etc.
- interface can be used to extend or export other interfaces, but type can't.
- no omit "=" sign in interface
- when hover over interface, it shows "interface" but when hover over type, it shows details of defination, attributes, etc.
*/

export {}