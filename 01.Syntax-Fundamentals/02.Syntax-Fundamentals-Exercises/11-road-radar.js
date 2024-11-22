function solve(speed, area) {   
   let speedLimit;
   let status = '';

   if (area === 'motorway') {
    speedLimit = 130;
   } else if (area === 'interstate') {
    speedLimit  = 90;
   } else if (area === 'city') {
    speedLimit = 50;
   } else if (area === 'residential') {
    speedLimit = 20;
   }

   let speedDifference = speed - speedLimit
   if (speedDifference <= 0) {
    status = 'in limit';
   } else if (speedDifference <= 20) {
    status = 'speeding';
   } else if (speedDifference <= 40) {
    status = 'excessive speeding';
   } else {
    status = 'reckless driving';
   }

   if (status === 'in limit') {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`
    )
   } else {
    console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
   }
} 

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
