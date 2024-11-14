import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Container, Form, Spinner } from "react-bootstrap"
import { useNavigate, useSearchParams } from "react-router-dom"

function PostForm(){
    const [searchParams, setSearchParams] = useSearchParams()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    useEffect(() => {
        const id = searchParams.get("id")
        if (id) {
            //Edit
            axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(
                (response) => {
                    setTitle(response.data.title)
                    setBody(response.data.body)
                }
            )
        }
        setLoading(false)
    }, [])
    const enviarDatos = (e) => {
        setLoading(true)
        axios.post("https://jsonplaceholder.typicode.com/posts").then(
            (response) => {
                navigate("/posts")
            }
        ).catch(err => {
            console.log(err)
            setLoading(false)
            setError(err)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        enviarDatos()
    }
    const onChangeTitle = (e) => {
        e.preventDefault();        
        setTitle(e.target.value)
    }
    const onChangeBody = (e) => {
        e.preventDefault();
        setBody(e.target.value)
    }
    if (loading) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );        
    }
    return(
        <Form onSubmit={handleSubmit} noValidate>
        {error && (<p>Error al enviar datos: {error.message}</p>)}
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={onChangeTitle}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Body</Form.Label>
            <Form.Control type="text" placeholder="Enter body" value={body} onChange={onChangeBody} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    )
}


export default PostForm