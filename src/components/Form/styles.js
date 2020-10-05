import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  
  div{
    border-radius: 4px;
    border: 1px solid rgb(207, 224, 237);
    padding: 8px;
    flex-direction: column;

   
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
      margin-top: 15px;
  }


    input {
      //height: 29px;
      border: none;
      font-weight: 400;
      color: grey;
      width: 100px;
    }


    textarea {
        //height: 29px;
        border: none;
        font-weight: 300;
        color: grey;
        max-width: 250px;
        max-height: 15px;
        font: 14px 'Roboto', sans-serif;
        width: 100%;
      }
    @media (max-width: 545px){
        display: block;
        flex-direction: column;
        
        div{
            margin-bottom: 7px;
        }
        input {
            width: 100%;
            
          }

          button {
            margin-top: 10px;
            width: 100%;
        }

        textarea {
            min-height: 100px;
            
          }
    }
  }  
`;

export const ValidationMessage = styled.span`
  color: #ff6434;
  height: 20px;
  font-size: 12px;
  margin-bottom: '10px';
`;
