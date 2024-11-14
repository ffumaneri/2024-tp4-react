import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios

    const [loading, setLoading] = useState(true)
    const[posts, setPosts] = useState([])
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al cargar los posts:",error)
            })
    }, [])

    const showPosts = () => {
        return(
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post)=> (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
                ))}
            </tbody>
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
        //mostrar los posts
        <Container>
            <h1>Posts</h1> 
            {showPosts()} 
        </Container>
    )
}

export default Posts;