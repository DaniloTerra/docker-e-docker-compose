const express = require('express');
const mongoose = require('mongoose');

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definição do esquema da entidade
const entitySchema = new mongoose.Schema({
    name: String,
});

// Modelo da entidade
const Entity = mongoose.model('Entity', entitySchema);

// Criação da aplicação Express
const app = express();
app.use(express.json());

// Rota para criar uma nova entidade
app.post('/api/entities', async (req, res) => {
    try {
        const { name } = req.body;
        const entity = new Entity({ name });
        const savedEntity = await entity.save();
        res.status(201).json(savedEntity);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para obter todas as entidades
app.get('/api/entities', async (req, res) => {
    try {
        const entities = await Entity.find({});
        res.json(entities);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para obter uma entidade por ID
app.get('/api/entities/:id', async (req, res) => {
    try {
        const entityId = req.params.id;
        const entity = await Entity.findById(entityId);
        if (!entity) {
            res.status(404).send('Entidade não encontrada');
        } else {
            res.json(entity);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para atualizar uma entidade por ID
app.put('/api/entities/:id', async (req, res) => {
    try {
        const entityId = req.params.id;
        const { name } = req.body;
        const updatedEntity = await Entity.findByIdAndUpdate(entityId, { name }, { new: true });
        if (!updatedEntity) {
            res.status(404).send('Entidade não encontrada');
        } else {
            res.json(updatedEntity);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Rota para deletar uma entidade por ID
app.delete('/api/entities/:id', async (req, res) => {
    try {
        const entityId = req.params.id;
        const deletedEntity = await Entity.findByIdAndRemove(entityId);
        if (!deletedEntity) {
            res.status(404).send('Entidade não encontrada');
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});