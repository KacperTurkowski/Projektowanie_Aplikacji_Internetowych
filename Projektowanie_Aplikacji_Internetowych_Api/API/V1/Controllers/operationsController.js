const operationsService = require('../Services/operationsService')
const accountService = require('../Services/accountsService')

const getOperationsForAccount = async (req, res) => {
    const result = await operationsService.getOperationsForAccountService(req.params.id)
    res.status(200).json(result);
}
const getOperations = async (req, res) => {
    const result = await operationsService.getOperationsService()
    res.status(200).json(result);
}
const addOperation = async (req, res) =>{
    await operationsService.addOperationService(req.body.name, req.body.sum, req.body.accountId);
    await accountService.changeStateService(req.body.accountId, req.body.sum);
    res.status(200).json({status:'OK'});
}

const removeOperation = async (req, res) =>{
    var temp = await operationsService.getOperationService(req.body.id)
    await accountService.changeStateService(temp[0].Account_ID, -temp[0].SUM);

    await operationsService.removeOperationService(req.body.id)
    res.status(200).json({status:'OK'});
}

module.exports = {
    getOperationsForAccount,
    getOperations,
    addOperation,
    removeOperation
}