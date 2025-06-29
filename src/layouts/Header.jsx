import Logo from "../components/logo/Logo";
import Nav from "../components/nav/Nav";


function Header(){

    return <>
    <header className="header bg-success ">
        <div className="container d-flex justify-content-between  align-items-center h-100 px-5">
        <Logo/>
        <Nav/>
        </div>
    </header>
    </>
}
export default Header;