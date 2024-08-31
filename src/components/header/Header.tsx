import Button from '../../molecules/Button';
import Logo from '../../molecules/Logo';
import Menu from '../../molecules/Menu';
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