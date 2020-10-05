import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      border: none;
      font-weight: 400;
      color: grey;
      
    }
    
    @media (max-width: 360px){
        display: block;
        flex-direction: column;

        input {
            width: 100%;
          }

          button {
            margin-top: 10px;
        }
    }
  }  
`;
