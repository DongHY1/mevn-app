const getGoals = (req,res)=>{
    res.status(200).send('Get goals')
}
const setGoals = (req,res)=>{
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