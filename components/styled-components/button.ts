import styled from "styled-components";

export const Button = styled.button`
  background-color: #1e293b;
  margin: 20px auto;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display:flex;

  &:hover {
    background-color: #334155; 
  }
  &[disabled] {
    background-color: #808080; 
    cursor: not-allowed;
    opacity: 0.5; 
  }
`;
