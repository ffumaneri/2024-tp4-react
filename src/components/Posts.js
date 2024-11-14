import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import React from 'react';

function Posts() {
    
    // TODO: Agregar los states necesarios
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
            <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        )
        return <tbody>{content}</tbody>
    }

    const showPosts = () => {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Id de Usuario</th>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Cuerpo</th>
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