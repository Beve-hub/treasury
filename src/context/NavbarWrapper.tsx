import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';


interface Props {
    children: React.ReactNode;
}

const NavbarWrapper: React.FC<Props> = ({children}) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    useEffect(() => {
        if (
            location.pathname === '/login' ||
            location.pathname === '/register' ||
            location.pathname === '/reg' ||
            location.pathname === '/admin' ||
            location.pathname === '/settings' ||
            location.pathname === '/amount'
        ) {
            setShowNavbar(false);
            setShowSidebar(false);
        } else if (
            location.pathname === '/overview' ||
            location.pathname === '/payment' ||
            location.pathname === '/wallet' ||
            location.pathname === '/company' ||
                    
            location.pathname === '/pin' ||
            location.pathname === '/transfer' ||
            location.pathname === '/withdraw' ||
            location.pathname === '/card' ||
            location.pathname === '/address' ||
            location.pathname === '/investment' ||
            location.pathname === '/exchange' ||
            location.pathname === '/loan' ||
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
            {showNavbar && <Navbar /> }
            {showSidebar && <Sidebar /> }
            {!(showNavbar || showSidebar) && children}
        </div>
    );
};

export default NavbarWrapper;
