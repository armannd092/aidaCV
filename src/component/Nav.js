import Link from 'next/link'
export default function Nav() {
    return ( 
    <nav className = "navbar" >
        <div>
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a className = "navbar-option" href = "/" > Home </a>
            </Link> 
            <Link href="/Experience" as={process.env.BACKEND_URL + '/Experience'}>
            <a className = "navbar-option"> Experiences </a> 
            </Link>
            <Link href="/Contacts" as={process.env.BACKEND_URL + '/Contacts'}>
            <a className = "navbar-option" href = "/Contacts" > Contacts </a> 
            </Link>
        </div> 
    </nav>
    )
}