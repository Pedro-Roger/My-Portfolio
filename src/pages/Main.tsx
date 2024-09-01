import Frontend from "../templates/Frontend";
import * as S from './styles'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Pedro from '../assets/pedro2.jpg'
import pedro from '../assets/pedro2.png'

const Main = () => {
  return ( 
    <Frontend>
      <S.Container>
        <S.Title>Olá Visitante 👾</S.Title>
        <S.Title>Meu nome é Pedro Roger</S.Title>
        <S.Subtitle>Frontend Developer | React | Typescript</S.Subtitle>
        <S.IconContainer>
          <S.IconLink href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </S.IconLink>
          <S.IconLink href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </S.IconLink>
          <S.IconLink href="mailto:seu-email@exemplo.com">
            <FaEnvelope />
          </S.IconLink>
        </S.IconContainer>
        <S.DescriptionContainer>
          
        <S.ProfileImage src={pedro} alt="Profile Image" />
        <S.Description>
          <S.TitleDescription>Sobre mim</S.TitleDescription>
          <S.Texto>Me chamo Pedro Roger tenho 24 anos, sou um desenvolvedor Frontend, trabalho com React e Typescript, sou estagiário de Front-End na Progamers, e faço trabalhos freelancer, estou em busca de novos desafios, me aprofundando nos estudos de back-end e mobile com React-native.</S.Texto>
        </S.Description>

        </S.DescriptionContainer>

      </S.Container>
    </Frontend>
  );
}
 
export default Main;