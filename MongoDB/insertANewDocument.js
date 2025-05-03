// Insert a document in users database 

`db.users.insertOne({
    name: 'Shahid',
    email: 'example@gmail.com',
    age: 22,    
})`

//  find the user where age is greater than 30 and sort is on the basics of the age and limit to 5

`db.users.find({age : {@$gt: 30 }}).sort({age: -1}).limit(5)`


// How to update a user's email by theri _id user either updateOne of findOneAndUpdate . include an upsert option example

`db.user.updateOne({_id}, {$set: {email: 'newemail@gmail.com'}, {upsert: true}})`

// Write a MongoDB delete query to remove all documents from a logs collection older than a certain date.


`db.logs.deleteMany({createdAt: {$lt: new Date(date)} })`

//Use the MongoDB aggregation pipeline to group orders by customerId and calculate the total order amount per customer.

`db.user.aggregate([
    $group" {
        _id: $customer_id,  
        totalAmount: {$sum: $amount},
    },
])`


// Lookup example 
//Demonstrate a $lookup in an aggregation: e.g., joining a posts collection with users collection on authorId.


`db.users.aggregate([
    $lookup: {
        from: 'users',
        localField: "customerId",
        foriegnkey: '_id',
        as: "customerDetails",
    },
])`



// Write a command to create an index on a collection’s email field to ensure uniqueness.

`db.user.createIndex({email:1}, {unique: true} )`




// find the third largest element (salary) in an collection i

`db.employee.find({}).sort({salary: -1}).skip(2).limit(1)`


`db.employee.aggregate([
    $group: {
        employeId: '$_id',
        count : {$sum: 1}
    },

    match: {
        count : { $gt : 1 }
    }
])`


`db.employee.aggregate([
    $group; {
        '_id': {
            $cond: [
                {
                    $eq : [{ $mod : ['$emplyId' , 2] }, 0 ]
                }, 
                'Even',
                'Odd',
            ]
        },
        count: {$sum : 1};
    },
    
])`

`db.createCollection('CappedCollection', {capped: true, size: 1000, max: 10000})`


`db.sesssion.createInext({
    createdAt: 1, 
    expireAfterSeconds: 3600,
})`;



