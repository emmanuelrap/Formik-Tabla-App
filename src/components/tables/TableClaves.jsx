import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable, {
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
} from "material-react-table";
import { darken } from "@mui/material";

import { MRT_Localization_ES } from "material-react-table/locales/es";
import ButtonGroupTable from "../ButtonGroupTable";

const TableClaves = ({
  dataCombinacion,
  idSeleccionado,
  setOpenModalAddUser,
}) => {
  let data = dataCombinacion[idSeleccionado].cat_usuarios_estatus;

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
        accessorKey: "IdTipoGenEstatusOK",
        header: "ID ESTATUS",
        size: 50, //small column
      },
      {
        accessorKey: "TipoEstatus",
        header: "TIPO",
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
        enableColumnActions={false}
        localization={MRT_Localization_ES}
        enableStickyHeader
        enableStickyFooter
        initialState={{ density: "compact", showGlobalFilter: true }}
        muiTableContainerProps={{
          sx: { maxHeight: "300px", minHeight: "300px", minWidth: "1000px" },
        }}
        // enableRowSelection
        positionToolbarAlertBanner="bottom" //show selected rows count on bottom toolbar
        renderTopToolbarCustomActions={({ table }) => (
          <ButtonGroupTable setOpenModalAddUser={setOpenModalAddUser} />
        )}
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

export default TableClaves;
