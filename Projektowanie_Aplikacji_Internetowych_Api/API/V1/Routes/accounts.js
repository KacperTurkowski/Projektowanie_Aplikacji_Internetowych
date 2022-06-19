const express = require('express');
const router = express.Router();
const accountsController = require('../Controllers/accountsController')

router.get('/', accountsController.getAccounts);
router.delete('/', accountsController.removeAccount);
router.put('/', accountsController.addAccount);
router.post('/', accountsController.changeState);
router.get('/:id', accountsController.getAccount);



module.exports = router;
