Feature('login');
const {I, login_page} = inject()

Scenario('Login with success', ({home_page}) => {
    I.wait(2)
    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSucess()

    I.touchPerform([
    {
        action: 'longPress',
        options:{x:300, y:1100}
    },
    {
            action: 'moveTo',
            options:{x:300, y:250}  
    },
    { action: 'release' }

])
 
}).tag('@login_success');

Scenario('Login error', () => {
    I.wait(5)
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()

});



