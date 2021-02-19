

const Summation = (n) =>{
    
    if(n<0){
        return -1
    }
    
    let sum =0
    for(let i=0;i<=n;i++){
      sum += i        
    }
    return sum
}

let sum = Summation(2)

console.log(sum)