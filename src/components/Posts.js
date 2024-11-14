import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";

/**
 * @typedef {Object} Post
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {string} body
 */

function Posts() {
    const [posts, setPosts] = useState(/**@type {Array<Post>}*/(null))
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
    }, []);

    const postsContent = _ => {
        const content = posts.map(post => (
            <tr>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                    <Button href={`/editpost?id=${post.id}`}>Editar</Button>
                </td>
            </tr>
        ));
        return <tbody>{content}</tbody>;
    };

    const showPosts = _ => {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>UID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                {postsContent()}
            </Table>
        );
    }

    if(loading) {
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
            {posts && showPosts()}
            <Button href="/addpost">Agregar Post</Button>
        </Container>
    )
}

export default Posts;
