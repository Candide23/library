export const oktaConfig = {
    clientId: '0oa8twrx4txExa2ky5d7',
    issuer: 'https://dev-15777272.okta.com/oath2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,


}