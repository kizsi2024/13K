const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'login'
})

db.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL:',err)
        return
    }
    console.log('Connected to MySQL database')
})

app.post('/api/register', async (req,res) => {
    try{
        const {username, email, password} = req.body

        db.query('SELECT * FROM login_adatok WHERE email = ? OR name = ?', {email, username},  async (err, results) => {
            if (err) {
                console.error('Database error:', err)
                return res.status(500).json({error: 'Server error'})
            }
            if(results.lenght > 0){
                return res.status(400).json({error: 'User already exists'})
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            db.query('INSERT INTO login_adatok (name, email, pasword) VALUES (?,?,?)', [username, email, hashedPassword],(err, result) => {
                if(err){
                    console.error('Registration error:', err)
                    return res.status(500).json({error: 'Registration failed'})
                }

                res.status(201).json({message: 'User registrated successfully'})
            }
                
            )
        })
    } catch (error) {
        console.error('Server error')
    }
})