import Nav from "../components/nav/Nav";



function Footer(){
    return <>
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">

                    <div>
                        2025 Damiano Maugeri 
                    </div>

                    <Nav />

                </div>
            </div>
        </footer>
    </>
}

export default Footer;