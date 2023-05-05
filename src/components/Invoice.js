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
  const [invoice, setInvoice]=useState({})

  const navigate = useNavigate();
  const handlePay=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:8081/invoice/pay/${localStorage.getItem('reference')}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
    }).then(async (result)=>{
      if(result.status==200){
          alert('Successfully PAID Invoice : '+localStorage.getItem('reference'));
          navigate(`/`)
      } else {
        alert('Finance service is down, try again later.');
        return;
      }
    })
  }
  const handleFindAnotherInvoice=(e)=>{
    e.preventDefault()
    navigate(`/`)
  }

  useEffect(()=>{
    fetch(`http://localhost:8081/invoice/${localStorage.getItem('reference')}`)
    .then(res=>res.json())
    .then(async (result)=>{
      toString(result);
      setInvoice(result);
    }
    )
  },[])
  return (
    <Container>
    <h1>Invoice Detail</h1>
    <Paper elevation={3} style={paperstyle}>
    {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={invoice.id}>
          Reference:{"  "+invoice.reference}<br/>
          Amount:{"  "+invoice.amount}<br/>
          Due Date:{"  "+invoice.dueDate}<br/>
          Status:{"  "+invoice.Status}<br/>
          Type:{"  "+invoice.types}<br/>
          <Button disabled={invoice.Status=="paid"} variant="contained" onClick={handlePay}>Pay</Button>
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
    localStorage.setItem('reference',referenceCode);
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
      <TextField id="outlined-basic" label="Reference Code" variant="outlined" fullWidth 
      value={referenceCode}
      onChange={(e)=>setReferenceCode(e.target.value)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button variant="contained" size='large' onClick={handleFindInvoice}>Find Invoice</Button>
      </Paper>
    </Box>
    </Paper>
    </Container>
  );
}

