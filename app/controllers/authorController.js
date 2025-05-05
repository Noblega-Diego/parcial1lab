const { default: mongoose } = require('mongoose');

const AuthorModel = require('../models/author').AuthorModel;
 

let getOne = async (req, res) =>{
        try {
            const item = await AuthorModel.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

let getAll = async (req, res) =>{
        try {
            const items = await AuthorModel.find();
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}


let create = async (req, res) => {
        try {
            const item = new AuthorModel(req.body);
            await item.save();
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}


let update = async (req, res) =>{
        try {
            const item = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}


let remove =    async (req, res) => {
        try {
            const item = await AuthorModel.findByIdAndDelete(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json({ message: 'Item deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

module.exports  = {
    AuthorController: {
        getOne: getOne,
        getAll: getAll,
        create: create,
        update: update,
        remove: remove
    }
}

