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
import ButtonGroupTableUser from "../ButtonGroupTableUser";

//import { setShowUsersList } from "../../features/tasks/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TableUsers = ({
  dataCombinacion,
  setUserSel,
  userSel,
  setIdSeleccionado,
  setOpenModalAddUser,
  setIsUpdate,
}) => {
  const dispatch = useDispatch();
  const statesUsers = useSelector((state) => state.statesUsers);

  const [isLoadData, setIsLoadData] = useState(true);
  const [dataDable, setDataTable] = useState();
  const [actualizar, setActualizar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadData(false);
    }, 800);
  }, [dataCombinacion]); // <- add empty brackets here

  const clic = () => {
    console.log("disteClic");
  };

  const columns = useMemo(
    //column definitions...
    () => [
      {
        header: "IMAGEN",
        size: 50, //small column
      },
      {
        accessorKey: "IdUsuarioOK",
        header: "IdOK",
        size: 50, //small column
      },
      {
        accessorKey: "IdUsuarioBK",
        header: "IdBK",
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

  return (
    <Box sx={{ border: "gray 2px ", p: "0.5rem" }}>
      <button onClick={clic}>actualizar</button>
      <MaterialReactTable
        columns={columns}
        data={dataCombinacion}
        state={{ isLoading: isLoadData }}
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
        renderTopToolbarCustomActions={({ table }) => (
          <ButtonGroupTableUser
            userSel={userSel}
            setOpenModalAddUser={setOpenModalAddUser}
            setIsUpdate={setIsUpdate}
          />
        )}
        muiTableBodyProps={{
          sx: (theme) => ({
            "& tr:nth-of-type(odd)": {
              backgroundColor: darken(theme.palette.background.default, 0.03),
            },
          }),
        }}
        muiTableBodyRowProps={({ row }) => ({
          onClick: (event) => {
            // console.info(event, row.id);
            setUserSel(dataCombinacion[row.id].Usuario);
            setIdSeleccionado(row.id);
          },
          sx: {
            cursor: "pointer", //you might want to change the cursor too when adding an onClick
          },
        })}
      />
    </Box>
  );
};

export default TableUsers;
