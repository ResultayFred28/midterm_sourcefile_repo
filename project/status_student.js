
class Student{
    constructor(name,scores){

        this.name = name; 
        this.scores = scores; 
    }

    getAverage(){

        if(this.scores.length === 0){ 
            return 0;
        }
        let sum = 0;
        
        for(let i = 0; i < this.scores.length; i++){
            sum += this.scores[i];
        }
        return sum / this.scores.length;
        

    }

    getLetterGrade(){
       const average = this.getAverage();
        if(average >= 90){
            return 'A';
        }
        else if(average >= 80){
            return 'B';
        }
        else if(average >= 70){
            return 'C';
        }
        else if(average >= 60){
            return 'D';
        }
        else{
            return 'F';
        }
    }
}

function analyzeClass(students){
    let classSum = 0;
    let highestAverage = 0;
    let topStudent = "";

    console.log("\n\n--- STUDENT REPORT  ---");

    for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = student.getAverage(); 
    const grade = student.getLetterGrade();

    
    console.log(`${student.name} - Average: ${average.toFixed(1)} | Grade: ${grade}`);

    classSum += average; 

    if (average > highestAverage) {
      highestAverage = average;
      topStudent = student.name;
    }
  }

  const classAverage = classSum / students.length;

    console.log("--------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent} with ${highestAverage.toFixed(1)}`);
}

const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

const students = [];

for(let i = 0; i < studentData.length; i++){
    students[i] = new Student(studentData[i].name, studentData[i].scores);
}

analyzeClass(students);