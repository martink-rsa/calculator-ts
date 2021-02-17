import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  margin: 3.125rem auto 0 auto;
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  background-color: #44454c;
  border-radius: 6px;
  box-shadow: 0px -1px 31px -3px rgba(0, 0, 0, 0.69);
`;

export const ControlGrid = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Button = styled.button`
  padding: 1.25rem;
  border-radius: 3px;
  background-color: #aca6a3;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: #121315;
  background-color: #888;
  background: linear-gradient(#888, #aca6a3);
  border: 0 none;
  box-shadow: 0 1px 0 #666, 0 5px 0 #444, 0 6px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    background: linear-gradient(#a0a0a0, #dacfc9);
  }
  :focus,
  :active {
    background: linear-gradient(#f1e5e5, #eaded7);
    outline: 1px solid #555;
    outline-offset: 2px;
  }
  @media (max-width: 411px) {
    font-size: 1.2rem;
  }
  @media (max-width: 330px) {
    padding: 8px;
  }
`;

export const DisplayContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 1.25rem;
  grid-column-start: 1;
  grid-column-end: 5;
  text-align: right;
  margin-bottom: 0.625rem;
`;

export const DisplayHistory = styled.div`
  font-size: 0.8rem;
  position: absolute;
  top: 0.3125rem;
  right: 1.25rem;
`;
export const DisplayInput = styled.div``;
