const express = require('express')
const app = express();
const cors = require('cors')
const request = require('request')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/test', (req, res) => res.json({username: 'jerry'}));

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})

app.get('/getLotto', (req, res) => {
    request.get({uri:'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=949'},
        (error, response, body) => {
            res.json(JSON.parse(body))
        })
    console.log("get after")
})