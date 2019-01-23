const express=require('express');
const bodyParser=require('body-parser');
const mC = require('./controllers/messages_controller');
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const port = 3001;
app.listen(port, () => {
    console.log(`app is running on port ${port}!`);
});


app.get('/api/messages', mC.read);
app.post('/api/messages', mC.create);
app.put('/api/messages/:id', mC.update);
app.delete('/api/messages/:id', mC.delete);