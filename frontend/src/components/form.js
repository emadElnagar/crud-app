import { useState } from "react";
import axios from 'axios';
import { CreateForm, Input, Submit } from "../styles/main";

function Form () {
  const [title, setTitle] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/books', {
      title,
    });
    e.target.reset();
    setTitle('');
  }
  return (
    <CreateForm method="post" onSubmit={handleSubmit}>
      <Input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Enter your book' />
      <Submit type='submit' value='+' />
    </CreateForm>
  );
}

export default Form;
