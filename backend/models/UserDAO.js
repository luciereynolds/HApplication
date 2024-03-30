// UserDAO.js

const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            // Embedded database
            this.db = new Datastore({
                filename: dbFilePath,
                autoload: true
            });
        } else {
            // In-memory database
            this.db = new Datastore();
        }
    }

    init() {
        this.create('Peter', 'password1'); 
        this.create('Ann', 'password2');
        this.create('Lucie', 'password3');
        this.create('user','pass');
    }

    async create(username, password) {
        try {
            const hash = await bcrypt.hash(password, saltRounds);
            const entry = {
                user: username,
                password: hash,
            };
            await this.insertEntry(entry);
            console.log('User created:', username);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }

    insertEntry(entry) {
        return new Promise((resolve, reject) => {
            this.db.insert(entry, (err, doc) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(doc);
                }
            });
        });
    }

    async lookup(username) {
        try {
            const user = await this.findUser(username);
            return user;
        } catch (error) {
            console.error('Error looking up user:', error);
            return null;
        }
    }

    findUser(username) {
        return new Promise((resolve, reject) => {
            this.db.findOne({ user: username }, (err, entry) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(entry);
                }
            });
        });
    }
}

// Initialize the UserDAO instance
const dao = new UserDAO();
dao.init();

module.exports = dao;
