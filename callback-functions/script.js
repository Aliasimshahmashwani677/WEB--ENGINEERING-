//High order Functions and Call back functions
/*function add(a, b,cb) {
    let result = a +b;
    cb(result);

}
   
   add(2,5 , function (val){
    console.log(val);
   }); 
add(2,6,(val)=>console.log(val));

add(500,133,(val)=>console.log(val)); */



function add(a, b,cb) {
    let result = a +b;
    cb(result);
    return () =>  console.log(result); 
}

let resultFunction = add(2,4, ()=>{});

resultFunction();





    
