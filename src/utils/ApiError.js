class ApiError extends Error {
    constructor (
        statusCode,
        message= "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super( message)
        this.statusCode = statusCode
        this.data = null
        this.messagee = message
        this.success = false;
        this.errors = errors


        if (stack) {
            this.statck =stack
        }else{
            Error.capptureStackTrace (this, this.constructor)
        }

    }
}

export {ApiError}