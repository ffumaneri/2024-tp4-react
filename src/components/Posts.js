import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table  } from "react-bootstrap";

function Posts() {
    
    //TODO: Agregar los states necesarios
    const [posts, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                
                
                setPost(response.data)
                setLoading(false)

            })
    }, [])

    const postContent = () => {
        const postCont = posts.map(posts =>
            <tr>
                <td>{posts.userId}</td>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
            </tr>
        )
        return <tbody>{postCont}</tbody>
    
    }
    const showPosts = () => {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
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
                Cargando Posts...
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