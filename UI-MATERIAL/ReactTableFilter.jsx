import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

export const ReactTableFilter = ({ dataCombinacion }) => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "idUsuario",
        header: "ID USUARIO",
      },
      {
        accessorKey: "Nombre",
        header: "NOMBRE",
      },
      {
        accessorKey: "Usuario",
        header: "USUARIO",
      },
      {
        accessorKey: "Expira",
        header: "¿EXPIRA?",
      },
    ],
    []
    //end
  );

  return (
    <div className="m-1">
      <MaterialReactTable
        columns={columns}
        data={dataCombinacion}
        enableColumnActions={false}
        //   enableColumnFilters={true}
        //   enablePagination={true}
        //   enableSorting={true}
        //   enableBottomToolbar={true}
        //   enableTopToolbar={true}
        //   muiTableBodyRowProps={{ hover: true }}

        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) => {
            console.info(event, row.id);
          },
          sx: {
            cursor: "pointer", //you might want to change the cursor too when adding an onClick
          },
        })}
      />
      renderTopToolbarCustomActions=
      {({ table }) => (
        <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
          <Button
            color="secondary"
            onClick={() => {
              alert("Create New Account");
            }}
            variant="contained"
          >
            Create Account
          </Button>
          <Button
            color="error"
            disabled={!table.getIsSomeRowsSelected()}
            onClick={() => {
              alert("Delete Selected Accounts");
            }}
            variant="contained"
          >
            Delete Selected Accounts
          </Button>
        </Box>
      )}
    </div>
  );
};

export default ReactTableFilter;
