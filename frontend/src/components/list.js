import { DeleteButton, ListItem, UpdateButton } from "../styles/main";
import { MdDelete, MdModeEdit } from "react-icons/md";

function List () {
  return (
    <ul>
      <ListItem>
        <span>book 1</span>
        <div>
          <UpdateButton><MdModeEdit /></UpdateButton>
          <DeleteButton><MdDelete /></DeleteButton>
        </div>
      </ListItem>

      <ListItem>
        <span>book 1</span>
        <div>
          <UpdateButton><MdModeEdit /></UpdateButton>
          <DeleteButton><MdDelete /></DeleteButton>
        </div>
      </ListItem>

      <ListItem>
        <span>book 1</span>
        <div>
          <UpdateButton><MdModeEdit /></UpdateButton>
          <DeleteButton><MdDelete /></DeleteButton>
        </div>
      </ListItem>

      <ListItem>
        <span>book 1</span>
        <div>
          <UpdateButton><MdModeEdit /></UpdateButton>
          <DeleteButton><MdDelete /></DeleteButton>
        </div>
      </ListItem>
    </ul>
  )
}

export default List;
