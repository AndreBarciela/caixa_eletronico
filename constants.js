exports.errorName = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    VALORZERO: 'VALORZERO',
    UPDATEERROR: 'UPDATEERROR'
}

exports.errorType = {
    UNAUTHORIZED: {
        message: 'Saldo insuficiente.',
        statusCode: 401
    },
    VALORZERO: {
        message: 'Não é possível fazer o saque desse valor.',
        statusCode: 400
    },
    UPDATEERROR: {
        message: 'Não foi possível atualizar a sua conta.',
        statusCode: 403
    }
}