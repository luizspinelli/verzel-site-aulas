import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 35px;
`;

export const FormContainer = styled.div`
  display: flex;
  padding: 50px 20px 40px;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  border: 1px solid rgb(94, 73, 255);
  border-radius: 8px;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    div {
      svg {
        width: 10%;
        color: rgb(37,203,211);
      }
      input {
        width: 90%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 5px;
        background-color: rgb(36,18,75);
        color: rgb(240,245,255);
        border: 0px;
      }

      & + div {
        margin-top: 10px;
      }
    }
    button {
      display: flex;
      height: 56px;
      width: 100%;
      background-color: rgb(37, 203, 211);
      border: 0px;
      color: rgb(240, 245, 255);
      border-radius: 12px;
      font-size: 18px;
      font-weight: 600;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      margin-bottom: 0px;
      margin-top: 10px;
    }
  }
`;