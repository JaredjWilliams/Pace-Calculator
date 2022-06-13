

//implement time variable

        //you need to implement time calculations in milliseconds 

        //read up on epoch

// have html and js communicate

// write the organs of the function that we need to implement






//start CODING! 
let minutes = null
let seconds = null
let distance = null


function findTotalMSeconds(minutes, seconds) {
        const totalMSeconds = (minutes * 60000) + (seconds * 1000)
        return totalMSeconds
}


function findMinString(totalMSeconds, distance) {
        const mSecPer = (totalMSeconds / distance)
        let min =  (mSecPer / 60000)
        minString = min.toString()
        minString = minString[0]
        return minString 
} 


function findSecString(totalMSeconds, distance) {
        const mSecPer = (totalMSeconds / distance)
        let pace =  (mSecPer / 60000)
        pace = pace.toString()
        pace = pace.split('.')
        pace = pace[1]
        pace = '.' + pace
        pace = parseFloat(pace)
        pace = pace.toFixed([2])
        pace = pace * 60
        return pace
}


function calculate() {
        minutes = document.getElementById("minutes").value;
        seconds = document.getElementById("seconds").value;
        distance = document.getElementById("distance").value;
        let totalMSeconds = findTotalMSeconds(minutes, seconds);
        let x = findMinString(totalMSeconds, distance) + ':' + findSecString(totalMSeconds, distance);
        document.getElementById("pace").innerHTML = x;
console.log(distance)
}





