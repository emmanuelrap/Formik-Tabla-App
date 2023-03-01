import React, { useMemo } from "react";
import MaterialReactTable, {
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, Button, IconButton } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { data } from "./makeData";
import ActionTableBar from "../src/components/bars/ActionTableBar";
import ButtonGroupTable from "../src/components/ButtonGroupTable";

const ReactTableFilterCustom = ({ dataCombinacion }) => {
  console.log("data combinacion desde filter: ", dataCombinacion);
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: "IdUsuarioOK",
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
    <div className="m-2">
      <MaterialReactTable
        columns={columns}
        data={dataCombinacion}
        enableColumnActions={false}
        localization={MRT_Localization_ES}
        // enableRowSelection
        positionToolbarAlertBanner="bottom" //show selected rows count on bottom toolbar
        //add custom action buttons to top-left of top toolbar
        renderTopToolbarCustomActions={({ table }) => (
          <ButtonGroupTable></ButtonGroupTable>
        )}
      />
    </div>
  );
};

export default ReactTableFilterCustom;
