import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';


interface Props {
    children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    useEffect(() => {
        if (
            location.pathname === '/login' ||
            location.pathname === '/register' ||
            location.pathname === '/reg' ||
            location.pathname === '/amount'
        ) {
            setShowNavbar(false);
            setShowSidebar(false);
        } else if (
            location.pathname === '/overview' ||
            location.pathname === '/payment' ||
            location.pathname === '/wallet' ||
            location.pathname === '/company' ||
            location.pathname === '/settings' ||
            location.pathname === '/personal' ||
            location.pathname === '/security' ||
            location.pathname === '/pin' ||
            location.pathname === '/transfer' ||
            location.pathname === '/withdraw' ||
            location.pathname === '/deposit'
        ) {
            setShowNavbar(false);
            setShowSidebar(true);
        } else {
            
            setShowNavbar(true);
            setShowSidebar(false);
        }
    }, [location]);

    return (
        <div>
            {showNavbar && <Navbar />}
            {showSidebar && <Sidebar />}
        </div>
    );
};

export default NavbarWrapper;
