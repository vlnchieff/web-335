db.createRole({
  role: "web335Admin",
  privileges: [
    { resource: { db: "web335DB", collection: "users" }, actions: ["find", "insert", "update", "remove"] }
  ],
  roles: []
})
db.createUser({
  user: "web335_user",
  pwd: "s3cret",
  roles: [{ role: "web335Admin", db: "web335DB" }]
})
