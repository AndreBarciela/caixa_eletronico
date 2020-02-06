exports.errorName = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    UPDATEERROR: 'UPDATEERROR'
}

exports.errorType = {
    UNAUTHORIZED: {
        message: 'Saldo insuficiente.',
        statusCode: 401
    },
    UPDATEERROR: {
        message: 'Não foi possível atualizar a sua conta.',
        statusCode: 403
    }
}