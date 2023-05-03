import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Square } from '@mui/icons-material';

export function Pay() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [invoice, setInvoice]=useState([])

  const navigate = useNavigate();
  const handlePay=(e)=>{
    e.preventDefault()
    navigate(`/`)
  }
  const handleFindAnotherInvoice=(e)=>{
    e.preventDefault()
    navigate(`/`)
  }

  useEffect(()=>{
    setInvoice([{
        id:12,
        invoiceNumber:"12",
        dateInvoice:"1222222"
    }])
  },[])
  return (
    <Container>
    <h1>Invoice Detail</h1>
    <Paper elevation={3} style={paperstyle}>
    {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={invoice.id}>
          invoiceNumber:{"  "+invoice.invoiceNumber}<br/>
          invoiceNumber:{"  "+invoice.invoiceNumber}<br/>
          <Button variant="contained" onClick={handlePay}>Pay</Button>
        </Paper>
        
    }
    <Button variant="contained" size='large' onClick={handleFindAnotherInvoice}>Find Another Invoice</Button>
    </Paper>
    </Container>
  );
}


export function FinanceHome() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [referenceCode,setReferenceCode]=useState('')

  const navigate = useNavigate();

  const handleFindInvoice=(e)=>{
    e.preventDefault()
    navigate(`/invoice`)
  }

  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Dashboard</u></h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Paper square style={paperstyle} >
      <TextField id="outlined-basic" label="Reference" variant="outlined" fullWidth 
      value={referenceCode}
      onChange={(e)=>setReferenceCode(e.target.value)}
      />
      <Button variant="contained" size='large' onClick={handleFindInvoice}>Find Invoice</Button>
      </Paper>
    </Box>
    </Paper>
    </Container>
  );
}

