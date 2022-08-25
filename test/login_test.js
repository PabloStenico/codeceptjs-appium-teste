Feature('login');
const {I, login_page} = inject()

Scenario('Login with sucess', ({home_page}) => {
    I.wait(5)
    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSucess()
 
});

Scenario('Login error', () => {
    I.wait(5)
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()

});



