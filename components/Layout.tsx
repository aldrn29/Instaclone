import Header from './Header'
import Menu from './Menu'

const Layout = ({ children }) => {
    return (
        <>
            <title>Instagram</title>
            <Header />
            <main>{children}</main>
            <Menu />
        </>
    )
}

export default Layout;