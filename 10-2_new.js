    function bestStudent(students) {
      let highestScore = 0
      let bestDate = new Date().getTime()
      let bestStudentName = []

students.forEach((student) => {
let currentDate = new Date(student.date).getTime()

if(student.score > highestScore) {
  highestScore = student.score
  bestDate = currentDate
  bestStudentName = []
  bestStudentName.push(student.name)
}

else if (student.score == highestScore && currentDate < bestDate) {
  bestDate = currentDate
  bestStudentName = []
  bestStudentName.push(student.name)
}

else if (student.score == highestScore && currentDate == bestDate) {
  bestStudentName.push(student.name)  
}
})

if (highestScore == 0) {
  bestStudentName = []
  console.log("no winner")
}

console.log(bestStudentName + ", congrats on winning!")
return bestStudentName
}

module.exports = bestStudent