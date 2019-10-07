const {MongoClient, ObjectID} = require('mongodb')

//const MongoClient = mongodb.MongoClient

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'myDB';

MongoClient.connect(url, {
    useNewUrlParser : true
}, (error, client) => {
    if (error){
       return  console.log("Error connecting database!")
    }

    console.log("Database connected!!")       

    const db = client.db(databaseName)

    // {
    //     name: "ishtiaq",
    //     age: 38,
    //     education: {
    //         mostRecent: "B.Com",
    //         proir: "I.Com",
    //         certificats: "React nanodegree",
    //         percentile: [85,80,75]

    //     }
    //}

    db.collection('profiles').updateMany(
        {email: 'ahmad.ishtiaq990@gmail.com'},
        {$inc: {"age": 38 }}
    
    ).then((data) => {
        console.log(data)
    }).catch(e => console.log("Error updating document"))




    
    
    //db.collection('profiles').find({
        //email: 'ahmed.ishtiaq990@gmail.com'
    //}).toArray((error, dataArray) => {

        //console.log(dataArray)
    //})


    //const newID = ObjectId()


    //console.log(newID)

    
    //db.collection('profiles').find({
        
       // _id:ObjectID("5d09fa7348f9282874271e73")
        
   
   // }) .toArray ((error, arrayData)) => {
        

    
    
    client.close()
    
    
})
    
    
    

