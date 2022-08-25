// Check if property exists in object

let myObject = {a:'1',b:'2',c:'3'};

function isExists(obj,property){

    let result = obj.hasOwnProperty(property);
    return result;

}
console.log(isExists(myObject,'a'));