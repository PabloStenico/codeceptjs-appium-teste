const { I } = inject();

module.exports = {

  fields:{
    email:'~email',
    password:'~senha'
  },

  buttons:{
    enter:'~entrar'
  },

  messages:{
    login_error: '~lognFail'
  },

  doLogin(email, password){
    //preencher o campo de email - fill email field
    I.fillField(this.fields.email, email)
    //preencher o campo de senha - fill password field
    I.fillField(this.fields.password, password)
    //clicar botão de entrar - tap on enter
    I.tap(this.buttons.enter)
  },

  checkLoginError(){
    // checar - check
    //I.fillField(this.messages.login_error)
    I.waitForElement(this.messages.login_error, 5)
    I.seeElement(this.messages.login_error)
  }

  
}
