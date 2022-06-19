const accountsDal = require('../DAL/accountsDal')

const getAccountService = async (id)=>{
    const temp = await accountsDal.getAccount(id);
    return temp[0];
}
const getAccountsService = ()=>{
    return accountsDal.getAccounts();
}
const addAccountService = (name, sum)=>{
    return accountsDal.addAccount(name, sum);
}
const removeAccountService = (id)=>{
    return accountsDal.removeAccount(id);
}
const changeStateService = async (id, difference)=>{
    const temp = await accountsDal.getAccount(id);
    return accountsDal.changeState(parseFloat(temp[0].State)+parseFloat(difference), id);
}

module.exports = {
    getAccountService,
    changeStateService,
    removeAccountService,
    addAccountService,
    getAccountsService
}