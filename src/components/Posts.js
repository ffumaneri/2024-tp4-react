import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los posts
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
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
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
                Cargando... (acá van a estar los posts)
            </Container>
          );        
    }
    return (
        <Container>
            <h1>Posts</h1>
            {posts != null && showPosts()}
        </Container>
    )
}

export default Posts;