import styled, { css } from 'styled-components';

interface IModuleProps {
  active?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  width: 80%;
  align-items: center;
  align-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ModulesContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const TitleContainer = styled.div`
  .titleBox{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: rgb(240,245,255);
    }

    a {
      padding: 1px;
      text-decoration: none;
      svg {
        margin-left: 10px;
        color: rgb(59,212, 45);
        width: 40px;
        height: 40px;
      }
    }
  }

  p {
    font-size: 18px;
    margin: 8px 0px 40px;
    color: rgb(161,145,255);
  }
`;

export const ModulesContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 24px 32px;
`;


export const Module = styled.button<IModuleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: 16px;
  border: 1px solid rgb(67,51,118);
  background: rgb(36,18,75);
  transition: border 0.2s;

  ${props =>
    props.active &&
    css`
      border: 2px solid rgb(59, 212, 45);
  `}

  &:hover {
    border: 2px solid rgb(59, 212, 45);
  }

  .optionsBox {
    flex-direction: column;
    a , button{
      padding: 1px;
      text-decoration: none;
      background: transparent;
      border: 0px;
      svg {
        color: rgb(59,212, 45);
      }
    }


  }


  div {
    display: flex;
    img {
      opacity: 1;
      margin-right: 12px;
      width: 48px;
      height: 48px;
      border-radius: 12px;
    }
    div {
      margin-right: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h5 {
        opacity: 1;
        color: rgb(59, 212, 45);
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 0px;
      }

      span {
        margin-top: 6.5px;
        color: rgb(161, 145, 255);
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
`;

export const ClassesContainer = styled.div`
  padding: 0px 16px;
`;

export const ModuleTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0px 20px;
  
  img {
    border-radius: 16px;
    width: 72px;
    height: 72px;
    background: rgb(156, 242, 127);
  }

  div {
    margin-left: 18px;
    h1 {
      font-size: 32px;
      font-weight: 600;
      font-family: "Biennale Regular";
      color: rgb(240, 245, 255);
    }

    p {
      margin: 0px;
      font-size: 18px;
      color: rgb(161, 145, 255);
    }
  }
`;

export const ClassesContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 38px 52px;
  margin: 18px 0px;
`;

export const Class = styled.button`
  justify-content: space-between;
  background-color: rgb(36, 18, 75);
  border-radius: 32px;
  border: 1px solid rgb(94, 73, 255);
  padding: 28px;
  transition: border 0.2s;
  color: rgb(240, 245, 255);

  &:hover {
    border: 2px solid rgb(59, 212, 45);
  }

`;