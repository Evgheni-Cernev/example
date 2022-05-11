import mockImages from "../../mock/mockImages";
import renderImages from "../../utils/renderImages";
import { FaShoppingBasket } from "react-icons/fa";
import Container from "../../elements/Container/Container";
import ImageElements from "../../elements/ImageElements/ImageElements"
import Languages from '../../components/Langauges/Languades';
import CityPhone from "../../components/CityPhone/CityPhone";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import Button from "../../elements/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";


export const Menu = () => {
    return (
     <header className="header h-50 bg-black sticky top-0 bg-opacity-75">
        <Container className='container box-border mx-auto my-0 px-5 w-full flex'>
          <Logo/>
          <div className="header-menu w-full">
            <div className="header-up flex justify-between items-center mb-2 p-6">
                <CityPhone />
                    {renderImages(mockImages)}
                <Languages/>   
            </div>
            <div className="header-main mb-8 flex items-center justify-between px-6">
                 <NavBar/>  
            <div className="flex items-center">             
                <Button type='button' className='header-login-text mr-7 hover:text-yellow' content='Вход' />   
                <Dropdown selectedValue={<ImageElements Name ={FaShoppingBasket} size="28" fill="#fff" className="hover:fill-yellow"/>}/>
                  {/* <Button type='button' content={<ImageElements Name ={FaShoppingBasket} size="28" fill="#fff" className="hover:fill-yellow"/>}/>    */}
            </div>
            </div>
          </div>
        </Container>
      </header>

)
}

export default Menu