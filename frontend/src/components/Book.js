import { DeleteButton, ListItem, UpdateButton, CheckButton } from "../styles/main";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function Book (props) {
  const { book } = props;
  return (
    <ListItem key={book._id}>
      <span>{book.title}</span>
      <div>
        <CheckButton title="Read"><GiCheckMark /></CheckButton>
        <UpdateButton title="Update"><MdModeEdit /></UpdateButton>
        <DeleteButton title="Delete"><MdDelete /></DeleteButton>
      </div>
    </ListItem>
  )
}

export default Book;
