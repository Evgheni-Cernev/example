import ImageElements from "../../elements/ImageElements/ImageElements"
import LinkElements from "../../elements/LinkElements/LinkElements"
import chiliLogo from '../../img/chili-logo.png'

export const Logo = () => {
    return (
        <div className="header-logo p-6">
                <LinkElements href="index.html" className="logo">
                    <ImageElements src={chiliLogo} alt="Logo" width='80' heigth='80'/>
                </LinkElements> 
        </div>
   ) }

export default Logo