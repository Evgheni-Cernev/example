import { FaInstagram, FaFacebookSquare, FaYoutube, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import ImageElements from "../../elements/ImageElements/ImageElements";
import LinkElements from "../../elements/LinkElements/LinkElements"; 

const FooterAdd = () => { 
  return (
    <div className="footer-add flex justify-between p-4">
      <ImageElements Name={FaCcVisa} size="28" fill="#fff" />
      <ImageElements Name={FaCcMastercard} size="28" fill="#fff"/>
          
      <LinkElements href="http://www.facebook.com" target="_blank" rel="noreferrer"><ImageElements Name={FaFacebookSquare} size="28" fill="#fff" className="hover:fill-yellow"/></LinkElements>
      <LinkElements href="http://www.instagram.coom" target="_blank" rel="noreferrer"><ImageElements Name={FaInstagram} size="28" fill="#fff" className="hover:fill-yellow"/></LinkElements>
      <LinkElements href="http://www.youtybe.com" target="_blank" rel="noreferrer"><ImageElements Name={FaYoutube} size="28" fill="#fff" className="hover:fill-yellow"/></LinkElements>          
    </div>)
}

export default FooterAdd