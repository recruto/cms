import firebase from '../../plugins/firebase'

Cypress.Commands.add('signIn', () => {
  const user = 'contato+test@diegoleme.com.br'
  const pass = '123qwe123'

  firebase.auth().useDeviceLanguage()
  return firebase.auth().signInWithEmailAndPassword(user, pass)
})

Cypress.Commands.add('signOut', () => {
  return firebase.auth().signOut()
})
