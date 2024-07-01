# Gold Rush Backend

## Description

This is a backend system for the "Gold Rush" in-game event, which includes player authentication, event management, score reporting, leaderboards, bucketing logic, scheduling, and rewards distribution.

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/gold-rush-backend.git
   cd gold-rush-backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project directory and add the following environment variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/goldrush
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Start the server
   ```bash
   npm start
   ```

## Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user

### Event
- `GET /api/event` - Get the current event state

### Report
- `POST /api/report` - Report the amount of gold collected

### Leaderboard
- `GET /api/leaderboard` - Get the leaderboard for the current bucket

### Claim
- `POST /api/claim` - Claim rewards for the completed event

## Running Tests

To run tests, use the following command:
```bash
npm test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
