import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { darken } from "@mui/material";

import { MRT_Localization_ES } from "material-react-table/locales/es";
import ButtonGroupTable from "../ButtonGroupTable";

const TableProcesos = ({ dataCombinacion, idSeleccionado }) => {
  let data = dataCombinacion[idSeleccionado].cat_usuarios_roles;

  //   const [isLoadData, setIsLoadData] = useState(true);
  //   let data;

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoadData(false);
  //     }, 800);
  //   }, [data]); // <- add empty brackets here

  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "IdInstitutoOK",
        header: "IdInstitutoOK",
        size: 50, //small column
      },
      {
        accessorKey: "IdNegocioOK",
        header: "IdNegocioOK",
        size: 50, //small column
      },
      {
        accessorKey: "IdRolOK",
        header: "IdNegocioOK",
        size: 50, //small column
      },
      {
        accessorKey: "Principal",
        header: "Principal",
        size: 50, //small column
      },
      {
        accessorKey: "detail_row.FechaReg",
        header: "Fecha de Registro",
        size: 100, //small column
      },
      {
        accessorKey: "detail_row.UsuarioReg",
        header: "Usuario Reg",
      },
    ],
    []
  );

  return (
    <div className="m-2">
      <MaterialReactTable
        columns={columns}
        data={data}
        // state={{ isLoading: isLoadData }}
        initialState={{ density: "compact", showGlobalFilter: true }}
        enableColumnActions={false}
        localization={MRT_Localization_ES}
        enableStickyHeader
        enableStickyFooter
        muiTableContainerProps={{
          sx: { maxHeight: "300px", minHeight: "300px", minWidth: "1000px" },
        }}
        // enableRowSelection
        positionToolbarAlertBanner="bottom" //show selected rows count on bottom toolbar
        renderTopToolbarCustomActions={({ table }) => <ButtonGroupTable />}
        muiTableBodyProps={{
          sx: (theme) => ({
            "& tr:nth-of-type(odd)": {
              backgroundColor: darken(theme.palette.background.default, 0.1),
            },
          }),
        }}
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

export default TableProcesos;
