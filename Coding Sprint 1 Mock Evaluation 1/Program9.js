//Even Sum Below N
function evenSumBelowN(num) {
    let sum=0;
    for (let i =0; i<=num; i++){
        if(i%2===0){
            sum+=i;
        }      
    }
    console.log(sum) ;  
  }
  evenSumBelowN(6);