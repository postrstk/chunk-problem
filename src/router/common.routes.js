export default [
    {
        path: '/error404',
        name: '404',
        components: {
            default: () => import(/* webpackChunkName: "common" */ '@/pages/common/404')
        }
    },
    {
        path: '/error403',
        name: '403',
        components: {
            default: () => import(/* webpackChunkName: "common" */ '@/pages/common/403')
        }
    },
]