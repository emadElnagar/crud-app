import { Fragment, useState } from "react";
import { DeleteButton, ListItem, UpdateButton, CheckButton, UpdateForm, Input, SubmitButton, CancelButton } from "../styles/main";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import axios from "axios";

function Book (props) {
  const { book } = props;
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState('');
  // Cancel update
  const cancelUpdate = (e) => {
    e.preventDefault();
    setIsUpdate(false);
  }
  // Update book
  const handleUpdate = async (id) =>{
    await axios.put(`http://127.0.0.1:5000/books/${id}/update`, {
      title,
    });
  }
  return (
    <Fragment>
      <ListItem className={`${isUpdate === true ? 'd-none': ''}`}>
        <span>{book.title}</span>
        <div>
          <CheckButton title="Read"><GiCheckMark /></CheckButton>
          <UpdateButton title="Update" onClick={() => setIsUpdate(true)}><MdModeEdit /></UpdateButton>
          <DeleteButton title="Delete"><MdDelete /></DeleteButton>
        </div>
      </ListItem>
      <div>
        <UpdateForm onSubmit={() => handleUpdate(book._id)} className={`${isUpdate === true ? '': 'd-none'}`}>
          <Input type='text' defaultValue={book.title} onChange={(e) => setTitle(e.target.value)} />
          <SubmitButton type="submit" title="Submit"><GiCheckMark /></SubmitButton>
          <CancelButton onClick={cancelUpdate} title="Cancel">x</CancelButton>
        </UpdateForm>
      </div>
    </Fragment>
  )
}

export default Book;
