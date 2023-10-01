import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Container from "@mui/material/Container";
import Styles from '../Styles/form.module.scss';
import {useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import NavBar from '../Components/NavBarLogin.Component '
import {addUser,userExist} from '../utils/ProfileActions';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocally } from '../utils/utils';


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [contacto,setContacto]=useState();
  const [pass,setPass]=useState();
  const navigate= useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(contacto && pass){
        const user=
        {
          contact: contacto,
          password: pass
        }
        if(userExist(user)){
          toast.error("O utilzador já existe no sistema!");
        } 
        else{
          addUser(user);
          toast.success("Conta criada, Bem Vindo!");
          saveLocally(true,"isLogin");
          navigate("/");
        } 
        
    }else{
      toast.error("Preencha todos os Campos!");
    }    
 };

  return (
  <>
    <NavBar/>
    <Container className={Styles.inputContainerLogin} component="main" maxWidth="xs">
    <Typography variant="h6" sx={{ my: 2 }}>
        Criar Conta
      </Typography>
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/icon.png" alt="icon"  className={Styles.iconImage}/>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={(e)=>setContacto(e.target.value)}
            id="number"
            label="Número de celular"
            name="number"
            autoComplete="+258"
            placeholder="+2588XXXXXXXX"
            type="number"
            autoFocus
          />
          <FormControl margin="normal"  required
            fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            onChange={(e)=>setPass(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Criar Conta
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </>  
  );
}