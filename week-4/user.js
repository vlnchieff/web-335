/**
 * Author: Chris Weaver
 * Date: 2025-07-01
 * Description: Script to populate the web335DB users collection
 */

use("web335DB");

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
