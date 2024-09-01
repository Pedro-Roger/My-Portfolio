import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import * as S from './styles';
type FrontendProps = {
  children: React.ReactNode;
}

const Frontend = ({children}: FrontendProps) => {
  return ( 
    <S.Container>
      <Header/>

      <main>{children}</main>


      <Footer/>

     </S.Container>
   );
}
 
export default Frontend;