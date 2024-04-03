//import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import WidgetDisplay  from '../WidgetDisplay';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useForm } from '../../hooks/useForm';


const WidgetList = ({ widgets = [], onDeleteWidget, onSearchWidget, onGetAll }) => {

  const navigate = useNavigate();

  const { name, onInputChange, onResetForm } = useForm({
    name: ''
});

const onFormSubmit = (event) => {
  event.preventDefault();
  if (name.length < 3 || name.length > 100){
      alert("There's not a widget with less than 3 characters or over 100");
      return;
  } 

  onSearchWidget(name);

  onResetForm();
}

  return (
    <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
      <form onSubmit={onFormSubmit}>
      <TextField
                    label="Search by name"
                    type='text'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    inputProps={{ minLength: 5, maxLength: 1000 }}
                    required
                    fullWidth
                    margin="normal"
                />
      </form>
      <Typography sx={{ textAlign: 'center' }} variant="h3">
        List of widgets:
      </Typography>
      <Button variant="outlined" color="secondary" onClick={()=>navigate("/addWidget")}>
        Add widget
      </Button>
      <Grid container justifyContent="center" spacing={4} sx={{ paddingRight: 4, width: '100%' }}>
        {
        widgets.map((current, index) => (<WidgetDisplay 
          key={index} 
          widget={current} 
          onDeleteWidget={()=>onDeleteWidget(current.name)} 
          
          />))
        }
      </Grid>

      <Button variant="outlined" color="secondary" onClick={onGetAll}>
                Show all
            </Button>
    </Stack>
  )
}

export default WidgetList
