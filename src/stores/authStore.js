import firebase from 'firebase'
import Reflux from 'reflux'

const actions = {
    login: Reflux.createAction({asyncResult: true}),
    register: Reflux.createAction({asyncResult: true})
}

class AuthStore extends Reflux.Store {
    constructor() {
        super()
        console.log('made authstore')

        this.state = {
            error: null,
            loading: false
        }

        this.listenTo(actions.login, this.onLogin)
        this.listenTo(actions.login.failed, this.onLoginFailed)
        this.listenTo(actions.login.completed, this.onLoginCompleted)

        this.listenTo(actions.register, this.onRegister)
    }

    onLogin(email, password) {
        this.setState({loading: true, error: null})

        console.log('got login action for user:', email)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log('sign-in result:', result)
                actions.login.completed(result)
            })
            .catch(err => {
                console.log('sign-in failed:')
                console.error(err)
                actions.login.failed(err)
            })
    }

    onLoginCompleted(loginResult) {
        console.log('completed login')
        console.log(loginResult)

        this.setState({loading: false})
    }

    onLoginFailed(error) {
        const { code, message } = error

        console.log('setting error to:', message)

        this.setState({
            error: message,
            loading: false
        })        
    }

    onRegister(email, password) {
        console.log(`creating user with email ${email} and password ${password}`)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                actions.login(email, password)
            })
            .catch(err => {
                const { code, message } = err
                console.log('error creating user:', err)
                this.setState({
                    error: message
                })
            })
    }

    onRegisterCompleted() {

    }

    onRegisterFailed() {

    }
}

module.exports = {
    actions,
    store: AuthStore
}