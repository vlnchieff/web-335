/**
 * Author: Chris Weaver
 * Date: 2025-07-01
 * File: CWeaver-web335Queries.js
 * Description: MongoDB queries for web335DB users collection
 */

// Display all users in the collection
db.users.find()

// Display the user with the email address jbach@me.com
db.users.find({ email: "jbach@me.com" })

// Display the user with the last name Mozart
db.users.find({ lastName: "Mozart" })

// Display the user with the first name Richard
db.users.find({ firstName: "Richard" })

// Display the user with employeeId 1010
db.users.find({ employeeId: "1010" })  // Assuming employeeId is stored as a string
