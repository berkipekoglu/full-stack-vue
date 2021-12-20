const express = require('express')
const res = require('express/lib/response')
const Article = require('../models/Article')

const router = express.Router()



router.get('/', (req, res) => {
    Article.find()
    .then(article => res.status(200).json(article))
    .catch(err => res.status(500).json(err))
})


router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
    .then(article => res.status(200).json(article))
    .catch(err => res.status(500).json(err))
})

router.post('/create', (req, res)=> {
    const article = new Article({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    })

    try { 
        article.save() 
        res.status(200).send(article)
    }
    catch (err) {
        res.status(500).send(err) 
    }
})


router.patch('/:id/update', (req, res) => {
    const params = {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    }

    Article.findByIdAndUpdate(req.params.id, params)
    .then((article) => {
        res.status(200).send(params)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
})

router.delete('/:id/delete', (req, res) => {
    
    Article.findByIdAndDelete(req.params.id)
    .then((article) => {
        res.status(200).send(article)
    })
    .catch((err) => {
        res.status(500).send(err)
    })

})









module.exports = router