const errorResponse = (error) => {
    const { name, message } = error;

    if (name === 'ValidationError' || error.validation) {
        return {
            status: 400,
            message: message || 'Bad request; check if all required fields were sent.',
        };
    }

    if (name === 'ForbiddenError') {
        return {
            status: 403,
            message: message || 'You are not allowed to perform the task.',
        };
    }

    if (name === 'Unauthorized') {
        return {
            status: 401,
            message: message || 'Unauthorized; Kindly check your credentials.',
        };
    }

    if (name === 'NotFound') {
        return {
            status: 404,
            message: message || 'The requested resource was not found.',
        };
    }

    // default to a 500 error

    return {
        status: 500,
        message: message || 'The application has encountered an unknown error.',
    };
};

export default errorResponse;
