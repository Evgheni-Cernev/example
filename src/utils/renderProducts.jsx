import ProductItem from "../components/ProductItem/ProductItem";

const renderProducts = (data) => {
    return (
        <ul className="product-list flex flex-wrap -ml-3 -mt-3">
        {data.map(product => {
          const { id, src, alt, productName, price } = product
          return (
            <li key={id} className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] border-solid border border-bgColor hover:border-solid hover:border hover:border-yellow">
              <ProductItem src={src} alt={alt} productName={productName} price={price}/>
            </li>
          )
        })}
        </ul>
    )
};

export default renderProducts