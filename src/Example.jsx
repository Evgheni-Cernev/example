import { FaShoppingCart, FaShoppingBasket, FaInstagram, FaFacebookSquare, FaYoutube, FaCcVisa, FaCcMastercard, FaInfoCircle } from "react-icons/fa";
import salat from './img/salat.jpg'
import pancake from './img/pancake.jpg'
import trotter from './img/trotter.jpg'
import seafood from './img/seafood.jpg'
import soup from './img/soup.jpg'
import chiliLogo from './img/chili-logo.png'

 export const Example = () => {
    return ( <>
      {/* ///////////////////header///////////////// */}
      <header className="header h-50 bg-black sticky top-0 bg-opacity-75">
        <div className="container">
          <div className="header-content flex w-full">
            <div className="header-logo p-6">
              <a href="index.html" className="logo">
              <img src={chiliLogo} alt="Logo" width='80' heigth='80'/>
              </a> 
          </div>
          <div className="header-menu w-full">
            <div className="header-up flex justify-between items-center mb-2 p-6">
              <div className="phone text-gray">
                  Кишинев:
                  <span className="phone-num ml-3 text-lg">069 444-444</span>
                </div>
                 <div className="header-lang text-gray text-lg">
                  <span className="mr-3 hover:text-yellow after:content-['|']  after:ml-3">ro</span>
                  <span className="mr-3 hover:text-yellow after:content-['|']  after:ml-3">ru</span>
                  <span className="hover:text-yellow">en</span>
              </div>
            </div>
            <div className="header-main mb-8 flex items-center justify-between px-6">
              <div className="header-navbar">
                <ul className="dropmenu flex">
                  <li className="dropmenu-item mr-12 hover:text-yellow"><a href="#">Меню</a></li>
                  <li className="dropmenu-item mr-12 hover:text-yellow"><a href="#">Рестораны</a></li>
                  <li className="dropmenu-item hover:text-yellow"><a href="#">Новости</a></li>
                </ul>
              </div>
                <div className="flex items-center">
                  <div className="header-login">
                <a className='header-login-text mr-7 hover:text-yellow' href="">Вход</a>
              </div>
              <div className="header-bag">
                <a className='header-bag-icon' href=""><FaShoppingBasket size="28" fill="#fff" /></a>
              </div></div>
            </div>
          </div>
          </div>
        </div>
      </header>
      {/* ///////////////////hero///////////////// */}
      <section className="hero bg-hero-pattern bg-cover bg-center h-128 text-center">
        <div className="hero__center-side">
            <h1 className="hero__title text-6xl text-yellow pt-40">Your favourite breakfast</h1>
        </div>
      </section>
      {/* ///////////////////products///////////////// */}

      <section className="products-gallery p-4">
        <div className='container'>
          <div className='products-header flex justify-between items-end border-b-2 pb-3 mb-3'>
            <h2 className="title text-4xl mb-4">Продукты</h2>
            <a href="" className="products-to text-gray hover:text-white">Перейти в меню </a>
          </div>
          <ul className="product-list flex flex-wrap -ml-3 -mt-3">

            
             <li className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] hover:border-solid hover:border hover:border-yellow">
               <img src={salat} alt="salat" width='220' heigth='310' className="rounded"/> 
              <div className="product-wrapper p-3">
                <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">Salat</p>
                <FaInfoCircle size="18" fill="#878480"/>
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">90 mdl</p>
                  <div сlassName="product-cart-container"><FaShoppingCart size="18" fill="#fff" className="group-hover:fill-black"/></div>
                </div>
              </div>
            </li>

             <li className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] hover:border-solid hover:border hover:border-yellow">
               <img src={pancake} alt="pancake" width='220' heigth='310'className="rounded"/> 
              <div className="product-wrapper p-3">
                  <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">Pancake</p>
                <FaInfoCircle size="18" fill="#878480"/>
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">100 mdl</p>
                  <div сlassName="product-cart-container"><FaShoppingCart size="18" fill="#fff" className="group-hover:fill-black"/></div>
                </div>
              </div>
            </li>

            <li className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] hover:border-solid hover:border hover:border-yellow">
               <img src={trotter} alt="trotter" width='220' heigth='310'className="rounded"/> 
              <div className="product-wrapper p-3">
                  <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">Trotter</p>
                <FaInfoCircle size="18" fill="#878480"/>
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">190 mdl</p>
                  <div сlassName="product-cart-container"><FaShoppingCart size="18" fill="#fff" className="group-hover:fill-black"/></div>
                </div>
              </div>
            </li>

           <li className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] hover:border-solid hover:border hover:border-yellow">
              <img src={seafood} alt="seafood" width='220' heigth='310'className="rounded"/> 
              <div className="product-wrapper p-3">
                  <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">Seafood</p>
                <FaInfoCircle size="18" fill="#878480"/>
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">290 mdl</p>
                                <div сlassName="product-cart-container">
                                    <FaShoppingCart size="18" fill="#fff" className="group-hover:fill-black" />
                                </div>
                </div>
              </div>
            </li>

            <li className="product-list-item p-3 ml-3 mt-3 rounded basis-[calc((100% - 30px) / 3)] hover:border-solid hover:border hover:border-yellow">
            <img src={soup} alt="soup" width='220' heigth='310'className="rounded"/> 
              <div className="product-wrapper p-3">
                  <div className="product-header flex justify-between px-3 pb-3">
                  <p className="product-name ">Soup</p>
                <FaInfoCircle size="18" fill="#878480"/>
                </div>
                <div className="product-descr flex justify-between border-solid border border-yellow p-3 rounded group hover:bg-yellow hover:text-black">
                  <p className="product-price grow">80 mdl</p>
                  <div сlassName="product-cart-container"><FaShoppingCart size="18" fill="#fff" className="group-hover:fill-black"/></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section> 
      {/* //////////////////////// FOOTER///////////////////////////// */}
      <footer className="footer">
        <div className="container">
           <div className="footer-content flex justify-between">
          <div className="footer-nav flex justify-between grow mr-12">
            <div chassName="footer-nav-cat block mr-8">
              <p className="footer-nav-name text-yellow mb-6 text-lg">Компания</p>
              <ul>
                <li className="footer-item mb-4 text-gray">Карьера</li>
                <li className="footer-item mb-4 text-gray">Отзывы</li>
                <li className="footer-item mb-4 text-gray">Контакты</li>
              </ul>
            </div>

            <div chassName="footer-nav-cat block mr-8">
              <p className="footer-nav-name text-yellow mb-6 text-lg">Услуги</p>
              <ul>
                <li className="footer-item mb-4 text-gray">Карта клиента</li>
                <li className="footer-item mb-4 text-gray">Корпоративные карты</li>
                <li className="footer-item mb-4 text-gray">Детские праздники</li>
                <li className="footer-item mb-4 text-gray">Банкеты</li>
              </ul>
            </div>

            <div chassName="footer-nav-cat">
              <p className="footer-nav-name text-yellow mb-6 text-lg">Условия доставки</p>
              <ul>
                <li className="footer-item mb-4 text-gray">Кишинев</li>
                <li className="footer-item mb-4 text-gray">Бельцы</li>
                <li className="footer-item mb-4 text-gray">Кагул</li>
              </ul>
            </div>
          </div>
            <div className="footer-info">
              <div className="subscribe">
                <p className="subscribe-title mb-8 text-lg">Подписаться на рассылку</p>
                <form action="">
                  <input type="text" className="subscribe-input p-3 mr-1" />
                  <button type='submit' className="subscribe-bnt border-solid border-2 border-gray p-3 rounded hover:bg-white hover:text-black">SUBSCRIBE</button>
                </form>
              </div>
              <div className="footer-add flex justify-between p-4">
                <FaCcVisa size="28" fill="#fff" />
                <FaCcMastercard size="28" fill="#fff"/>
                <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare size="28" fill="#fff" className="hover:fill-yellow"/></a>
                <a href="http://www.instagram.coom" target="_blank" rel="noreferrer"><FaInstagram size="28" fill="#fff" className="hover:fill-yellow"/></a>
                <a href="http://www.youtybe.com" target="_blank" rel="noreferrer"><FaYoutube size="28" fill="#fff" className="hover:fill-yellow"/></a>
              </div>
            </div>
        </div>
       </div>
      </footer>
    </>)
}

export default Example