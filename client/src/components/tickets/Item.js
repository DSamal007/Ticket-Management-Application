import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'


////ticket not resolved
function TicketItem(props){
    console.log('props',props)
    const {id,code,customer,employees,department,message,priority,handleRemove,text,isResolved,handleClick} = props
    return (
        !isResolved &&
        <tr>
            <td>{code}</td>
            <td>{customer}</td>
            <td>{department}</td>
            <td>{employees}</td>
            <td>{message}</td>
            <td>{priority}</td>
            <td><Link to={`/tickets/${id}`}><Button color="info">show</Button></Link></td>
            <td><Button color="danger" onClick = {()=>{
                return handleRemove(id)
            }}>{text}</Button></td>
            <td><input type="checkbox" onClick= {()=> {
                return handleClick(id)
            }}/></td>
        </tr>
    )
}

export default TicketItem