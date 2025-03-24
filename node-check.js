// Script to send Node and npm versions to the /user/:id/node-check API
require('dotenv').config();
const axios = require('axios');
const { execSync } = require('child_process');

// Get the user ID from command line arguments
const userId = process.argv[2];

if (!userId) {
    console.error('Please provide a User ID as an argument. Example: npm run node-check -- 123');
    process.exit(1);
}

(async () => {
    try {
        // Get Node and npm versions
        const nodeVersion = execSync('node -v').toString().trim();
        const npmVersion = execSync('npm -v').toString().trim();

        // Prepare API endpoint and payload
        const apiUrl = `${process.env.API_BASE_URL}/users/${userId}/node-check`;
        const payload = {
            nodeVersion,
            npmVersion
        };

        // Make POST request to the API
        const response = await axios.post(apiUrl, payload);
        console.log(response.data);
    } catch (error) {
        console.error('Error sending Node and npm versions:', error.message);
    }
})();
