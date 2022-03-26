const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.status(200).send('Get goals')
})
router.post('/',(req,res)=>{
    res.status(200).send('Get goals')
})
router.put('/:id',(req,res)=>{
    res.status(200).send(`Get goals ${req.params.id}`)
})
router.delete('/:id',(req,res)=>{
    res.status(200).send(`Get goals ${req.params.id}`)
})
module.exports = router