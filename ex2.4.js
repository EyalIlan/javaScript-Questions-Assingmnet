
//long row function
// const Unique = (arr) =>{

//    arr =  arr.sort((a,b)=>{

//         return a-b
//     })

//    if(arr[0] === arr[1]){
//        return arr[arr.length -1]
//    }else{
//        return arr[0]
//    }

// }

//short row function
const Unique = (arr) => arr.sort((a,b) => a-b).reduce()
console.log (Unique([ 0, 0, 0.55, 0, 0 ]))