
let Students_Scores = [85,72,91,64,78];
let passed = 0;
let failed = 0;
let totalScore = 0;
let average = 0;
let highest = Students_Scores[0]
let lowest = Students_Scores[0]

console.log("Students Scores: ")
for(let i = 0;i<Students_Scores.length;i++){
    console.log(Students_Scores[i])
}

console.log()

for(let i = 0;i<Students_Scores.length;i++){

    let status_grade = Students_Scores[i] >= 75 ? "Passed" : "Failed"

    if(Students_Scores[i] >= 90  && Students_Scores[i] <= 100){
        console.log("Students "+ (i+1) + ": "+ Students_Scores[i] + " - Excellent - " + status_grade)
    }
    else if(Students_Scores[i] >= 80  && Students_Scores[i] <= 89){
        console.log("Students "+ (i+1) + ": "+ Students_Scores[i] + " - VeryGood - " + status_grade)
    }
    else if(Students_Scores[i] >= 75  && Students_Scores[i] <= 79){
        console.log("Students "+ (i+1) + ": "+ Students_Scores[i] + " - Good - " + status_grade)
    }
    else{
        console.log("Students "+ (i+1) + ": "+ Students_Scores[i] + " - Failed " )
    }

    if(Students_Scores[i] >= 75){
        passed++
    }
    else{
        failed++
    }
    if(highest < Students_Scores[i]){
        highest = Students_Scores[i]
    }
    if(lowest > Students_Scores[i]){
        lowest = Students_Scores[i]
    }
    totalScore += Students_Scores[i]

}

average = totalScore / Students_Scores.length

console.log()

console.log("total Score: " + totalScore)
console.log("Average Score: " + average)
console.log("Highest Score: " + highest)
console.log("Lowest Score: " + lowest)
console.log("Passed: " + passed)
console.log("Failed: " + failed)
