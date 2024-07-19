exports.LoginPage = class LoginPage {

    constructor(page) {


        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_texbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })


    };



    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_texbox.fill(password)
        await this.login_button.click()

    };


    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');


    };




    enterUsername() {


    };
    enterPassword() {


    };
    clickOnLogin() {


    };




};