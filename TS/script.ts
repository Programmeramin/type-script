let username: any = "amin islam";
let age: number = 43
let skill: string = "ios devs";
let isMarried: boolean = true

username = null


// array type

const developer: [string , number ,boolean , boolean] = ["ashraful", 32, true, true]


// object type
type devsData = {
    name : string,
    age : number,
    skill : string,
    isMarried : boolean
}

const devs: devsData = {
    name : "Amin islam",
    age : 44,
    skill : "ios devs",
    isMarried : true,
}



const student =  (name : string , age: number , skill: string):  string | number | boolean =>{
    return name
}

const boroHat = (txt : string | number): string | number =>{
    if(typeof txt === "string"){
        return txt.toUpperCase();
    }
    return txt
}


console.log(boroHat("amin islam"));


export{}