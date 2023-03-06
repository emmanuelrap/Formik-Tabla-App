import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Nombre',
    headerName: 'NOMBRE',
    width: 150,
    editable: true,
  },
  {
    field: 'Usuario',
    headerName: 'USUARIO',
    width: 150,
    editable: true,
  },
  {
    field: 'Expira',
    headerName: '¿EXPIRA?',
    width: 90,
    editable: true,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo({dataUsersPersons}) {
  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={dataUsersPersons}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
        density='compact'
        hideFooterSelectedRowCount
        showColumnRightBorder={false}
        
        
       
      />
    </Box>
  );
}