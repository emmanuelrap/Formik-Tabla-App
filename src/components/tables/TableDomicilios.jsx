import React, { useMemo, useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { darken } from "@mui/material";

import { MRT_Localization_ES } from "material-react-table/locales/es";
import ButtonGroupTable from "../ButtonGroupTable";

const TableDomicilios = ({ dataCombinacion, idSeleccionado }) => {
  let data = dataCombinacion[idSeleccionado].cat_personas_domicilios;

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
        accessorKey: "CalleNumero",
        header: "Calle y Número",
        size: 100, //small column
      },
      {
        accessorKey: "Colonia",
        header: "Colonia",
        size: 50, //small column
      },
      {
        accessorKey: "EntreCalle1",
        header: "Entre Calle 1",
        size: 50, //small column
      },
      {
        accessorKey: "EntreCalle2",
        header: "Entre Calle 2",
        size: 50, //small column
      },
      {
        accessorKey: "Estado",
        header: "Estado",
        size: 50, //small column
      },

      {
        accessorKey: "Principal",
        header: "¿Principal?",
        size: 50, //small column
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
              backgroundColor: darken(theme.palette.background.default, 0),
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

export default TableDomicilios;
