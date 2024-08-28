import Logo from '../../molecules/Logo';
import * as S from './styles';
const Header = () => {
  return ( 
  <S.HeaderBox>
    <Logo/>
    <div className='menu'>Menu</div>
    <div className='button'>Button</div>
  </S.HeaderBox> );
}
 
export default Header;