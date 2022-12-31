import { useMessages } from "../../hooks/useMessages";
import { format } from "date-fns";
import { styled } from "@mui/system";
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from "@mui/base/TablePaginationUnstyled";
import { useState } from "react";
import { Loading } from "../../components/global/Loading";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import DeleteSweepTwoToneIcon from "@mui/icons-material/DeleteSweepTwoTone";
import { Navigate } from "react-router-dom";

type Messages = {
  id: number;
  phoneNumber: string;
  message: string;
  dueDateTime: string;
  status: string;
};

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    width: 100%;
    margin; auto;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    box-shadow: 0px 4px 30px ${
      theme.palette.mode === "dark" ? grey[900] : grey[200]
    };
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  }

  td,
  th {
    padding: 16px;

  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);

export const Table = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { messages, isLoading, deleteMessage } = useMessages();

  const handleDeleteMessage = async (id: number) => {
    await deleteMessage(id);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Root sx={{ maxWidth: "100%", width: "100%" }}>
      <table className="min-w-full leading-normal m-auto">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-semibold"
            >
              Number
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600 text-left text-sm uppercase font-semibold"
            >
              Messages
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-semibold"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-600  text-left text-sm uppercase font-semibold"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? messages.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : messages
          ).map(
            ({ id, phoneNumber, message, dueDateTime, status }: Messages) => (
              <tr key={id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex text-gray-800"> {phoneNumber}</div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <small className="text-gray-400 ">
                      {`${format(new Date(dueDateTime), "dd/MM/yy")} - ${
                        new Date(dueDateTime).getHours() + 3
                      }:${new Date(dueDateTime).getMinutes()}`}
                    </small>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-800 text-xs leading-tight text-justify ">
                    <span className="text-gray-800">{message}</span>
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {status === "SENT" ? (
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-base">{status}</span>
                    </span>
                  ) : (
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-base">{status}</span>
                    </span>
                  )}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {status === "WAITING" && (
                    <>
                      <a
                        href={`edit-message/${id}`}
                        type="button"
                        title="Edit Message"
                      >
                        <ModeEditOutlineTwoToneIcon />
                      </a>
                      <button
                        title="Delete Message"
                        onClick={() => handleDeleteMessage(id)}
                        type="button"
                        className="ml-3"
                      >
                        <DeleteSweepTwoToneIcon />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            )
          )}
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
              colSpan={3}
              count={messages.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "messages per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                } as any,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tbody>
      </table>
    </Root>
  );
};
