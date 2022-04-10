// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if(42 < someValue){
        return someValue -42
    }else{
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue){
    const dist = distanceFromHqInBlocks(someValue); 
    return dist * 264
}

const Math = require('Math');

function distanceTravelledInFeet(start, end){
    const feet =  Math.abs(end - start)
    return feet*264
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)
    if(feet <= 400) return 0
    else if (feet > 400 && feet <= 2000) return ((feet - 400) * 2) /100
    else if (feet > 2000 && feet <= 2500) return 25
    else return 'cannot travel that far'
}