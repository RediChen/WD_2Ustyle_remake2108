import Logo from "src/00_commonComponents/logo/logo";
import { FC } from "react";
import dataNav from "./data/dataNav";
import NavTool from "./navTool";
import { Link, NavLink } from "react-router-dom";
// Part I : Logo --> imported
//* Part II : NavLinks */
const NavLinks: FC = () => {
    const pack = dataNav.map(item =>
        <li className="center" id={item["titleEn"]}>
            <NavLink
                to={item["href"]}
                key={item["titleEn"]}
                className="nav-link"
                activeClassName="nav-link-active"
                title={item["titleZh"] + " " + item["titleEn"]}>
                {item["titleZh"]}
            </NavLink>
        </li>
    );
    return (
        <ul id="nav-link-wrap" className="row-ul">{pack}</ul>
    );
}
// Part III : NavTool --> imported
//* 最後組裝 */
const Nav: FC = () => {
    return (
        <nav>
            <Link to="/">
                <Logo />
            </Link>
            <NavLinks />
            <NavTool />
        </nav>
    );
}
export default Nav;