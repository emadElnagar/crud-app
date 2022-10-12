import styled from 'styled-components';
import { danger, MainColor, success, primary } from './variables';

export const MainHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: ${MainColor};
  padding: 40px 0;
`

export const Container = styled.div`
  padding: 0 30px;
`

export const CreateForm = styled.form`
  display: flex;
`

export const Input = styled.input`
  padding: 5px 15px;
  width: 100%;
  &:focus {
    border: 1px solid ${MainColor};
    outline: none;
  }
`

export const Submit = styled.input`
  color: #fff;
  background: ${MainColor};
  border: none;
  padding: 10px 25px;
  font-size: 25px;
  cursor: pointer
`

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  border-bottom: 1px solid #000;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`

export const CheckButton = styled.button`
  color: ${success};  
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`

export const UpdateButton = styled.button`
  color: ${primary};  
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin: 0 15px;
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  padding: 0 10px
`

export const DeleteButton = styled.button`
  color: ${danger};  
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`
