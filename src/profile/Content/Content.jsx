import mockData from "../../mock/mockProducts";
import renderData from "../../utils/renderData";
import Hero from "../../components/Hero/Hero";
import { changeLanguage } from 'i18next';
import { useTranslation } from "react-i18next";
import {useLocation, Link} from 'react-router-dom';


export const Content = (props) => {
  const locate = useLocation();
  console.log(locate)
  const { t } = useTranslation();
  const changeLng = lng => {
    changeLanguage(lng)
  };

  return (
    <>
      <Hero />
      <section className="products-gallery p-4">
        <div className="App-header">
          <h2>{t("hello_world")}</h2>
          <Link to={`/ru/${locate.pathname.split("/").splice(2).join('/')}`}>
          <button onClick={() => changeLng("ru")}>ru</button>
        </Link>

        <Link to={`/en/${locate.pathname.split("/").splice(2).join('/')}`}>
        <button onClick={() => changeLng("en")}>en</button>
        </Link>
        </div>
        {renderData(mockData)}
      </section>
    </>)
}

export default Content