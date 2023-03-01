import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable, {
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
} from "material-react-table";
import { darken } from "@mui/material";

import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, Button, IconButton } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import ButtonGroupTable from "../ButtonGroupTable";

const TableUsers = ({ dataCombinacion, setUserSel, userSel }) => {
  console.log("data combinacion desde dataCombinacion: ", dataCombinacion);
  const [isLoadData, setIsLoadData] = useState(true);
  let data;

  useEffect(() => {
    setTimeout(() => {
      setIsLoadData(false);
    }, 800);
  }, [data]); // <- add empty brackets here

  const columns = useMemo(
    //column definitions...
    () => [
      {
        header: "IMAGEN",
        size: 50, //small column
      },
      {
        accessorKey: "IdUsuarioOK",
        header: "ID",
        size: 50, //small column
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
        size: 50, //small column
      },
    ],
    []
  );

  data = dataCombinacion;

  return (
    <div className="m-2">
      <MaterialReactTable
        columns={columns}
        data={dataCombinacion} //fallback to array if data is undefined
        state={{ isLoading: isLoadData }}
        enableColumnActions={false}
        localization={MRT_Localization_ES}
        enableStickyHeader
        enableStickyFooter
        muiTableContainerProps={{ sx: { maxHeight: "350px" } }}
        // enableRowSelection
        positionToolbarAlertBanner="bottom" //show selected rows count on bottom toolbar
        renderTopToolbarCustomActions={({ table }) => (
          <ButtonGroupTable userSel={userSel} />
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
            setUserSel(dataCombinacion[row.id].Usuario);
          },
          sx: {
            cursor: "pointer", //you might want to change the cursor too when adding an onClick
          },
        })}
      />
    </div>
  );
};

export default TableUsers;
