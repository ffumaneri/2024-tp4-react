import {Container, Nav } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Users from './components/Users';
import UserForm from './components/UserForm';
import Posts from './components/Posts';

function Home() {
  return (
   <div>
    <h2>Trabajo Práctico 4</h2>
    <p>
      Hacer el listado de POSTS
    </p>

  </div>
  )
}
function App() {
  return (
    <Router>
      <Container className='p-6 bg-dark text-white'>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/users">USERS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/posts">POSTS</Nav.Link>
          </Nav.Item>        
        </Nav>
        </Container>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adduser' element={<UserForm/>}/>
        <Route path='/edituser' element={<UserForm/>}/>
        <Route path='/posts' element={<Posts/>}/>
        </Routes>      
    </Router>
  );
}

export default App;
