import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import React from 'react'
import api from '../../api'

interface Props {
  handleClose: () => void
  open: boolean
}

export default function CreateVehicle(props: Props) {
  const { handleClose, open, ...other } = props

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const type = formData.get('type')
    const license_plate = formData.get('license_plate')
    const chassis = formData.get('chassis')
    const renavam = formData.get('renavam')
    const year = formData.get('year')
    const category = formData.get('category')
    const color = formData.get('color')
    const steeringWheel = formData.get('steeringWheel')
    const username = formData.get('username')
    const motor = formData.get('motor')

    api
      .post('vehicle', {
        type,
        license_plate,
        chassis,
        renavam,
        year,
        category,
        color,
        steeringWheel,
        username,
        motor,
      })
      .then(response => {
        handleClose()
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Dialog
      open={open}
      maxWidth='md'
      fullWidth
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        Criar Veículo
        {open ? (
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Box component='form' onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel>Tipo de veiculo</InputLabel>
              <Select name='type' label='Tipo de veiculo' value={'car'}>
                <MenuItem value='car'>Carro</MenuItem>
                <MenuItem value='motorcycle'>Moto</MenuItem>
              </Select>
            </FormControl>
            <TextField label='Placa' name='license_plate' required fullWidth />
            <TextField label='Chassi' name='chassis' required fullWidth />
            <TextField label='Renavam' name='renavam' required fullWidth />
            <TextField
              label='Ano'
              name='year'
              type='number'
              required
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select name='category' label='Categoria' value={'basic'}>
                <MenuItem value='basic'>Básico</MenuItem>
                <MenuItem value='intermediary'>Intermediário</MenuItem>
              </Select>
            </FormControl>
            <TextField label='Cor' name='color' required fullWidth />
            <FormControl fullWidth>
              <InputLabel>Direção</InputLabel>
              <Select name='steeringWheel' label='Direção' value={'hydraulic'}>
                <MenuItem value='hydraulic'>Hidraulica</MenuItem>
                <MenuItem value='manual'>Manual</MenuItem>
              </Select>
            </FormControl>
            <TextField label='Usuário' name='username' required fullWidth />
            <TextField label='Motor' name='motor' required fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' type='submit' fullWidth>
            Criar Veículo
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  )
}
