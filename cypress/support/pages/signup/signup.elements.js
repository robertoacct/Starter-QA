export class SignupElements{

nameField = () => $('[data-qa="signup-name"]');
emailField = () => $('[data-qa="signup-email"]');
signupButton = () =>$('[data-qa="signup-button"]');

inputName(username,useremail){
    this.SignupElements.nameField().type(username);
    this.SignupElements.emailField().type(useremail);
}

submitButton(submitBtn){
    this.SignupElements.submitBtn().click()
}
    
}
export default SignupElements;