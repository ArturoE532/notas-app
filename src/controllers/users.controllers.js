const usersCtrl = {};

const User = require('../models/User')

usersCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];

    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }
    if (password.length < 4) {
        errors.push({ text: 'La contraseña debe tener almenos 4 caracteres' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password,
        });
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'El correo ya esta registrado');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encrypPassword(password);
            await newUser.save();
            req.flash("success_msg", "Registro exitoso");
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin')
}

usersCtrl.signin = (req, res) => {
    res.send('signin');
}

usersCtrl.logout = (req, res) => {
    res.send('logout');
}

module.exports = usersCtrl;