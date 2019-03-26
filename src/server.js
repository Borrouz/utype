import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBGJudEPb9UtQOikd8wUxdaKE3M-2kjbCI',
  authDomain: 'utype-1c7dc.firebaseapp.com',
  databaseURL: 'https://utype-1c7dc.firebaseio.com',
  projectId: 'utype-1c7dc',
  storageBucket: 'utype-1c7dc.appspot.com',
  messagingSenderId: '847761407683'
};
firebase.initializeApp(config);

const saveUser = user =>
  firebase
    .database()
    .ref('users/' + user.id)
    .set({...user});

export function createUserWithEmailAndPassword(email, password, name) {
  // console.log('email, password', email, password)
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      console.log('user', data.user);
      const user = {
        id: data.user.uid,
        name,
        email: data.user.email,
        password,
      }
      saveUser(user);
    })
    .then()
    .catch(err => null);
}

export function signInWithEmailAndPassword(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
}

export function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => console.log('sign-out successfull'))
    .catch(err => console.log(err));
}