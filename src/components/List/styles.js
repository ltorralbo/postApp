import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(230, 236, 245, 0.4);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  color: #293e52;
  margin-top: 30px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: 700;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  div {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 300;
      font-size: 14px;
      padding: 0 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 380px) {
    overflow-x: scroll;
  }
`;

export const Columns = styled.div`
  display: flex;
  min-width: 300px;
`;

export const Cell = styled.div`
  display: flex;
`;

export const Filter = styled.div`
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

export const Modal = styled.div`
  background: rgba(230, 236, 245, 0.4);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  text-align: end;
  button {
    padding: 0 30px;
    height: 30px;
    border-radius: 3px;
    background: #3b5bfd;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
  }
  #secondary {
    padding: 0 5px;
    height: 30px;
    border-radius: 3px;
    background: #ffca78;
    color: #fff;
    border: 0;
    cursor: pointer;
    font-weight: bold;
  }

  h4 {
    font-weight: 300;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;
