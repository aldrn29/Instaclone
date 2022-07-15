import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <title>Instagram</title>
            <Header />
            {children}
            <Footer />
        </>
    )
}