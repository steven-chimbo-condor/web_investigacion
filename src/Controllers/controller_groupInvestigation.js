const group = require('../Models/model_groupInvestigation');
const moment = require('moment')

const saveGroup = async (req, res) => {
    const { name, create_date, menbers, linea_investigacion, project_generados } = req.body
    try {
        const gropuInvestigation = new group({
            name, create_date, menbers, linea_investigacion, project_generados
        });

        await gropuInvestigation.save();
        res.status(200).json({ mensaje: "guardado" });
    } catch (err) {
        console.log(err)
    }
}
const updateGroup = async (req, res) => {
    const { _id, name, create_date, menbers, linea_investigacion, project_generados } = req.body
    const updated = await group.updateOne({ _id: _id }, {
        $set: {
            name, create_date, menbers, linea_investigacion, project_generados
        }
    })
    res.status(200).json(updated);
}
const searchGroup = async (req, res) => {
    try {
        const search = await group.find({});
        res.status(200).json(search)
    } catch (err) {
        console.log(err)
    }
}
const deleteGroup = async (req, res) => {
    try {
        await group.remove({ _id: req.body._id })
        res.status(200).json({ delet: "eliminado" })
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    saveGroup,
    updateGroup,
    searchGroup,
    deleteGroup
}