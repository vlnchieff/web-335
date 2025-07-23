/**
 * Title: Weaver_groups_queries.js
 * Author: Chris “Chieff” Weaver
 * Date: July 20, 2025
 * Description: MongoDB Shell queries showcasing the organization and functionality of the groups database.
 */


/*
  Query 1: Display a list of all books
  Retrieves every book in the books collection
*/
db.books.find()

/*
  Query 2: Display a list of books by genre
  Filters books where genre matches "Fantasy Fiction"
*/
db.books.find({ genre: "Fantasy Fiction" })

/*
  Query 3: Display a list of books by author
  Filters books by author name using dot notation
*/
db.books.find({ "author.name": "Matt Haig" })

/*
  Query 4: Display a book by bookId
  Retrieves a book matching the given bookId
*/
db.books.find({ bookId: "B1002" })

/*
  Query 5: Display customers who have a specific book in their wishlist
  Finds customers with "B1001" in the wishlist array
*/
db.customers.find({ wishlist: "B1001" })

/*
  Query 6: List all wishlist items grouped by customer
  Aggregates wishlist entries by customerId
*/
db.wishlistitems.aggregate([
  {
    $group: {
      _id: "$customerId",
      books: { $push: "$bookId" }
    }
  }
])

/*
  Query 7: Display all customers and their favorite book titles
  Performs a lookup from favorites to books
*/
db.customers.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "favorites",
      foreignField: "bookId",
      as: "favoriteBooks"
    }
  },
  {
    $project: {
      firstName: 1,
      lastName: 1,
      email: 1,
      favoriteBooks: { title: 1, rating: 1 }
    }
  }
])
