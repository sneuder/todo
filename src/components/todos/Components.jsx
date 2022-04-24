import styled from "styled-components";
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerTodo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`;

export const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #828282;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:checked {
    background-color: #2F80ED;
    border: 1px solid #2F80ED;
  }
`;

export const Label = styled.label`
  margin-left: 0.5rem;
  width: 100%;

  text-decoration: ${({done}) => done ? 'line-through' : 'none'};
`;

export const Delete = styled.button`
  width: auto;
  align-self: flex-end;
  border: none;
  background-color: #ff6961;
  border-radius: 0.2rem;
  color: #fff;
  font-weight: 500;
  padding: 0.8rem;
  cursor: pointer;
`

export const IconDelete = styled(Icon)`
  cursor: pointer;
  color: #BDBDBD;
  transition: all 0.2s ease;

  &:hover {
    color: #ff6961;
  }
`