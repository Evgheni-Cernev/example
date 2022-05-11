import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import ImageElements from "../../elements/ImageElements/ImageElements";

const ProductItem = ({src, alt, productName, price}) => {
    return (<>
     <ImageElements src={src} alt={alt} width='220' heigth='310' className="rounded" />
              <div className="product-wrapper p-3">
                <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">{productName}</p>
          <ImageElements Name={FaInfoCircle} size="18" fill="#878480" />
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">{price} mdl</p>
          <div className="product-cart-container"><ImageElements Name={FaShoppingCart} size="18" fill="#fff" className="group-hover:fill-black" /></div>
                </div>
              </div>
    </>)
 }

export default ProductItem