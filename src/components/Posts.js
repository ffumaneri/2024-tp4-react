import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

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

    const postsContent = () => {
        const content = posts.map(post =>
            <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td><Button href={'/editpost?id=' + post.id}>Editar</Button></td>
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        return(
            /*{ TODO: Mostrar tabla de posts }*/
            <Table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>ID</th>
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
            {/* TODO: mostrar POSTS */}
            {posts != null && showPosts()}
            <Button href="/addpost">Agregar Post</Button>
        </Container>
    )
}

export default Posts;
