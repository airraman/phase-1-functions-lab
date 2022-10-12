function distanceFromHqInBlocks(someValue){
return Math.abs(42 - someValue);
}


function distanceFromHqInFeet(someValue){
const feet = Math.abs(42 - someValue)*264; 
return feet
}


function distanceTravelledInFeet(start, destination){
const distanceInFeet = Math.abs(start-destination)*264
return distanceInFeet
}

function calculatesFarePrice(start, destination){
let price 

const distanceInFeet = distanceTravelledInFeet(start, destination)

if(distanceInFeet <= 400){
     price = 0;
} else if (distanceInFeet > 400 && distanceInFeet <= 2000){
     price = (distanceInFeet - 400) * .02;
} else if (distanceInFeet > 2001 && distanceInFeet <= 2500){
     price = 25.00;
} else if (distanceInFeet >= 2500){
    price = "cannot travel that far"
}
return price
}


