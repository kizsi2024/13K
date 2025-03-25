import express, {json} from 'express'
import {createConnection} from 'mysql'
import cors from 'cors'
import {genSalt, hash, compare} from 'bcrypt'

const app = express()
app.use(cors())
app.use(json())

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
        console.error('Server error:', error)
        res.status(500).json({error: 'Server error'})        
    }
})

app.post('/api/login', async (req,res) => {
    try{
        const {username, password} = req.body

        db.query('SELECT * FROM login_adatok WHERE name = ? OR email = ?', [username, username], async (err, results) => {
            if (err) {
                console.error('Login error:', err)
                return res.status(500).json({error: 'Server error'})
            }
            if(results.lenght === 0){
                return res.status(401).json({error: 'Invalid credentials'})
            }

            const user = results[0]
            const isMatch = await compare(password, user.password)
            if(!isMatch){
                return res.status(401).json({error: 'Invalid credentials'})
            }

            const { password: _, ...userData } = user
            res.json({
                message: 'Login successful',
                user: userData
            })
        }
    )
    } catch (error){
        console.error('Server error:', error)
        res.status(500).json({error: 'Server error'})
    }
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})