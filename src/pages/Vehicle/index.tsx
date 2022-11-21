import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api'

export default function Vehicle() {
  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get('vehicle/' + id)
      .then(({ data }) => {
        setData(data)
      })
      .catch(e => {
        console.log(e.message)
      })
      .finally()
  }, [id])

  return (
    <Container>
      <Box sx={{ mb: 3 }}>
        <Typography variant='h4'>Veículo</Typography>
      </Box>
      <Box component='form'>
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
          <TextField label='Ano' name='year' type='number' required fullWidth />
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
          <Button variant='contained' type='submit' fullWidth>
            Atualizar Veículo
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}
