import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    if (posts.length > 0 || error) {
      setLoading(false);
    }
  }, [posts, error]);

  const postContent = () => {
    const content = posts?.map((post) => (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>{post.userId}</td>
      </tr>
    ));
    return <tbody>{content}</tbody>;
  };

  const showPosts = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Contenido</th>
            <th>Owner</th>
          </tr>
        </thead>
        {postContent()}
      </table>
    );
  };

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        Cargando
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ backgroundColor: "lightcoral" }}>
       Error
      </Container>
    );
  }

  return (
    <Container>
      <h1>Posts</h1>
      {posts.length > 0 && showPosts()}
    </Container>
  );
}
