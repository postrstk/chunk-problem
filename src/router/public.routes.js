export default [
    {
        path: '/invite',
        name: 'public-invite',
        components: {
            default: () => import(/* webpackChunkName: "public" */ '@/pages/public/invite')
        }
    },
    {
        path: '/stats',
        name: 'public-stats',
        components: {
            default: () => import(/* webpackChunkName: "public" */ '@/pages/public/stats')
        }
    },
    {
        path: '/users',
        name: 'public-users',
        components: {
            default: () => import(/* webpackChunkName: "public" */ '@/pages/public/users')
        }
    }
]