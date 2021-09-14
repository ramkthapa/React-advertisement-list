import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

export const EditAd = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        company_name: '',
        budget: '',
        budget_spent: '',
        date_of_contract_sign: '',
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUsr = users.find(user => user.id === userId);
        setSelectedUser(selectedUsr);
    }, [currentUserId, users])

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push("/")
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Company name</Label>
                <Input
                    type="text"
                    value={selectedUser.company_name}
                    onChange={onChange}
                    name="company_name"
                    placeholder=""
                    required>
                </Input>


                <Label>Budget</Label>
                <Input
                    type="number"
                    value={selectedUser.budget}
                    onChange={onChange}
                    name="budget"
                    placeholder=""
                    required>
                </Input>

                <Label>Budget spent</Label>
                <Input
                    type="number"
                    value={selectedUser.budget_spent}
                    onChange={onChange}
                    name="budget_spent"
                    placeholder=""
                    required>
                </Input>

                <Label>Contract date</Label>
                <Input
                    type="date"
                    value={selectedUser.date_of_contract_sign}
                    onChange={onChange}
                    name="date_of_contract_sign"
                    placeholder=""
                    required>
                </Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
