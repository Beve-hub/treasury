import overIcon from '../assets/overview.svg'
import paymentIcon from '../assets/payment.svg'
import walletIcon from '../assets/wallet.svg'
import companyIcon from '../assets/company.svg'
import chartIcon from '../assets/chart.svg'
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
        name: 'Loan',
        path: '/loan',
        icon: companyIcon
    },
    {
        name: 'Exchange',
        path: '/exchange',
        icon: chartIcon
    },
    {
        name: 'Contact',
        path: '/contactUs',
        icon: contact
    },
]