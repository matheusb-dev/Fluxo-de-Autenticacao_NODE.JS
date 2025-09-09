class InvalidCredentialsException extends Error {
    constructor(message = "Invalid Credentials") {
        super(message);
        this.name = 'InvalidCredentialsException';
        this.StatusCode = 401;
    }
}

module.exports = InvalidCredentialsException;