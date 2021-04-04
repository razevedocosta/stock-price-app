interface Response {
    token: string;
    user: {
        name: string;
        email: string;
        password: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'asdqwe#',
                user: {
                    name: 'Rodrigo',
                    email: 'rodrigo@email.com',
                    password: '123456',
                },
            });
        }, 1000);
    });
}