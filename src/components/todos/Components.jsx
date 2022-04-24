import styled from "styled-components";

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
`;

export const Delete = styled.button`
  padding: 0.5rem;
`