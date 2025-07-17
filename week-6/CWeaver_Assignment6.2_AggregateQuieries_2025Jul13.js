/**
  Title: Weaver-week6.js
  Author: Chris “Chieff” Weaver
  Date: Jul 15 2025
  Description: MongoDB Shell Queries for performing operations on houses and students collections.
*/

// Display all students in the collection
db.students.find()

// b. Add a new student to the students collection
db.students.insertOne({
  firstName: "Chiefferi",
  lastName: "McDaniels",
  studentId: "s10334",
  houseId: "h1009"
})

// Confirm the new student was added successfully
db.students.find({ studentId: "s10334" })

// c. Update Chiefferi McDaniels's houseId to Gryffindor
db.students.updateOne(
  { studentId: "s10334" },
  { $set: { houseId: "h1007" } }
)

// Confirm the student’s house was updated
db.students.find({ studentId: "s10334" })

// d. Delete the student Chiefferi McDaniels
db.students.deleteOne({ studentId: "s10334" })

// Confirm the student was removed
db.students.find({ studentId: "s10334" })

// e. Display all students by house
db.houses.find().forEach(house => {print("House:", house.founder);db.students.find({ houseId: house.houseId }).forEach(student => printjson(student))})

// f. Display all students in house Gryffindor
gryffindorHouse = db.houses.findOne({ founder: "Godric Gryffindor" });print("Gryffindor Students:");db.students.find({ houseId: gryffindorHouse.houseId }).forEach(student => printjson(student))

// g. Display all students in the house with an Eagle mascot
eagleHouse = db.houses.findOne({ mascot: "Eagle" });print("House with Eagle Mascot:", eagleHouse.founder);db.students.find({ houseId: eagleHouse.houseId }).forEach(student => printjson(student))
