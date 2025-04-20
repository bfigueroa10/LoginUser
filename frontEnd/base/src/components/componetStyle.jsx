import styled from "styled-components";

export const Contenedor = styled.div`
  background-color: #f4f6f8;
  width: 100%;
  max-width: 420px;
  height: auto;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContendorLateral = styled.div`
  background-color: #dcd6f7;
  width: 260px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.05);
`;

export const InputLogin = styled.input`
  width: 100%;
  padding: 14px 18px;
  margin: 18px 0;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background-color: #ffffff;
  transition: all 0.25s ease;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);

  &::placeholder {
    color: #9ca3af;
    font-style: italic;
  }

  &:focus {
    border-color: #6366f1;
    background-color: #fefefe;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    outline: none;
  }
`;

export const AccessButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  padding: 14px 36px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #4f46e5;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #c7d2fe;
    cursor: not-allowed;
  }
`;
