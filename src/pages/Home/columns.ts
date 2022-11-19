import { GridColDef } from '@mui/x-data-grid'

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'type',
    headerName: 'Tipo de veiculo',
  },
  {
    field: 'license_plate',
    headerName: 'Placa',
  },
  {
    field: 'chassis',
    headerName: 'Chassi',
  },
  {
    field: 'renavam',
    headerName: 'Renavam',
  },
  {
    field: 'year',
    headerName: 'Ano',
  },
  {
    field: 'category',
    headerName: 'Categoria',
  },
  {
    field: 'color',
    headerName: 'Cor',
  },
  {
    field: 'steering_wheel',
    headerName: 'Direção',
  },
  {
    field: 'username',
    headerName: 'Usuário',
  },
  {
    field: 'motor',
    headerName: 'Motor',
  },
  {
    field: 'created_at',
    headerName: 'Data Criação',
  },
]
