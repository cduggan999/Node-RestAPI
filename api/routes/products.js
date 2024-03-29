const express = require('express');
const router = express.Router();

//router.get('/products')
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID, well done lad!',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an ID',
        });
    }   
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product!',
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product!',
    });
});

module.exports = router;