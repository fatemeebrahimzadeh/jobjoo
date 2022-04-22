// routes
import { PATH_AUTH, PATH_PAGE } from './paths';

const menuConfig = [
    {
        title: 'Home',
        icon: "",
        path: '/',
    },
    {
        title: 'Pages',
        path: '/pages',
        icon: '',
        children: [
            {
                subheader: 'Authentication',
                items: [
                    { title: 'Login', path: PATH_AUTH.login },
                    { title: 'Register', path: PATH_AUTH.register },
                ],
            },
            {
                subheader: 'test',
                items: [
                    { title: 'test', path: PATH_PAGE.test },
                ],
            },
            {
                subheader: 'Error',
                items: [
                    { title: 'Page 404', path: PATH_PAGE.page404 },
                ],
            },
        ],
    },
];

export default menuConfig;
