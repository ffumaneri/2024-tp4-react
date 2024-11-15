import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";

function Posts() {
    // Agregar el estado para los posts
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                // Leer los posts y guardarlos en el estado
                setPosts(response.data);
                setLoading(false);
            })
    }, []);

    const postsContent = () => {
        const content = posts.map((post) => (
          <tr key={post.id}>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ));
        return <tbody>{content}</tbody>;
      };

    const showPosts = () => {
        return (
          <Table>
            <thead>
              <tr>
                <th>UserID</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            {postsContent()}
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
            {/* Mostrar posts */}
            {posts && showPosts()}
        </Container>
    )
}

export default Posts;
