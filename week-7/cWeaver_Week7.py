"""
Title: cWeaver_Week7.py
Author: Chris “Chieff” Weaver
Date: July 17, 2025
Description: Python script to perform CRUD operations on the users collection in web335DB.
"""

# Import MongoClient and datetime
from pymongo import MongoClient
import datetime

# Connect to MongoDB Atlas cluster
client = MongoClient("mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority")

# Access the web335DB database
db = client['web335DB']

# Step 3: Create a new user document
new_user = {
    "firstName": "Ludwig",
    "lastName": "Beethoven",
    "employeeId": "1014",
    "email": "lbeethoven@me.com",
    "dateCreated": datetime.datetime.utcnow()
}

# Insert the new user into the users collection
user_id = db.users.insert_one(new_user).inserted_id
print("Inserted User ID:", user_id)

# Step 4: Prove the document was created
print("User Created:")
print(db.users.find_one({"employeeId": "1014"}))

# Step 5: Update the email address of the new user
db.users.update_one(
    {"employeeId": "1014"},
    {"$set": {"email": "ludwig.beethoven@me.com"}}
)

# Step 6: Prove the document was updated
print("User After Email Update:")
print(db.users.find_one({"employeeId": "1014"}))

# Step 7: Delete the user document
delete_result = db.users.delete_one({"employeeId": "1014"})
print("Delete Result:", delete_result)

# Step 8: Prove the document was deleted
print("User After Deletion:")
print(db.users.find_one({"employeeId": "1014"}))
