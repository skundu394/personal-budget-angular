const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Pharmacy',
        budget: 120
    },
    {
        title: 'Insurance',
        budget: 220
    },
    {
        title: 'Groceries',
        budget: 300
    },
    {
        title: 'Rent',
        budget: 1200
    }
]
};

app.get('/budget', (req, res) => {
    res.json(budget);
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});