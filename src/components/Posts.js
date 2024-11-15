import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
                setLoading(false)
            })
    }, [])

    const postsContent = () => {
        const content = posts.map(post =>
            <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><Button href={'/edituser?id=' + post.id}>Editar</Button></td>
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        return(
            <Table class="table table-danger table-striped table-bordered">
                <thead class="table-danger">
                    <tr>
                        <th scope="col" style={{with:'75px'}}>userId</th>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                        <th></th>
                    </tr>
                </thead>
                {postsContent()}
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
            <h1>Posts</h1>
            {posts != null && showPosts()}
            <Button href="/adduser">Agregar Post</Button>
        </Container>
    )
}

export default Posts;