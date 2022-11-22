import {
  Box,
  Button,
  Container,
  DialogActions,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../api'

export default function Vehicle() {
  const location = useLocation()

  const navigate = useNavigate()

  const { data } = location.state

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const type = formData.get('type')
    const licensePlate = formData.get('license_plate')
    const chassis = formData.get('chassis')
    const renavam = formData.get('renavam')
    const year = formData.get('year')
    const category = formData.get('category')
    const color = formData.get('color')
    const steeringWheel = formData.get('steeringWheel')
    const username = formData.get('username')
    const motor = formData.get('motor')

    api
      .patch(`vehicle/${data.id}`, {
        type,
        licensePlate,
        chassis,
        renavam,
        year,
        category,
        color,
        steeringWheel,
        username,
        motor,
      })
      .then(() => {
        navigate('/')
      })
      .catch(e => {
        console.log(e)
      })
      .finally()
  }

  const handleDelete = () => {
    api
      .delete(`vehicle/${data.id}`)
      .then(() => {
        navigate('/')
      })
      .catch(e => {
        console.log(e)
      })
      .finally()
  }

  return (
    <Container>
      <Box sx={{ mb: 3 }}>
        <Typography variant='h4'>Veículo</Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel>Tipo de veiculo</InputLabel>
              <Select
                name='type'
                label='Tipo de veiculo'
                defaultValue={data.type}
              >
                <MenuItem value='car'>Carro</MenuItem>
                <MenuItem value='motorcycle'>Moto</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Placa'
              defaultValue={data.license_plate}
              name='license_plate'
              required
              fullWidth
            />
            <TextField
              label='Chassi'
              defaultValue={data.chassis}
              name='chassis'
              required
              fullWidth
            />
            <TextField
              label='Renavam'
              defaultValue={data.renavam}
              name='renavam'
              required
              fullWidth
            />
            <TextField
              label='Ano'
              defaultValue={data.year}
              name='year'
              type='number'
              required
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select
                name='category'
                label='Categoria'
                defaultValue={data.category}
              >
                <MenuItem value='basic'>Básico</MenuItem>
                <MenuItem value='intermediary'>Intermediário</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Cor'
              name='color'
              defaultValue={data.color}
              required
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Direção</InputLabel>
              <Select
                name='steeringWheel'
                label='Direção'
                defaultValue={data.steering_wheel}
              >
                <MenuItem value='hydraulic'>Hidraulica</MenuItem>
                <MenuItem value='manual'>Manual</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Usuário'
              name='username'
              defaultValue={data.username}
              required
              fullWidth
            />
            <TextField
              label='Motor'
              name='motor'
              defaultValue={data.motor}
              required
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            color='secondary'
            fullWidth
            onClick={() => navigate('/')}
          >
            Cancelar
          </Button>
          <Button variant='contained' type='submit' fullWidth>
            Atualizar Veículo
          </Button>
          <Button
            color='error'
            variant='contained'
            onClick={handleDelete}
            fullWidth
          >
            Apagar Veículo
          </Button>
        </DialogActions>
      </Box>
    </Container>
  )
}
