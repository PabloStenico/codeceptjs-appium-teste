const code = require("../uteis/code");
const name = require("../uteis/name");

Feature('Students');

const {I, login_page, home_page} = inject()

Scenario('Add student with sucess', () => {
    

    const mycode = code.getCode()
    const myname = name.getName()

    login_page.doLogin('teste@teste.com','123456')
    home_page.registerStudent(mycode,myname)
    home_page.searchStudent(myname,mycode)
});
