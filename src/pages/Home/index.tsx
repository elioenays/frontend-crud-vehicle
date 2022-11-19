import { Button, Card, Container, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import api from '../../api'
import CreateVehicle from '../../components/createVehicle'
import { columns } from './columns'

export default function Home() {
  const [data, setData] = useState([])

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const getVehicles = async () => {
      const { data } = await api.get('vehicle')
      setData(data)
    }
    getVehicles()
  }, [])

  return (
    <Container>
      <Stack
        mb={5}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='h4'>Veículos</Typography>
        <Typography>
          <Button variant='contained' onClick={handleOpen}>
            Criar Veículo
          </Button>
        </Typography>
      </Stack>
      <Card>
        <CreateVehicle open={open} handleClose={handleClose} />
        <DataGrid autoHeight columns={columns} rows={data} />
      </Card>
    </Container>
  )
}
