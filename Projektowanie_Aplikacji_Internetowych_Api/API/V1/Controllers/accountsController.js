const accountsService = require('../Services/accountsService')

const getAccounts = async (req, res) => {
    const result = await accountsService.getAccountsService()
    res.status(200).json(result);
}
const getAccount = async (req, res) => {
    const result = await accountsService.getAccountService(req.params.id)
    res.status(200).json(result);
}
const addAccount = async (req, res) =>{
    await accountsService.addAccountService(req.body.name, req.body.sum)
    res.status(200).json({status:'OK'});
}

const removeAccount = async (req, res) =>{
    await accountsService.removeAccountService(req.body.id)
    res.status(200).json({status:'OK'});
}

const changeState = async (req, res)=>{
    await accountsService.changeStateService(req.body.id, req.body.difference)
    res.status(200).json({status:'OK'});
}

module.exports = {
    getAccounts,
    addAccount,
    removeAccount,
    changeState,
    getAccount
}