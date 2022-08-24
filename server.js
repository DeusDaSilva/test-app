
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    const { hello } = req.query;
    console.log(req.query)
    if (hello) {
        res.send('Hello')
        return
    }
    res.send('<input type="text" />')
})

app.listen(8080);


