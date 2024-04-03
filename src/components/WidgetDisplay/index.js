import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const DisplayWidget = ({ widget={}, onDeleteWidget }) => {
  const { description, name, price } = widget
  const navigate = useNavigate();
  return (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography component="div" gutterBottom variant="h4">
              {name}
            </Typography>
            <Typography component="div" gutterBottom variant="h5">
              {price}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
            <Button variant="outlined" color="error" onClick={(name)=>onDeleteWidget(name)}>
              Eliminar
            </Button>
            <Button variant="outlined" color="secondary" onClick={()=>navigate(`/EditWidget/${JSON.stringify(widget)}`)}>
              Editar
            </Button>
          </Stack>
        </CardContent>
      </Card>
  </Grid>)
}

export default DisplayWidget
