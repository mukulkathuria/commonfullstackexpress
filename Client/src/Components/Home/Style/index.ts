import styled from 'styled-components';

export const MainDiv = styled.div``;

export const HeaderDiv = styled.div`
    width: 100%;
`;

export const LogOutBtn = styled.button`
    align: left;
`;

export const Header = styled.header`
  width: 100%;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: #ffff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 1.2rem;
`;
export const DivContainer = styled.div`
  width: 70%;
  margin: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    text-decoration:none;
    color:inherit;
  }
`;
export const Logo = styled.div`
  width: 6rem;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const SearchDiv = styled.div`
  input {
    padding: 4px;
    background-color: #f1f1f1;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 3px;
    :focus {
      outline: 1.5px solid blue;
    }
  }
`;

export const Icons = styled.div`
  font-size: 1.1em;
  svg,
  img {
    margin: 0 0.5em;
    cursor: pointer;
  }
  img {
    height: 25px;
    width: 25px;
  }
`;

export const Userinfo = styled.span`
  position: relative;
  cursor: pointer;
  img{
    border-radius:50%;
  }
`;
export const AccountDetails = styled.div`
  position: absolute;
  z-index: 15;
  background-color:blue;
`;