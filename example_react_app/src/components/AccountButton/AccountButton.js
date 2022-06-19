import './AccountButton.css';
import DeleteButton from "../DeleteButton/DeleteButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import {useNavigate} from "react-router-dom"

const AccountButton = (props)=>{
    const{
        account
    } = props;

    const navigate = useNavigate();

    const openAccount = (id)=>{
        navigate("/details/"+id)
    }
    return (
        <div className="accountButton" onClick={ ()=>openAccount(account.ID) }>
            <div className="accountName">
                <label >Name: { account.Name }</label>
                <br/>
                <label>State: {account.State}</label>
            </div>

            <DeleteButton accountId = {account.ID}/>
            <ModifyButton state = {account.State} id = {account.ID}/>
        </div>
    )
}

export default AccountButton;