
// use map!!!!!!

const  Bus = (list) =>{

    let people = 0
    for(let Station of list){
        for(let element =0 ; element<Station.length-1;element++){ 
            people += Station[element]
            people -= Station[element + 1] 
        }
    }

    if(people>0){
        return 'The numbers of people sleep in the bus is '+ (people*-1)
    }
    people = 0
   return people
}

console.log(Bus([[2,3],[2,3],[2,3]]))
 