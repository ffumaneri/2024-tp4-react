import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table, Button } from "react-bootstrap";

function Posts() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            });
    }, []);
    
    const postsContent = () => {
        return posts.map(post =>
            <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><Button href={'/editpost?id=' + post.id}>Editar</Button></td>
            </tr>
        );
    };
    
    const showPosts = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{postsContent()}</tbody>
            </Table>
        ); 
    };

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
            {showPosts()}
        </Container>
    );
}

export default Posts;
