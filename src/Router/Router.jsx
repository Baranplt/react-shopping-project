import { useRoutes } from 'react-router-dom'
import Home from '../components/Page/Page'
import Product from '../components/Product/products'
import Cart from '../components/Global/cart'
function Router() {

    const routes = useRoutes(
        [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:id',
                element: <Product />
            },
            {
                path: 'cart',
                element: <Cart />
            }



       
        ])
    return routes

}

export default Router
