import Logo from '../../molecules/Logo';
import * as S from './styles';
const Header = () => {
  return ( 
  <S.HeaderBox>
    <Logo/>
    <Menu/>
    <Button/>
  </S.HeaderBox> );
}
 
export default Header;