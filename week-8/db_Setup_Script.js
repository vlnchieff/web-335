const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://web335_user:s3cret@bellevueuniversity.h0l1iur.mongodb.net/?retryWrites=true&w=majority";

async function run() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        const db = client.db('web335DB'); // Replace with your database name

        // Insert books
        const booksCollection = db.collection('books');d
        await booksCollection.insertMany([
    {
        bookId: "B1001",
        title: "The Midnight Library",
        genre: "Fantasy Fiction",
        author: { authorId: "A1001", name: "Matt Haig" },
        summary: "A woman discovers a mysterious library between life and death that lets her explore all the lives she could have lived.",
        rating: 4.7
    },
    {
        bookId: "B1002",
        title: "The Silent Patient",
        genre: "Psychological Thriller",
        author: { authorId: "A1002", name: "Alex Michaelides" },
        summary: "A famous painter shoots her husband and never speaks another word. A psychotherapist becomes obsessed with uncovering her motive.",
        rating: 4.5
    },
    {
        bookId: "B1003",
        title: "Where the Crawdads Sing",
        genre: "Mystery / Coming-of-Age",
        author: { authorId: "A1003", name: "Delia Owens" },
        summary: "An abandoned girl grows up alone in the marshlands of North Carolina and becomes entangled in a murder investigation.",
        rating: 4.3
    }
]);
console.log("✅ Books inserted.");

        // Insert customers
        const customersCollection = db.collection('customers');
        await customersCollection.insertMany([
            {
                customerId: "C1001",
                firstName: "Ryesha",
                lastName: "Reed",
                email: "rreed@books.com",
                wishlist: ["B1001", "B1002"],
                favorites: ["B1002"]
            },
            {
                customerId: "C1002",
                firstName: "Joe",
                lastName: "Green",
                email: "green@books.com",
                wishlist: ["B1001"],
                favorites: ["B1002"]
            },
            {
                customerId: "C1003",
                firstName: "Jennifer",
                lastName: "Lagerlout",
                email: "jlagerlout@books.com",
                wishlist: ["B1003"],
                favorites: []
            }
        ]);
        console.log("✅ Customers inserted.");

        // Insert wishlist items
        const wishlistItemsCollection = db.collection('wishlistitems');
        await wishlistItemsCollection.insertMany([
            { customerId: "C1001", bookId: "B1001" },
            { customerId: "C1002", bookId: "B1002" },
            { customerId: "C1002", bookId: "B1001" },
            { customerId: "C1003", bookId: "B1003" }
        ]);
        console.log("✅ Wishlist items inserted.");

    } catch (error) {e
        console.error("❌ An error occurred:", error);
    } finally {
        await client.close();
        console.log("✅ Connection closed.");
    }
}

run();
