# Onboarding App with User Form

## Overview
This project is a simple onboarding application using Express, EJS, and Bootstrap. It provides a boilerplate for basic features like user inputs and a button. 
This app is designed to accompany this [onboarding guide](https://trustly.notion.site/Product-Tech-Workshop-1376fac3e0c2804b8881d26a50e20208). If you haven't read that, start there.

## Features
- JavaScript-based form handling with dynamic feedback.
- Integration with a backend API for storing and updating user data.
- Track progress, such as GitHub account setup and webhook testing.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Backend API Server**: Requires the backend server (`feedback_api_server`) to track and store progress.
- **Environment File (.env)**: Create a `.env` file to store environment variables such as the backend API URL.
  - `API_BASE_URL`: The base URL of the backend API.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd onboarding_app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Create the .env File**:
   Create a `.env` file in the root directory with the following variable:
   ```
   API_BASE_URL=http://localhost:3000
   ```

4. **Run the App**:
   ```bash
   npm start
   ```

5. **Access the App**:
   The app should be running at `http://localhost:8080`.

## Form Submission Flow
- The app includes a form where users input their `User ID`, `ngrok URL`, and `time` in seconds.
- Upon submission, JavaScript makes an API call to the backend to schedule a webhook.
- Users will receive dynamic feedback directly in the app, indicating whether the webhook was scheduled successfully.

## Pages and Functionality

### Main Page (`/`)
- **Description**: Displays a simple welcome page with a form to collect user details.
- **Fields**:
  - `User ID`: Enter the unique user ID provided during onboarding.
  - `ngrok URL`: The ngrok URL to test webhook delivery.
  - `Time (seconds)`: Delay in seconds for when the webhook will be delivered.
- **Button**: `Schedule Webhook` - Sends data to the backend API to schedule the webhook.

### About Page (`/about`)
- **Description**: A simple page to describe the purpose of the onboarding app.

## Technologies Used
- **Node.js & Express**: Backend server to serve views and handle routing.
- **EJS**: Templating engine for rendering dynamic HTML views.
- **Bootstrap**: For styling the user interface and form components.
- **JavaScript**: Handles form submission and feedback for users.

## Development Notes
- The form submits user data to the backend API (`feedback_api_server`) using JavaScript `fetch()`.
- Make sure to start both the backend server and this onboarding app concurrently for everything to work smoothly.
- This app is intended to guide users through a setup process, including verifying GitHub usernames and configuring webhook integrations.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contributions
Contributions are welcome! Feel free to fork this repository and create pull requests to improve the onboarding experience.

If you have any questions or encounter issues, please create an issue on the repository.

