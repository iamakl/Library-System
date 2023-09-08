import React, { useState } from 'react';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Implement registration logic here (e.g., using Firebase Authentication)
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
