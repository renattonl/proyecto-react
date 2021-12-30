import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import Logo from '../logo.svg'
// 
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/page1" className={ ({isActive}) => isActive ? 'nav-active' : '' } >Home</NavLink>
            </li>
            <li>
              <NavLink to="/page2" className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/page3" className={ ({isActive}) => isActive ? 'nav-active' : '' }>User</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/page1" element={ <LazyPage1 /> }></Route>
          <Route path="/page2" element={ <LazyPage2 /> }></Route>
          <Route path="/page3" element={ <LazyPage3 /> }></Route>
          <Route path="/*" element={ <Navigate to="/page1" replace /> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
