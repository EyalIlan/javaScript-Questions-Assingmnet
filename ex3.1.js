


const nb_year = (startYear,Addpercent,comming,endYear) =>{

    let numOfYear = 0

    Addpercent = Addpercent/100;

    while(startYear<endYear){

        startYear = startYear + startYear*Addpercent + comming
        numOfYear++
    }
    return numOfYear
}

console.log(nb_year(1500000, 2.5, 10000, 2000000))