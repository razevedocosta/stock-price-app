interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'asdqwe#',
                user: {
                    name: 'Rodrigo',
                    email: 'rodrigo@email.com'
                },
            });
        }, 1000);
    });
}