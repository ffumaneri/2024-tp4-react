import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data)
                setLoading(false)
            })
    }, [])
    const usersContent = () => {
        const content = users.map(user =>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.address.street}-{user.address.suite}-{user.address.city}</td>
                <td><Button href={'/edituser?id=' + user.id}>Editar</Button></td>
            </tr>
        )
        return <tbody>{content}</tbody>
    }
    const showUsers = () => {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {usersContent()}
            </Table>
        ) 
    }
    if (loading) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> 
                Cargando...
            </Container>
          );        
    }
    return (
        <Container>
            <h1>Axios - Ejemplo</h1>
            {users != null && showUsers()}
            <Button href="/adduser">Agregar User</Button>
        </Container>
    )
}

export default Users;