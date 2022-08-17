import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Alert, FormControl } from '@mui/material';

import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { register } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      if ((username || email || password || confirmPassword) !== '') {
        await register(email, password, username);
        navigate('/');
      } else {
        setError('Kindly fill in the empty fields');
      }
    } catch {
      setError('Failed to create user');
    }
    setLoading(false);
  };

  const paperStyle = {
    padding: 20,
    height: '100%',
    width: 350,
    margin: '20px auto',
  };
  const btnstyle = { margin: '8px 0' };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign up</h2>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            id="username"
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            type="text"
            fullWidth
            required
            value={username}
            ref={usernameRef}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            label="Email"
            placeholder="Enter email"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={email}
            sx={{ marginTop: '10px' }}
            ref={emailRef}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            value={password}
            sx={{ marginTop: '10px' }}
            fullWidth
            required
            ref={passwordRef}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            label="Confirm Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            sx={{ marginTop: '10px' }}
            fullWidth
            required
            ref={confirmPasswordRef}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleSubmit}
            disabled={loading}>
            Sign up
          </Button>

          <Typography>
            {' '}
            Already have an account ?<Link href="/login">Login</Link>
          </Typography>
        </Paper>
      </FormControl>
    </div>
  );
};

export default Signup;
