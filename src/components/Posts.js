import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los posts
                setPosts(()=>{
                    return response.data.filter(post=>post.id <= 50)
                })
                setLoading(false)
            }).catch(error => {
                setError({message: 'Ha ocurrido un error: ' + error.message})
            })
    }, [])

    const showPosts = () => {
        return(
            <Table>
            {/* TODO: Mostrar tabla de posts*/ }
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className="text-nowrap">User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr>
                             <td>
                                {post.id}
                            </td>
                            <td>
                                {post.userId}
                            </td>
                            <td>
                                {post.title}
                            </td>
                            <td>
                                {post.body}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        ) 
    }

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center gap-3">
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> 
                Cargando... (acá van a estar los posts)
            </Container>
          );        
    }

    if (error) {
        return (
            <Container>
                <Alert variant='danger'>
                    {error.message}
                </Alert>
            </Container>
        )
    }
    return (
        <Container>
            <h1>Posts</h1>
            {/* TODO: mostrar POSTS */}
            {showPosts()}
        </Container>
    )
}

export default Posts;