const express = require('express');
const router = express.Router();
const operationsController = require('../Controllers/operationsController')

router.get('/', operationsController.getOperations);
router.delete('/', operationsController.removeOperation);
router.put('/', operationsController.addOperation);
router.get('/:id', operationsController.getOperationsForAccount);


module.exports = router;
