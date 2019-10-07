const express = require('express')

const path = require ('path')

//const bodyParser = require('body-parser');

const app = express()

const hbs = require('hbs')






const partialFolder = path.join(__dirname,'./templates/views')
app.set('views', partialFolder)


const partialFolders = path.join(__dirname,'./templates/partials')
 hbs.registerPartials(partialFolders)

const newPathToPublicFolder = path.join(__dirname, '../public')
//console.log(newPathToPublicFolder)
app.use (express.static(newPathToPublicFolder))


app.set("view engine", "hbs");


 app.get('/',(req, res) =>{
     res.render('index')
 })



app.get('/  ',(req, res) =>{
    res.render('about')
    
})






app.get('/',(req,res)=>{
    res.render('index', {title:0})
})

    
       

app.get('/helloworld', (req, res) =>{
    res.send({
        name: "Aamir",
        message: 'Hello world route',
        class:"Node/Express/mongo"

    })
})


app.get ('/about', (req, res) => {
    res.send ('about')
})



app.get('*', (req, res) =>{
    res.send ('no page found')
})




app.listen(3000, () =>{
    console.log("Listening to port 3000 done!!")
})










