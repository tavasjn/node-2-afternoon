const express = require('express');
const app = express();
const ctrl = require('./controllers/messages_controller');


app.use(express.static(__dirname + '/../public/build'));
app.use(express.json());

const messageBaseUrl = '/api/messages';
app.post(messageBaseUrl, ctrl.create);

app.get(messageBaseUrl, ctrl.read);

app.put(`${messageBaseUrl}/:id`, ctrl.update);

app.delete(`${messageBaseUrl}/:id`, ctrl.delete);



const port = 3001;
app.listen(port, () => {
    console.log(`Magic is happening on port ${port}`);
});