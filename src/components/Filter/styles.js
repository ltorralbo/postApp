import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  width: 500px;
  div{
    border-radius: 4px;
    border: 1px solid rgb(207, 224, 237);
    padding: 8px;
    display: flex;
  }
  button {
      padding: 0 30px;
      height: 30px;
      border-radius: 3px;
      background: #3b5bfd;
      color: #fff;
      border: 0;
      cursor: pointer;
      font-weight: bold;
  }


    input {
      //height: 29px;
      border: none;
      font-weight: 400;
      color: grey;
      
    }
    *::-webkit-input-placeholder {
        color: #cfe0ed;
    }
  }  
`;
