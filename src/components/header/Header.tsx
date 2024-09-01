
import Button from '../../molecules/button/Button';
import Logo from '../../molecules/logo/Logo';
import Menu from '../../molecules/menu/Menu';
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