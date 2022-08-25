//Multiply all object values by x

function myFunction(obj,num){

    let newObject ={};
    for(let item of Object.keys(obj)){
        newObject[item]= obj[item]* num;
    }
    return newObject;

}
console.log(myFunction(({a: 1, b: 6, c: 9}),3))