const express = require('express')
const app=express()
const PORT = 5000;

app.listen(5000,() => console.log(`İts alive on http://localhost:${PORT}`));

app.get('/GetPlayList',(req,res) => {
//    res.json({"users":["user1","user2","user3","user4"]})
    res.status(200).send(
    [
        {
            name: "My Video1",
            type: "video",
            url: "file_example_MP4_480_1_5MG.mp4",
            duration: 3,    
        },
        {
            name: "My Image",
            type: "image",
            url: "example.jpg",
            duration: 3,
        }
    ]
    )
});

app.post('/PostPlayList',(req,res) => {
    res.send("OK");
});