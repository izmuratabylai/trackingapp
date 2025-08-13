import {dashboard, expenses, transactions, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Ақпараттар',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Транзакцияларды көру",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Табыс",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Шығын",
        icon: expenses,
        link: "/dashboard",
    },
]