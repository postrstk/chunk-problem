export default [
    {
        path: '/broadcast',
        name: 'dashboard-broadcast',
        components: {
            default: () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/broadcast')
        }
    },
    {
        path: '/flow',
        name: 'dashboard-flow',
        components: {
            default: () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/flow')
        }
    },
    {
        path: '/profile',
        name: 'dashboard-profile',
        components: {
            default: () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/profile')
        }
    }
]