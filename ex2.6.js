


const Centuries = (year) =>{


    if(year < 9999 && year >=0){
        let digit = year%10
        while(year>100){

            year = year/10

        }
       year = parseInt(year)
       if(digit > 0){
           year += 1
       }
       return year

    }else{
        return 'Year Must ne lower then 9999 and bigger or equal to 0'
    }



}

console.log (Centuries(2000))