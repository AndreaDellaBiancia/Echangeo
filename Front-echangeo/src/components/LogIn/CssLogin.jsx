import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1251px) {
    width: 300px;
  }
  position: absolute;
  right: 0px;
  top: 100px;
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 3px 5px black;
  z-index: 99;
`;

export const FormLogin = styled.div`
  color: rgb(255, 81, 0);
  font-weight: bold;
  width: 90%;
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    text-align: center;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  img {
    display: block;
    position: absolute;
    z-index: 1;
    width: 2rem;
    right: 1rem;
    top: 2.2rem;
  }
`;

export const RegisterLink = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const ForgotPassword = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;
