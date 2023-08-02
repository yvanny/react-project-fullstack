var data_emp = [
    {
        id: 1,
        name: "Mr. Sok",
        salary: 500
    },
    {
        id: 2,
        name: "Mr. Som",
        salary: 500
    },
    {
        id: 3,
        name: "Mr. Sao",
        salary: 500
    }
]


const getAll = (req, res) => { // in real case, we integrate with a database.
    res.json({
        list: data_emp
    })
}
const getOne = (req, res) => {
    var id = req.params.id
    var dataTmp = []
    for (var i = 0; i < data_emp.length; i++) {
        if (id == data_emp[i].id) {
            dataTmp.push(data_emp[i])
            break;
        }
    }
    res.json({
        list: dataTmp
    })
}
const create = (req, res) => {


}
const update = (req, res) => {


}
const remove = (req, res) => {


}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}