import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios

    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // TODO: leer los post

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
                {/* <td><Button href={'/edituser?id=' + user.id}>Editar</Button></td> */}
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        {/* TODO: Mostrar tabla de posts*/ }
        return(
            <Table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                {postContent()}
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
            {showPosts()}
        </Container>
    )
}

export default Posts;