import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <header className="l-header">
                <Header />
            </header>
            <main className="l-main">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;
