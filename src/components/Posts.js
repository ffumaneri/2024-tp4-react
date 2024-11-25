import axios from "axios";
import React from 'react';

import { MdDelete, MdEdit } from "react-icons/md";

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
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                   
                    <MdEdit 
                         role="button" // cursor: pointer
                         className='text-secondary fs-4'  // color y tamaño
                         onClick={() => alert("Editar post: " + post.id )}
                        />
                    <MdDelete
                          role="button" // cursor: pointer
                          className='text-danger fs-4'  // color y tamaño
                          onClick={() => alert("Borrar post: " + post.id )}
                          />
                </td>
            </tr>
        );
    };
    
    const showPosts = () => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Mensaje</th>
                        <th>Acciones</th>
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
