import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Button} from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los posts
                setPosts(response.data)
                setLoading(false)
            })
    }, [])

    const postContent = () => {
        const content = posts.map(post =>
            <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                {<td><Button href={'/editpost?id=' + post.id}>Editar</Button></td>}
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        return(
            <table class="table table-dark table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col" style={{ width: '75px' }}>User ID</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {postContent()}
            </table>
        ) 
    }
    if (loading) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> 
                Cargando posts...
            </Container>
        );        
    }
    return (
        <Container>
            <h1>Posts</h1>
            {posts != null && showPosts()}
            {<Button href="/addpost">Agregar Post</Button>}
        </Container>
    )
}

export default Posts;