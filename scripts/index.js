const axios = require('axios');

function sum(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function div(a,b){
    return a / b
}

function mul(a,b){
    return a * b
}
let arr=[1,2,3,4,5,6];

function compileAndroidCode() {
    throw new Error('you are using the wrong message');
  }
  
function reMock(v){
return `hello ${v}`
}

 
const Users=()=> {

    return  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => {return resp.data}).catch(
        err=>{
            return err
        }
    );
  
}

Users();
module.exports={sum,mul,div,sub,arr,compileAndroidCode,reMock,Users}