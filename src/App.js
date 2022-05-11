import Menu from './profile/Menu/Menu'
import Footer from './profile/Footer/Footer'

import routes from "./routes";
import RenderRoutes from "./components/RenderRoutes/RenderRoutes";


import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {routes.map((router) => {
          return <Route path={router.path} key={router.path}  element={<RenderRoutes {...router} />} />
        })}
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
