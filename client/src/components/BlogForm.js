import React, { useState, } from "react";
import axios from "axios";
import { Form, TextArea } from "semantic-ui-react";
import { useFormInput, } from "../hooks/useFormInput";


const BlogForm = (props) => {
  const title = useFormInput("");
  const body = useFormInput("");

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("/api/blogs", {  title: title.value, body: body.value, })
    .then( res => {
      props.add(res.data);
      props.toggleForm();
    })
}
return (
  <>
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Input
          label="Title"
          placeholder="Title"
          name="title"
          width = '4'
          required
          { ...title }
        />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Body"
          placeholder="What are you writing about today?"
          name="body"
          width = '9'
          required
          { ...body }
        />
      <Form.Button>Publish!</Form.Button>
    </Form>
  </>
)
}

export default BlogForm;



