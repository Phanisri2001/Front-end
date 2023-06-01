//a='hello';
//console.log("value of a is",a);
//console.log('datatype of a is',typeof a );


//PRIME NUMBER

let n=15;
prime=true;

for(i=2;i<n;i++){
    if(n%i == 0){
        prime=false
        break;
    }
}
if(prime==true){
    console.log('Prime Number');
}
else{
    console.log('Not a Prime');
}