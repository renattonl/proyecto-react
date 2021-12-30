import { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Logo from '../logo.svg'
import { routes } from './routes'
// 
export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Logo" />
            <ul>
              {
                routes.map(({to, name}) => (
                  <li key={ to }>
                    <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : '' } >{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, Component}) => <Route path={path} element={ <Component /> } key={path}></Route>)
            }
            <Route path="/*" element={ <Navigate to={routes[0].to} replace /> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
