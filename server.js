const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Complete MongoDB Connection String
const mongoURI = "mongodb+srv://ajent03:surendra03@cluster0.vs3zsv9.mongodb.net/mscresh?retryWrites=true&w=majority&appName=Cluster0";

// 👉 YAHAN SE PURANE OPTIONS HATA DIYE HAIN
mongoose.connect(mongoURI)
.then(() => {
    console.log('✅ MongoDB Connected Successfully');
}).catch((err) => {
    console.log('❌ MongoDB Connection Error:', err);
});

const userSchema = new mongoose.Schema({
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 59 } 
});
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            return res.json({ success: false, message: 'User already exists! Please Login.' });
        }
        const newUser = new User({ mobile, password });
        await newUser.save();
        res.json({ success: true, message: 'Registration Successful! ₹59 Bonus Added.', mobile: newUser.mobile, balance: newUser.balance });
    } catch (error) {
        res.json({ success: false, message: 'Server Error!' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const user = await User.findOne({ mobile, password });
        if (user) {
            res.json({ success: true, message: 'Login Successful!', mobile: user.mobile, balance: user.balance });
        } else {
            res.json({ success: false, message: 'Invalid Mobile Number or Password!' });
        }
    } catch (error) {
        res.json({ success: false, message: 'Server Error!' });
    }
});

app.post('/reset-password', async (req, res) => {
    try {
        const { mobile, newPassword } = req.body;
        const user = await User.findOne({ mobile });
        if (user) {
            user.password = newPassword;
            await user.save();
            res.json({ success: true, message: 'Password Updated Successfully!' });
        } else {
            res.json({ success: false, message: 'Mobile number not found!' });
        }
    } catch (error) {
        res.json({ success: false, message: 'Server Error!' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:page', (req, res) => {
    res.sendFile(path.join(__dirname, req.params.page));
});

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('🎮 A user connected to the game:', socket.id);
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5002;
server.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});