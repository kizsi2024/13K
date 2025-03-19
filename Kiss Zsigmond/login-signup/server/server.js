import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
import { genSalt, hash, compare } from 'bcrypt';

const app = express();
app.use(cors()); // Ez a sor engedélyezi a CORS-t
app.use(json());

// MySQL Connection
const db = createConnection({
  host: 'localhost',
  user: 'root',      // default XAMPP user
  password: '',      // default XAMPP password is empty
  database: 'login'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    db.query('SELECT * FROM login_adatok WHERE email = ? OR name = ?', [email, username], async (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Server error' });
      }
      
      if (results.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }
      
      // Hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      
      // Insert new user
      db.query(
        'INSERT INTO login_adatok (name, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error('Registration error:', err);
            return res.status(500).json({ error: 'Registration failed' });
          }
          
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Find user in database
    db.query(
      'SELECT * FROM login_adatok WHERE name = ? OR email = ?', 
      [username, username],
      async (err, results) => {
        if (err) {
          console.error('Login error:', err);
          return res.status(500).json({ error: 'Server error' });
        }
        
        if (results.length === 0) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const user = results[0];
        
        // Compare passwords
        const isMatch = await compare(password, user.password);
        
        if (!isMatch) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Return user info (except password)
        const { password: _, ...userData } = user;
        res.json({ 
          message: 'Login successful',
          user: userData
        });
      }
    );
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});