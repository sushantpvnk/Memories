import React,{useState} from 'react'
import { Avatar,Button,Paper,Grid, Typography, Container} from '@material-ui/core';
import useStyle from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import Input from './Input';
const Auth = () => {
    const classes = useStyle();
    const isSignup = false;
    const [showPassword,setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword );
    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () => {

    };


  return (
    <Container component="main" maxWidth = "xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>

            </Avatar>
            <Typography variant='h5'> {isSignup ? "Sign Up" : "Sign In"} </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='firstName' label = "First Name" handleChange = {handleChange} autoFocus half/>
                                <Input name='firstName' label = "First Name" handleChange = {handleChange} half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                    {isSignup ? "Sign Up" : " Sign In"}
                </Button>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? "Already have an acoount? Sign In" : "Don't have an Account ? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>

            </form>
        
        
        </Paper>
    </Container>
  )
}

export default Auth

// import React from 'react'

// const Auth = () => {

//     const state  = null;
//   return (
//     <div>Auth</div>
//   )
// }

// export default Auth