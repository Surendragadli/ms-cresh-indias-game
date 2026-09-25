const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
// Saari HTML/CSS files ko allow karne ke liye
app.use(express.static(__dirname));

// Main link par index.html dikhane ke liye
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(cors());
app.use(express.json()); 

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});

// ==========================================
// 1. MONGODB CONNECTION 
// ==========================================
const MONGO_URL = "mongodb://ajent03:surendra03@ac-9vyil4w-shard-00-00.vs3zsv9.mongodb.net:27017,ac-9vyil4w-shard-00-01.vs3zsv9.mongodb.net:27017,ac-9vyil4w-shard-00-02.vs3zsv9.mongodb.net:27017/?ssl=true&replicaSet=atlas-n4c1c2-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(MONGO_URL)
    .then(() => console.log("🟢 MongoDB Database successfully connect ho gaya!"))
    .catch((err) => console.log("🔴 Database connection failed:", err));


// ==========================================
// 2. USER STRUCTURE (Data kaise save hoga)
// ==========================================
const userSchema = new mongoose.Schema({
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 59.00 } // ₹59 Bonus
});
const User = mongoose.model('User', userSchema);


// ==========================================
// 3. REGISTRATION API 
// ==========================================
app.post('/register', async (req, res) => {
    try {
        const { mobile, password } = req.body;

        const existingUser = await User.findOne({ mobile: mobile });
        if (existingUser) {
            return res.json({ success: false, message: "Ye mobile number pehle se registered hai! Kripya Login karein." });
        }

        const newUser = new User({
            mobile: mobile,
            password: password,
            balance: 59.00
        });
        await newUser.save(); 

        console.log("🟢 Naya User Save Hua! Number: " + mobile);
        return res.json({ success: true, message: "Registration Successful! Aapko ₹59 ka bonus mila hai." });
        
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Server error, kripya thodi der baad try karein." });
    }
});


// ==========================================
// 4. LOGIN API
// ==========================================
app.post('/login', async (req, res) => {
    try {
        const { mobile, password } = req.body;

        const user = await User.findOne({ mobile: mobile });
        if (!user) {
            return res.json({ success: false, message: "Ye mobile number registered nahi hai! Pehle Register karein." });
        }

        if (user.password !== password) {
            return res.json({ success: false, message: "Galat password! Kripya sahi password dalein." });
        }

        console.log("🟢 User Successfully Login Ho Gaya! Number: " + mobile);
        return res.json({ 
            success: true, 
            message: "Login Successful!", 
            balance: user.balance,
            mobile: user.mobile 
        });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Server error, kripya thodi der baad try karein." });
    }
});


// ==========================================
// 4.5 RESET PASSWORD API (Naya Password Set Karega)
// ==========================================
app.post('/reset-password', async (req, res) => {
    try {
        const { mobile, newPassword } = req.body;

        // Check karein ki number database mein hai ya nahi
        const user = await User.findOne({ mobile: mobile });
        if (!user) {
            return res.json({ success: false, message: "Ye mobile number registered nahi hai! Pehle account banayein." });
        }

        // Agar user mil gaya toh uska password badal do
        user.password = newPassword;
        await user.save();

        console.log("🟢 User ne Password Badla! Number: " + mobile);
        return res.json({ success: true, message: "Aapka naya password set ho gaya hai! Ab naye password se login karein." });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Server error, kripya thodi der baad try karein." });
    }
});

// ==========================================
// 5. SOCKET.IO (Live Game Engine)
// ==========================================
io.on('connection', (socket) => {
    console.log('🟢 Ek user game mein aaya! ID: ' + socket.id);
    socket.on('disconnect', () => {
        console.log('🔴 User game se chala gaya! ID: ' + socket.id);
    });
});


// ==========================================
// SERVER START (Port 5002)
// ==========================================
const PORT = 5002;
server.listen(PORT, () => {
    console.log(`🚀 Ms Cresh Backend Port ${PORT} par shuru ho gaya hai!`);
});