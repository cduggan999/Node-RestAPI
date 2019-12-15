const express = require('express');
const router = express.Router();

//router.get('/products')
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /orders'
    });
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Details!',
        orderId: req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted!',
        orderId: req.params.orderID
    });
});

module.exports = router;