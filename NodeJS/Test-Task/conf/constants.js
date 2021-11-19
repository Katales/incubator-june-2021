module.exports = {

    USER_TYPE:  {
        Admin: 'Admin',
        Driver: 'Driver',
    },

    NAME_REGEXP: new RegExp(/^[A-Za-z']{2,20}$/),
    USERNAME_REGEXP: new RegExp(/^[A-z]{2,20}$/),
    EMAIL_REGEXP: new RegExp(/^[\w-.]+@[[\w-.]+$/),
    PASSWORD_REGEXP: new RegExp(/(?=.*[a-z].*)(?=.*[0-9].*)^[!-~]{8,20}$/),

    TKN: {
        TYPE: {
            ACCESS: 'ACCESS',
            REFRESH: 'REFRESH'
        },
        SECRET: {
            ACCESS: 'As-secret-Df-4-axss_token-Q5@d',
            REFRESH: 'secret-qWeR-for-Jl86-refresh_token'
        },
        EXP: {
            ACCESS: '10m',
            REFRESH: '1d'
        }
    }
};
