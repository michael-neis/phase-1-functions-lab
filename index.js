function distanceFromHqInBlocks(blocks){
    if (blocks < 42){
        return 42 - blocks;
    } else if (blocks > 42){
        return blocks - 42;
    } else {
        return 0
    }
}

function distanceFromHqInFeet(feet){
    if (feet <= 42){
        return ((42 - feet) * 264)
    } else {
        return ((feet - 42) * 264)
    }
}

function distanceTravelledInFeet(start, end){
    if (start >= end){
        return ((start * 264) - (end * 264));
    } else {
        return ((end *264) - (start * 264));
    }
}


function calculatesFarePrice(start, destination){
    const dist = distanceTravelledInFeet(start, destination)
    if (dist > 2500){
       return "cannot travel that far"
   } else if (dist > 2000){
       return 25;
   } else if (dist < 2000 && dist > 400){
       return (dist - 400) * .02;
   } else{
       return 0
   }
}



