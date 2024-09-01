import styled from "styled-components";

export const Menulist = styled.ul`
  margin-left: auto;
`;

export const Itemlist = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-right: 35px;
  transition: all 0.25s ease;
  

  &:hover {
    transform:  scale(1.2);
    a {
      color: #ad9a6f;
      
    }
  }
  
  a {
    color: #1e255e;
    
  }
`;