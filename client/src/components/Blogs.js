import React, { useState, useEffect, } from 'react';
import BlogForm from "./BlogForm";
import axios from 'axios';
import {List, Header, Segment, Button, } from 'semantic-ui-react';

export const Blogs = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect( () => {
    axios.get("/api/blogs")
      .then( res =>
        setBlogs(res.data))
  }, []);

  // const addBlog = (blog) => setBlogs([ ...blogs, blog, ]);

  const renderBlogs = () => {
    return blogs.map( blog => (
      <Segment key={blog.id}>
        <List.Header as="h3">{blog.title}</List.Header>
        <List.Description>
          { blog.body }
        </List.Description>
      </Segment>
    ))
  }

  return (
    <>
      <Header as="h1">My Posts</Header>
      <br />
      { showForm && <BlogForm toggleForm={setShowForm} add={ blog => setBlogs([ ...blogs, blog, ])} /> }
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Posts" : "New Post" }
      </Button>
      <List>
        { renderBlogs() }
      </List>
    </>
  )
}
export default Blogs;

