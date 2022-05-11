import LinkElements from "../../elements/LinkElements/LinkElements"

const TitleSection = ({ text }) => {
    return (
        <div className='products-header flex justify-between items-end border-b-2 pb-3 mb-3'>
            <h2 className="title text-4xl mb-4">{text}</h2>
            <LinkElements href="/" className="products-to text-gray hover:text-white">GO TO MENU  CUTLERY</LinkElements>
        </div>
    )
 }

export default TitleSection