import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios
    

    const [posts, setPosts] = useState(true)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los posts

                setPosts(response.data)
                setLoading(false)

            })
    }, [])

    const usersPost= () => {
        const content = posts.map(posts =>
            <tr>
                <td>{posts.userId}</td>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
                <td><Button href={'/editpost?id=' + posts.id}>Editar</Button></td>
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        return(
            /* TODO: Mostrar tabla de posts*/
                <Table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                {usersPost()}
            </Table>
               
        ) 
    }
    if (loading) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> 
                Cargando... (acá van a estar los posts)
            </Container>
          );        
    }
    return (
        <Container>
            <h1>Posts</h1>
            {/* TODO: mostrar POSTS */ posts!= null && showPosts()}
            <Button href="/adduser">Agregar User</Button>
           
        </Container>
    )
}

export default Posts;