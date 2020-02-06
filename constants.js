exports.errorName = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    VALORZEROSAQUE: 'VALORZEROSAQUE',
    VALORZERODEPOSITO: 'VALORZERODEPOSITO',
    UPDATEERROR: 'UPDATEERROR'
}

exports.errorType = {
    UNAUTHORIZED: {
        message: 'Saldo insuficiente.',
        statusCode: 401
    },
    VALORZEROSAQUE: {
        message: 'Não é possível fazer o saque desse valor.',
        statusCode: 400
    },
    VALORZERODEPOSITO: {
        message: 'Não é possível fazer o depósito desse valor.',
        statusCode: 400
    },
    UPDATEERROR: {
        message: 'Não foi possível atualizar a sua conta.',
        statusCode: 403
    }
}