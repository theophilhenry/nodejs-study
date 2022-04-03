const express = require('express')
const bcrypt = require('bcrypt')

const app = express()
app.use(express.json()) // Lets app able to accept JSON

const users = []


app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        console.log(req.body.password)

        // const salt = await bcrypt.genSalt() // This is optional, you can instead replace the second param of hash
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch (error) {
        console.log(error.message)
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        res.status(400).send("Cannot find user")
    }

    try {
        // Use bcrypt compare to prevent timing attack.
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send("Success")
        }
        else{
            res.send("Not Allowed")
        }
    } catch (error) {
        res.status(500).send()
    }
})

app.listen(3000)