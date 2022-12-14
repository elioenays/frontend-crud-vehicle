import { Button, Card, Container, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import CreateVehicle from '../../components/createVehicle'
import { columns } from './columns'

export default function Home() {
  const [data, setData] = useState([])

  const [openCreateVehicle, setOpenCreateVehicle] = useState(false)

  const navigate = useNavigate()

  const handleOpenCreateVehicle = () => {
    setOpenCreateVehicle(true)
  }

  const handleCloseCreateVehicle = () => {
    setOpenCreateVehicle(false)
    window.location.reload()
  }

  useEffect(() => {
    api.get('vehicle').then(response => {
      setData(response.data)
    })
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
          <Button variant='contained' onClick={handleOpenCreateVehicle}>
            Criar Veículo
          </Button>
        </Typography>
      </Stack>
      <Card>
        <CreateVehicle
          open={openCreateVehicle}
          handleClose={handleCloseCreateVehicle}
        />
        <DataGrid
          loading={!data.length}
          autoHeight
          columns={columns}
          rows={data}
          onRowClick={params => {
            navigate('/vehicle/' + params.row.id, {
              state: { data: params.row },
            })
          }}
        />
      </Card>
    </Container>
  )
}
