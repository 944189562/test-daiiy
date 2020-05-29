const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ name: '图雀社区', website: 'https://tuture.co' });
});

router.post('/new', (req, res) => {
    res.status(201).json({ msg: '新的篇章，即将开始' });
});

module.exports = router;

/**
 * $ curl localhost:3000/api
 * {"name":"图雀社区","website":"https://tuture.co"}
 * $ curl -X POST localhost:3000/api/new
 * {"msg":"新的篇章，即将开始"}
 * */