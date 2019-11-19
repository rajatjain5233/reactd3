import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class Contact extends Component{
  state={
    name:"",
    email:"",
    password:"",
    phone:"",
    address:"",
    error_name:false,
    error_email:false,
    error_password:false,
    error_phone:false,
    error_address:false,
    invalid_email:false,
    showDetails:true


    
  }
  submit=()=>{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.state.name==""){
      this.setState({error_name:true})
    }
    if(this.state.email==""){
      this.setState({error_email:true})
    }
    if(this.state.password==""){
      this.setState({error_password:true})
    }
    if(this.state.phone==""){
      this.setState({error_phone:true})
    }
    if(this.state.address==""){
      this.setState({error_address:true})
    }
    if(!re.test(this.state.email)){
      this.setState({invalid_email:true})
    }
    this.setState({showDetails:false})

  }

  
  handleChange = text =>(event) => {
    
      this.setState({
        error_name:false,
        error_email:false,
        error_password:false,
        error_phone:false,
        error_address:false,
        invalid_email:false

      })

    this.setState({ [text]: event.target.value });

  };
  showDetailspage = ()=>{
      this.setState({
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        error_name:false,
        error_email:false,
        error_password:false,
        error_phone:false,
        error_address:false,
        invalid_email:false,
        showDetails:true
      })
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        {
          this.state.showDetails?
          (<div>
              
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
             
                <Typography variant="h4" gutterBottom>
                   Sign Up form
                </Typography>
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  error={this.state.error_name}
                  helperText={this.state.error_name?"Please type your name":null}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="outlined"
                />
              
                <TextField
                  id="standard-email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  error={this.state.error_email||this.state.invalid_email}
                  helperText={(this.state.error_email?"Email cannot be empty":null)||
                              (this.state.invalid_email?"Invalid Email":null)}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  variant="outlined"
                />
                 <TextField
                  id="outlined-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  value={this.state.password}
                  error={this.state.error_password}
                  helperText={this.state.error_password?"Password cannot be empty":null}
                  onChange={this.handleChange('password')}
                  variant="outlined"
                />
                <TextField
                  id="outlined-phone-input"
                  label="Phone"
                  className={classes.textField}
                  type="phone"
                  margin="normal"
                  value={this.state.phone}
                  error={this.state.error_phone}
                  helperText={this.state.error_phone?"Phone cannot be empty":null}
                  onChange={this.handleChange('phone')}
                  variant="outlined"
                />
                <TextField
                  id="outlined-address-input"
                  label="Address"
                  className={classes.textField}
                  type="address"
                  margin="normal"
                  value={this.state.address}
                  error={this.state.error_address}
                  helperText={this.state.error_address?"Address cannot be empty":null}
                  onChange={this.handleChange('address')}
                  variant="outlined"
                />
                <Button onClick={this.submit} variant="contained" color="primary" className={classes.button}>
                  Submit
                </Button>
              
              </Grid>

            
          </div>):
        (
          <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
              <div>
                 Hi {this.state.name} how are you lets meet and 
                 discuss some basic concepts of react
              </div>
              <Button onClick={this.showDetailspage} variant="contained" color="primary" className={classes.button}>
                Go to sign up page again
              </Button>
            </Grid>  
          </div>

        )
      }
        
      </div>
      
    );

  } 
  
}

export default withStyles(styles)(Contact);

