import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'


interface Props {
    children: React.ReactNode; 
}

const NavbarWrapper = ({children}: Props) => {
    const location = useLocation();
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
        setShow(false);
    } else {
        setShow(true);
    }            
    }, [location]);
    return (
        <div>
            {show && children}
        </div>
    )
}

export default NavbarWrapper
