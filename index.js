
const express = require('express')
const app = express()
const tasks = [{name: "rahul",
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

app.get('/', function (req, res) {
  res.send('Hello rahul saini')
})

app.get('/tasks', function (req, res) {
    
 res.send( tasks)
})


app.get('/tasks/:id', function (req, res) {
    
   let result= getTaskById(req.params.id); 
if(result){
    res.send(result)
}else{
    res.send({message:`Task not found for given id: ${req.params.id}`})
}

})

app.listen(3000)

function getTaskById(id){
for(i=0;i<tasks.length;i++){
    if(tasks[i].id == id){
        return tasks[i]
    }
 
}
return ;
}

