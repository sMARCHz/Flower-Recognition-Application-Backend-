const express = require('express');
const bodyParser = require('body-parser');
const mulConfig = require('./config/multer_config');
/*const connectDB = require("./config/db_config");
const Model = require('./config/db_model');*/
const app = express();
const port = process.env.PORT || 5000;

/*const item = new Model.DBmodel();
connectDB();*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/upimg', mulConfig.uploadImg, (req, res) => {
    if(!req.file){
        res.status(400).send('Error: No such file');
    }
    const id = req.body.userid;
    const imgpath = req.body.path;
    /*item.img.data = req.body.file;
    item.img.contentType = 'image/jpg'
    item.save();*/
    //console.log('data',item.img.data);
    console.log('path',imgpath);
    console.log('id',id);
    console.log('Upload successful');
    return res.sendStatus(200).end();
});

app.get('/', function(req,res){
    res.send('Online NOW!!');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});