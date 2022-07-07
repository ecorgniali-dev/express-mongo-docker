const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello world!!')
})

router.get('/hora', (req, res) => {
    const fyh = new Date()
    res.send(fyh)
})

module.exports = router;