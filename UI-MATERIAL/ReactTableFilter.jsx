import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

export const ReactTableFilter = ({ dataUsersPersons }) => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "id",
        header: "ID",
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
        data={dataUsersPersons}
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
    </div>
  );
};

export default ReactTableFilter;
