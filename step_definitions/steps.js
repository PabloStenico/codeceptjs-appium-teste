const { I } = inject();


Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('I fill email', () => {
  I.wait(5)
  I.fillField('~email', 'teste@teste.com')
});

Given('I fill password', () => {
  I.fillField('~senha', '123456')
});

When('I tap on Entrar', () => {
  I.tap('~entrar')
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});
