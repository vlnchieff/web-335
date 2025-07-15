/**
 * Author: Chris Weaver
 * Date: 2025-07-01
 * Description: Script to populate the web335DB users collection
 */


db.users.insertMany([
  {
    firstName: "Johann",
    lastName: "Bach",
    email: "jbach@me.com",
    employeeId: "1010"
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    email: "mozart@music.com",
    employeeId: "2020"
  },
  {
    firstName: "Richard",
    lastName: "Wagner",
    email: "richard@opera.com",
    employeeId: "3030"
  }
]);



db.createRole({
  role: "web335Admin",
  privileges: [
    {
      resource: { db: "web335DB", collection: "" },
      actions: ["find", "insert", "update", "remove", "createCollection"]
    }
  ],
  roles: []
})

