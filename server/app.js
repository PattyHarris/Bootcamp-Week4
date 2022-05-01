
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello from the server!');
})

app.listen(3001, () => {
    console.log("Server ready.");
})

//=============================
// Login handler.
app.post('/login', (req, res) => {
    console.log("Received login data.");

    const email = req.body.email;
    console.log(email);

    const password = req.body.password;
    console.log(password);
    
    // For testing purposes, hard-coded.....
    if (email === 'test@test.com' && password === 'test') {
        console.log('We have a member!');
        res.redirect('http://localhost:3000/members');
        return;
    }

    console.log('Not a member 😞')
    res.redirect('http://localhost:3000/login');

})

//=============================
// Signup handler
app.post('/signup', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const password_confirmation = req.body.password_confirmation;
  
    if (!email || !password || !password_confirmation) {
        res.status(400).send('Missing data');
        return;
    }

    if (accountExists(email)) {
        res.status(403).send('Account already exists.');
        return;
    }

    // Verify password is correct.
    if (password != password_confirmation) {
        res.status(400).send('Passwords do not match.');
        return;
    }

    // Password must be >= 8 characters
    if (password.length < 8) {
        res.status(400).send('Password is invalid.');
        return;
    }

    // Else, we're good to go.
    createAccount(email, password);
    res.status(200).send('Account created.');

})

// Helper: Determine if the account exists already.
// Code is incomplete at this point.
const accountExists = (email) =>  {

    // Check if the account already exists....TBD
    return false;
}

// Helper: Create the user account.
const createAccount = (email, password) => {
    // TBD
}