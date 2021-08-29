import Footer from "./component/Footer";
import Nav from "./component/Nav";

export default function Layout({children}) {

    return (
        <div className="Container">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}