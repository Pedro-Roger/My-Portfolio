import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  height: auto;
  
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Texto = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
  color: black;
  text-align: justify;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 122, 0.1); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); 
  border: 1px solid rgba(255, 255, 255, 0.3); 
`;


export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  margin-bottom: 20px;
  justify-content: space-between;
  
`;

export const TitleDescription = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  color: black;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative; 
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(47% - 50px); 
    height: 2px;
    background-color: #ad9a6f; 
    z-index: 1;
  }

  &::before {
    left: -490px;
    width: 490px;
    
  }

  &::after {
    right: -490px;
    width: 490px;
  }
`;

export const IconLink = styled.a`
  font-size: 24px;
  color: #333;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #ad9a6f; 
  }
`;