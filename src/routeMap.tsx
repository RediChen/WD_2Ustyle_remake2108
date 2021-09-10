import { FC } from 'react';
import { Route } from 'react-router-dom';
import dataNav from './00_layout/data/dataNav';
import HomePage from './01_homePage/HomePage';
import Login from './02_login/login';
import CartPage from './03_cart/cart';
import Disclaimer from './04_disclaimer/disclaimer';
import Pot from './11_pots/pot';
import Plant from './12_plants/plant';
import Flower from './13_flowerpots/flowerpots';
import GardeningTool from './14_gardeningTools/gardening';

//todo 需要將 gh-pages 的預設網址重新導向這裡的預設（不帶專案名稱）
//* 路由 map */
const mapOfRoutes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: dataNav[0]["href"],
        component: Pot
    },
    {
        path: dataNav[1]["href"],
        component: Plant
    },
    {
        path: dataNav[2]["href"],
        component: Flower
    },
    {
        path: dataNav[3]["href"],
        component: GardeningTool
    },
    {
        path: '/disclaimer',
        component: Disclaimer
    }
] as {
    path: string,
    component: FC,
    exact: boolean
}[];
const RouteMap = <>
    {
        mapOfRoutes.map((route) =>
            <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
            >
                <route.component />
            </Route>
        )
    }
</>
export default RouteMap;