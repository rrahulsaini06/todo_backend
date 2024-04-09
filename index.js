
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello rahul saini')
})

app.get('/tasks', function (req, res) {
    tasks = [{name: "rahul",
discription: "do something new",
id :"123"
},
{name: "rahul",
discription: "do something new again",
id :"1234"
},
{name: "rahul2",
discription: "do something new",
id :"1235"
},
{name: "rahul3",
discription: "do something new",
id :"1236"
},
{name: "rahul4",
discription: "do something new",
id :"1237"
},
]
 res.send( tasks)
})


 