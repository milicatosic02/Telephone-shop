window.addEventListener('load', () => {
    document.getElementById('register').addEventListener('click', (evt) => {
        evt.preventDefault();


        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value
        };

        console.log("username: " + data.username + ", password: " + data.password);

        fetch('http://localhost:9001/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                if (data.msg) {
                    alert(data.msg);
                } else {
                    //zapisi token u cookie
                    document.cookie = `token=${data.token};SameSite=Lax`;
                    //redirektuj na index.html stranicu
                    window.location.href = window.location.href = 'http://localhost:8000/index.html';
                }
            });
    });
});
