const express = require('express');
const router = express.Router();
const app = express();


const arrayRouter = function() {
    router.get('/array', arrayController);
};

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.use('/array', arrayRouter);

app.listen(5000, () => {console.log('listening on port 5000...');});
