// Production
const url = 'https://guanare-market-api.herokuapp.com'

// Development
//const url = 'http://localhost:4000'

// Ruotes groups
const loginRoute = url + '/login/'
const userRoute = url + '/users/'

export const api = {
    login: loginRoute,

    users: {
        create: userRoute,
        get: userRoute,
        update: userRoute,
        delete: userRoute
    }
}
