// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, '/login'),
    register: path(ROOTS_AUTH, '/register'),
};

export const PATH_PAGE = {
    test : '/test',
    page404: '/404',
};