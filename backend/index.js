// server.js or app.js
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse form data

// 🔗 Connect to MongoDB
mongoose.connect(
    "mongodb+srv://Akshay:123akshay@cluster0.wt9i8.mongodb.net/Diamond",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => {
        console.log('Connected to MongoDB ✅');
        app.listen(
            PORT,
            () => console.log(`Server running at http://localhost:${PORT}`)
        );
    })
    .catch(() => {
        console.log('Unable to start the server ❌');
    });

// 🗃️ Define User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// ✅ Create Account Route with MongoDB Save
app.post('/api/create-account', async (req, res) => {
    const { name, password } = req.body;
    if (name && password) {
        try {
            const newUser = new User({ name, password });
            await newUser.save();
            res.status(200).json({ status: 1, msg: "Account created successfully!" });
        } catch (error) {
            console.error("Database save error:", error);
            res.status(500).json({ status: 0, msg: "Database error!" });
        }
    } else {
        res.status(400).json({ status: 0, msg: "Invalid input data!" });
    }
});

// 🚪 ✅ Login Route
app.post('/api/login-account', async (req, res) => {
    const { name, password } = req.body;
    if (name && password) {
        try {
            const user = await User.findOne({ name, password });
            if (user) {
                res.status(200).json({ status: 1, msg: "Login successful!", user });
            } else {
                res.status(400).json({ status: 0, msg: "Invalid credentials!" });
            }
        } catch (error) {
            console.error("Database query error:", error);
            res.status(500).json({ status: 0, msg: "Database error!" });
        }
    } else {
        res.status(400).json({ status: 0, msg: "Invalid input data!" });
    }
});

// 🛠️ Catch-All Route for Undefined Endpoints
app.use((req, res) => {
    res.status(404).json({ msg: "Endpoint not found!" });
});
