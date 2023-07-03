export const oktaConfig = {
    clientId: '0oa8xqwronWgsF5Ov5d7',
    issuer: 'https://dev-15777272.okta.com/oauth2/default',
    //issuer: 'http://librarymk.s3-website.us-east-2.amazonaws.com',
    redirectUri:'http://localhost:3000/login/callback',
    //redirectUri:'http://librarymk.s3-website.us-east-2.amazonaws.com/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,


}

