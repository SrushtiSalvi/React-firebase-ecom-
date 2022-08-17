import React, { useState } from 'react';
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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      if ((email || password) !== '') {
        await login(email, password);
      } else {
        setError('Kindly fill in the empty fields');
      }
      if (localStorage.getItem('access-token')) {
        navigate('/');
      } else {
        setError('User not found');
        setEmail('');
        setPassword('');
      }
    } catch {
      setError('Failed to login');
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <FormControl>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Login</h2>
          </Grid>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Email"
            placeholder="Enter email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            sx={{ marginTop: '10px' }}
            fullWidth
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
            onClick={handleSubmit}
            fullWidth>
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {' '}
            Do you have an account ?<Link href="/register">Sign Up</Link>
          </Typography>
        </Paper>
      </FormControl>
    </div>
  );
};

export default Login;
