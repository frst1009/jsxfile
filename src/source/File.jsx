import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function Tables() {
    const [rows, setRows] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function handleAdd(event) {
        event.preventDefault();
        const newRow = { firstName: firstName, lastName: lastName, email: email };
        setRows([...rows, newRow]);
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    function handleDelete(index) {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
    }

    return (
        <>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Table striped bordered hover variant="dark" style={{width: 500}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.email}</td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <form onSubmit={handleAdd} style={{width: 200}}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <button type="submit">Add</button>
            </form></div>
        </>
    );
}

export default Tables;
