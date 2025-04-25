const API_MONGO = 'http://api-mongo:8080/usuarios';
const API_MYSQL = 'http://api-mysql:8080/usuarios';

export function saveUser(user) {
    return Promise.all([
        fetch(API_MONGO, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }),
        fetch(API_MYSQL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
    ]);
}
