import mongoose from "mongoose" // Fixed typo in import statement

const listschema = new mongoose.Schema({

    name: { type: String },
    price: { type: String },
    description: { type: String },
}, { timestamps: true, minimize: false }) // Fixed schema definition

const listmodel = mongoose.models.list || mongoose.model("list", listschema) // Fixed model definition

export default listmodel

