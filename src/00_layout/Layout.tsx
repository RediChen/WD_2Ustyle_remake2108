import { FC } from "react";
import Nav from "./nav";
import Footer from "./footer";

/// 全站共用的介面布局
    const Layout: FC = ({children}) =>
    <>
        <Nav />
        {children}
        <Footer />
    </>
export default Layout;