firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "../../index.html";
        alert("Você foi barrado😎🚨");
    }
})
