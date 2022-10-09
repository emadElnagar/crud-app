import { DeleteButton, ListItem, UpdateButton } from "../styles/main";
import { MdDelete, MdModeEdit } from "react-icons/md";

function Book (props) {
  const { book } = props;
  return (
    <ListItem key={book._id}>
      <span>{book.title}</span>
      <div>
        <UpdateButton><MdModeEdit /></UpdateButton>
        <DeleteButton><MdDelete /></DeleteButton>
      </div>
    </ListItem>
  )
}

export default Book;
