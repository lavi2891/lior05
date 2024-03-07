const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:4200' }))

// Get all customers
app.get('/api/customers', (req, res) => {
    db.query('SELECT * FROM customers', (err, results) => {
        if (err) {
            console.error('Error querying customers:', err)
            res.status(500).json({ error: 'Internal Server Error' })
            return
        }
        res.json(results)
    })
})

// Get a list of tasks with customer information
app.get('/api/tasks', (req, res) => {
    db.query(
        'SELECT tasks.*, customers.name AS customer_name FROM tasks JOIN customers ON tasks.customer_id = customers.id',
        (err, results) => {
            if (err) {
                console.error('Error querying tasks:', err)
                res.status(500).json({ error: 'Internal Server Error' })
                return
            }
            res.json(results)
        }
    )
})

// Add a task
app.post('/api/tasks', (req, res) => {
    const { task_description, customer_id } = req.body
    const task_creation_date = new Date() // Use server's timestamp

    db.query(
        'INSERT INTO tasks (task_description, task_creation_date, customer_id, task_completed) VALUES (?, ?, ?, false)',
        [task_description, task_creation_date, customer_id],
        (err, result) => {
            if (err) {
                console.error('Error adding a task:', err)
                res.status(500).json({ error: 'Internal Server Error' })
                return
            }
            res.status(201).json({
                message: 'Task added successfully',
                taskId: result.insertId
            })
        }
    )
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
