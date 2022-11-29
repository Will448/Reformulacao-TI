firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        swal("Good job!", "You clicked the button!", "success");
        window.location.href = "../../index.html";
        

    }
})
