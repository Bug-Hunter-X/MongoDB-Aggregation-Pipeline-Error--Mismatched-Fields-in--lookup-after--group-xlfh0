```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $match: {status: "incomplete"}
  },
  {
    $group: {
      _id: "$userId",
      count: {$sum: 1}
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "user"
    }
  }
])
```