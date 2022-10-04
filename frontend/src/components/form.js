import { CreateForm, Input, Submit } from "../styles/main";

function Form() {
  return (
    <CreateForm>
      <Input type='text' placeholder='Enter your book' />
      <Submit type='submit' value='+' />
    </CreateForm>
  );
}

export default Form;
