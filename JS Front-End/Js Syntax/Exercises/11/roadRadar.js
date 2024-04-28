//On the motorway, the limit is 130 km/h
//On the interstate, the limit is 90 km/h
//In the city, the limit is 50 km/h
//Within a residential area, the limit is 20 km/h

function radar(km, area) {

    let difference;
    let limit;
    let status; 

    if(area === 'city') {        
        limit = 50;
    }
    else if (area === 'motorway') {
        limit = 130;
    }
    else if (area === 'interstate') {
        limit = 90;
    }
    else if (area === 'residential') {
        limit = 20;
    }

    if (km > limit) {
        difference = Math.abs(limit - km);
    }
////////////////////IM FEELING STUPID!
    if (difference) {
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    else {
        console.log(`Driving ${km} km/h in a ${limit} zone`);
    }
}

radar(120, 'interstate')