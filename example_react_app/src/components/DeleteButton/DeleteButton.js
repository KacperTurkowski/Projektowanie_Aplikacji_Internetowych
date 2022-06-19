import './DeleteButton.css';
import Repository from "../../Repository";
import * as Icon from "react-bootstrap-icons";

const DeleteButton = (props)=>{
    const{
        accountId
    } = props;

    const deleteAccount = (event)=>{
        event.stopPropagation()
        Repository.deleteAccount(accountId)
        window.location.reload()
    }
    return (
        <button className="deleteButton" onClick={deleteAccount}><Icon.Trash size="30" color="white"></Icon.Trash></button>
    )
}
export default DeleteButton;