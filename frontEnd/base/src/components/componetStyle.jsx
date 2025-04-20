import styled from "styled-components";

export const Contenedor = styled.div`
  background-color: #EAECEC;
  width: 35%;
  height: 700px;
  padding: 30px;
  border: solid 1px #EAECEC;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(236, 222, 222, 0.1);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ContendorLateral = styled.div`
  background-color: #e2d3d3e4;
  width: 280px; 
  height: 760px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;      
  top: 0;               
  left: 0;             
  z-index: 1000;        
`;

export const InputLogin = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 12px 16px;
  margin: 15px 0;
  margin-left: 260px; 
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: #aaa;
    font-style: italic;
  }

  &:focus {
    border-color: #0077ff;
    background-color: #fff;
  }
`;
export const AccessButton = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #357ab8;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

