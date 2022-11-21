import { GridColumns, GridValueFormatterParams } from '@mui/x-data-grid'
import { format } from 'date-fns'

export const columns: GridColumns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 10,
  },
  {
    field: 'type',
    headerName: 'Tipo de veiculo',
    valueFormatter: ({ value }) => {
      if (value === 'car') {
        return 'Carro'
      }
      if (value === 'motorcycle') {
        return 'Moto'
      }
    },
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
    valueFormatter: ({ value }) => {
      if (value === 'basic') {
        return 'Básico'
      }
      if (value === 'intermediary') {
        return 'Intermediário'
      }
    },
  },
  {
    field: 'color',
    headerName: 'Cor',
  },
  {
    field: 'steering_wheel',
    headerName: 'Direção',
    valueFormatter: ({ value }) => {
      if (value === 'hydraulic') {
        return 'Hidráulica'
      }
      if (value === 'manual') {
        return 'Manual'
      }
    },
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
    valueFormatter({ value }: GridValueFormatterParams<Date>) {
      const date = format(new Date(value), 'dd/MM/yyyy')
      return date
    },
  },
]
