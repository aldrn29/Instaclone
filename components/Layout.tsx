import Header from './Header'
import Menu from './Menu'

export default function Layout({ children }) {
    return (
        <>
            <title>Instagram</title>
            <Header />
            {children}
            <Menu />
        </>
    )
}