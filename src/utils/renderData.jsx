import TitleSection from "../components/TitleSection/TitleSection"
import Container from "../elements/Container/Container";
import renderProducts from "../utils/renderProducts";

const renderData = (data) => {
  const dataKeys = Object.keys(data)
  return dataKeys.map((dataKey, index) => (
    <Container key={index} className='container box-border mx-auto my-0 px-5 w-full'>
      <TitleSection text={dataKey.toUpperCase()} />
             {renderProducts(data[dataKey])}
        </Container> 
  ))
}

export default renderData