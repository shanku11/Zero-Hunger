const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/donationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const donationSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    message: String,
});

const Donation = mongoose.model('Donation', donationSchema);

// Route to handle donation submission
app.post('/donate', async (req, res) => {
    const donation = new Donation(req.body);
    try {
        await donation.save();
        res.status(201).send('Donation submitted successfully!');
    } catch (error) {
        res.status(400).send('Error saving donation: ' + error.message);
    }
});

// Route to get all donations
app.get('/donations', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).send('Error retrieving donations: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});
