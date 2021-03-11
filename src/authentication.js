class Auth
{
    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        callback()
    }
    logout(callback) {
        this.authenticated = false;
        callback()
    }
    isAuthorized()
    {
        return this.authenticated;
    }
}
export default new Auth()