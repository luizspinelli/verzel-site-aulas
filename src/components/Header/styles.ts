import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px 10%;
  background: rgb(28, 12, 63);
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid rgb(67, 51, 118);

  a {
    margin-right: 42px;
    img {
      width: 75%;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;

    a{
      font-size: 16px;
      font-weight: 600;
      font-family: "Biennale Regular";
      background-color: rgb(28, 12, 63);
      color: rgb(37, 203, 211);
      padding: 9px 18px 5px;
      border: 1px solid rgb(37, 203, 211);
      border-radius: 12px;
      height: 43px;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgb(37, 203, 211);
        color: #fff;
      }
    }
  }

  
`;