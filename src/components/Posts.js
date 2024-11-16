import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table, Alert } from "react-bootstrap";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
 
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data); 
                setLoading(false);
            })
            .catch((err) => {
                setError("Error al cargar los posts");
                setLoading(false);
            });
    }, []);

    const showPosts = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID_Usuario</th>
                        <th>Título</th>
                        <th>Contenido</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr >
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
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
    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }
    return (
        <Container className="mt-4">
            <h1>Posts</h1>
            {showPosts()}
        </Container>
    )
}

export default Posts;