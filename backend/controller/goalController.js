
const getGoals = (req,res)=>{
    res.status(200).send('Get goals')
}
const setGoals = (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('请传入数据')
    }
    res.status(200).send('Get goals')
}
const updateGoals = (req,res)=>{
    res.status(200).send(`Get goals ${req.params.id}`)
}
const deleteGoals = (req,res)=>{
    res.status(200).send(`Get goals ${req.params.id}`)
}
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}