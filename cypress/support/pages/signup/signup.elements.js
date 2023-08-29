

const nameField = '[data-qa="signup-name"]';
const emailField = '[data-qa="signup-email"]';
const signupButton = '[data-qa="signup-button"]';

export class SignupElementsPage {

nameField = () => this.nameField().$(nameField);
emailFiel = () => this.emailFiel().$(emailField);
signupButton = () => this.nameField().$(signupButton);

constructor() {
    
}
    
}
