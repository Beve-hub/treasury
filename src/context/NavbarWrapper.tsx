import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

interface Props {
    children: React.ReactNode;
}

const NavbarWrapper = ({ children }: Props) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    useEffect(() => {
        const restrictedPaths = [
            '/login',
            '/register',
            '/reg',
            '/adminFood',
            '/settings',
            '/amount',
            '/recover',
            '/withdraw',
            '/action' ,          
            '/deposit',   
            '/investment',
            
        ];

        const showNavbarPaths = [
            '/overview',
            '/payment',
            '/wallet',
            '/company',
            '/pin',
            '/transfer',           
            '/card',
            '/address',            
            '/loan',
            '/deposit',
            '/contactUs',
            '/exchange',  
            '/loan' ,
        ];

        if (restrictedPaths.includes(location.pathname)) {
            setShowNavbar(false);
            setShowSidebar(false);
        } else if (showNavbarPaths.includes(location.pathname)) {
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
            {!(!showNavbar || !showSidebar) && children}
        </div>
    );
};

export default NavbarWrapper;
