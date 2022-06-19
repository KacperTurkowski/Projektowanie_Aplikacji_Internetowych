import './Operation.css';
import * as Icon from 'react-bootstrap-icons';
import Repository from "../../Repository";

const Operation = (props)=>{
    const{
        operation
    } = props;

    const deleteOperation = ()=>{
        Repository.deleteOperation(operation.ID)
        window.location.reload()
    }
    return (
            <div className="div">
                <label className="column">{operation.Name}  </label>
                <label className="column">{operation.SUM}   </label>
                <label className="column">{operation.InsertDate}   </label>
                <button className="trash" onClick={deleteOperation}><Icon.Trash size="30" color="white"></Icon.Trash></button>
            </div>
    )
}

export default Operation;