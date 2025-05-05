const BookModel = require('../models/book').BookModel;

let getOne = async (req, res) => {
    try {
        const item = await BookModel.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

let getAll = async (req, res) => {
    try {
        const items = await BookModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

let create = async (req, res) => {
    try {
        const item = new BookModel(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

let update = async (req, res) => {
    try {
        const item = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

let remove = async (req, res) => {
    try {
        const item = await BookModel.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    BookController: {
        getOne,
        getAll,
        create,
        update,
        remove
    }
}

