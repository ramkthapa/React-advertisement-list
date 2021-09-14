import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import './component.css';
import {
    ListGroup,
    ListGroupItem,
} from "reactstrap";



export const AdList = () => {
    const { users } = useContext(GlobalContext);



    return (
        <>
            <ListGroup className="mt-4">
                {users.length > 0 ? (
                    <>
                        {users.map(user => (
                            <ListGroupItem className="boxList" key={user.id}>
                                <h1> {user.company_name} </h1><br />
                                <h2> Contract sign: {user.date_of_contract_sign} </h2><br />
                                <h3> Total budget: {user.budget} </h3><br />
                                <h4> Budget spent: {user.budget_spent} </h4><br />
                                <div className="ml-auto">
                                    <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                                </div>
                            </ListGroupItem>
                        ))}
                    </>
                ) : (
                    <h4 className="text-center">No Users</h4>
                )}
            </ListGroup>
        </>
    )
}
