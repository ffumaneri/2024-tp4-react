import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

function Posts() {
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los posts

            })
    }, [])

    const showPosts = () => {
        return(
            {/* Mostrar tabla de posts*/ }
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
            {/* mostrar POSTS */}
            <h2>Aca van los posts</h2>
        </Container>
    )
}

export default Posts;