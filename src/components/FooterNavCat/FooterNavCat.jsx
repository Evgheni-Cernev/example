const FooterNavCat = ({children, name}) => {
    return (
        <div className="footer-nav-cat block mr-8">
            <p className="footer-nav-name text-yellow mb-6 text-lg">{name}</p> 
             {children}
        </div>)
 }

export default FooterNavCat