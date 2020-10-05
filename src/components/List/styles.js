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
