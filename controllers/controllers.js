import listmodel from "../model/listSchema.js"

const addlist = async (req, res) => {
    try {
        const { name, price, description } = req.body

        const list = new listmodel({
            name,
            price,
            description
        })

        await list.save() 

        res.status(201).json(list) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" }) 
    }
}

const editlist = async (req, res) => {
    try {
        const { id } = req.params;
        const edit = await listmodel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ success: true, edit });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const deletelist = async (req, res) => {
    try {
        const { id } = req.params;
        await listmodel.findByIdAndDelete(id);
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const singlelist = async (req, res) => {
    try {
        const listById = await listmodel.findById(req.params.id);
        res.status(200).json({ success: true, listById });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getallList = async (req, res) => {
    try {

        const getall = await listmodel.find();
        res.status(200).json({ success: true, getall });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { addlist, deletelist, editlist, singlelist, getallList }