// a. Add a new user to the user's collection
db.users.insertOne({
  firstName: "Ludwig",
  lastName: "Beethoven",
  email: "beethoven@music.com",
  employeeId: 1011
})

// Prove user was added successfully
db.users.find({ email: "beethoven@music.com" })

// b. Update Mozart's email address
db.users.updateOne(
  { lastName: "Mozart" },
  { $set: { email: "mozart@me.com" } }
)

// Prove document was updated
db.users.find({ lastName: "Mozart" })

// c. Display all users with projections for first name, last name, and email
db.users.find(
  {},
  { firstName: 1, lastName: 1, email: 1, _id: 0 }
)