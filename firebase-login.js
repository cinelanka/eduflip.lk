// Firebase Login — EduFlip.lk
firebase.initializeApp({
  apiKey: "AIzaSyDtKUyCNEky24enO93NA04EC9FWkXMDzrs",
  authDomain: "eduflip-lk.firebaseapp.com",
  projectId: "eduflip-lk",
  storageBucket: "eduflip-lk.firebasestorage.app",
  messagingSenderId: "931152367419",
  appId: "1:931152367419:web:e9d2f36b46f789f870f11e"
});

function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      document.getElementById('navCta').textContent = '👋 ' + user.displayName.split(' ')[0];
      document.getElementById('navCta').style.background = '#1D9E75';
    })
    .catch(error => {
      alert('Login failed: ' + error.message);
    });
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    document.getElementById('navCta').textContent = '👋 ' + user.displayName.split(' ')[0];
    document.getElementById('navCta').style.background = '#1D9E75';
  }
});
