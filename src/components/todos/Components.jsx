import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
`;

const Check = styled.div``;

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
`;

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

  flex-shrink: 0;
  &:active {
    transform: scale(0.9);
  }

  &:checked {
    background-color: #2f80ed;
    border: 1px solid #2f80ed;

    &::after {
      content: "";
      display: flex;
      justify-content: center;
      
      transform: rotate(45deg);
      height: 10px;
      margin-top: 1px;
      width: 4px;
      margin-left: 5px;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
    }
  }
`;

export const Label = styled.label`
  margin-left: 0.5rem;
  width: 100%;
  color: ${({ done }) => (done ? "#BDBDBD" : "none")};
  transition: all 0.3s ease;
`;

export const IconDelete = styled(Icon)`
  cursor: pointer;
  color: #bdbdbd;
  transition: all 0.2s ease;

  &:hover {
    color: #ff6961;
  }
`;
