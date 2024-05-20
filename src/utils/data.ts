import overIcon from '../assets/overview.svg'
import paymentIcon from '../assets/payment.svg'
import walletIcon from '../assets/wallet.svg'
import companyIcon from '../assets/company.svg'
import contact from '../assets/customer.svg'

interface SidebarItem {
    name: string;
    path: string;
    icon: string;
}

export const sidebar: SidebarItem[] = [
    {
        name: 'Overview',
        path: '/overview',
        icon:  overIcon
    },
    {
        name: 'Payment',
        path: '/payment',
        icon: paymentIcon
    },
    {
        name: 'Wallet',
        path: '/wallet',
        icon: walletIcon
    },
    {
        name: 'Company',
        path: '/company',
        icon: companyIcon
    },
    {
        name: 'Contact',
        path: '/contactUs',
        icon: contact
    },
]