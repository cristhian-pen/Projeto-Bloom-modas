const passport = require("passport");
const user = require("../model/model");
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

module.exports = function(passport) {
    
    function findUser(username) {
        return user.findAll({where:{EMAIL: username}});
    }

    passport.serializeUser((usr, done) => {
    done(null, user.EMAIL);
    });

    passport.deserializeUser(() => {
        try{
            const usrs = findUser(username);
            done(null, usrs);
        }catch(err){
            console.log(err);
            return done(err, null);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        try {
            const user = findUser(username);
            if (!user) return done(null, false);

            const isValid = bcrypt.compareSync(password, user.SENHA);
            if(!isValid) return done(null, false);
            return done(null, user);
        } catch (err) {
            console.log(err);
            return done(err, false)
        }
    }));

}