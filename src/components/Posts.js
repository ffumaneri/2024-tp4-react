import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);
  const postsContent = () => {
    const content = posts.map((post) => (
      <tr>
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
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {postsContent()}
      </table>
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
      {posts != null && showPosts()}
    </Container>
  );
}

export default Posts;
