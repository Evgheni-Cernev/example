import { companies, services, deliveryTerms } from "../../mock/mockFooterNav";
import Container from "../../elements/Container/Container";
import FooterNavCat from "../../components/FooterNavCat/FooterNavCat";
import ListRender from "../../utils/ListRender";
import FooterForm from "../../components/FooterForm/FooterForm";
import FooterAdd from "../../components/FooterAdd/FooterAdd";
    
export const Footer = () => {
 return (
        <footer className="footer">
       <Container className='container box-border mx-auto my-0 px-5 w-full'>
          <div className="footer-content flex justify-between">
          <div className="footer-nav flex justify-between grow mr-12 max-w-2xl">
           <FooterNavCat name='Company'>
             <ListRender data={companies} classNameLi='footer-item mb-4 text-gray' />
           </FooterNavCat>
           <FooterNavCat name='Services'>
             <ListRender data={services} classNameLi='footer-item mb-4 text-gray' />
           </FooterNavCat>
           <FooterNavCat name='Delivery'>
             <ListRender data={deliveryTerms} classNameLi='footer-item mb-4 text-gray' />
           </FooterNavCat>
          </div>
            <div className="footer-info">
              <FooterForm/>
              <FooterAdd/>
            </div>
        </div>
       </Container>
      </footer>
    )
}

export default Footer