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

interface Props {
  handleClose: () => void
  open: boolean
}

export default function CreateVehicle(props: Props) {
  const { handleClose, open, ...other } = props

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      type: data.get('type'),
      license_plate: data.get('license_plate'),
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
              <Select name='type' label='Tipo de veiculo'>
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
              <Select name='category' label='Tipo de veiculo'>
                <MenuItem value='basic'>Básico</MenuItem>
                <MenuItem value='intermediary'>Intermediário</MenuItem>
              </Select>
            </FormControl>
            <TextField label='Cor' name='color' required fullWidth />
            <FormControl fullWidth>
              <InputLabel>Direção</InputLabel>
              <Select name='steeringWheel' label='Tipo de veiculo'>
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
