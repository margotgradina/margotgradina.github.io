import Snackbar, {SnackbarCloseReason, SnackbarOrigin} from "@mui/material/Snackbar";
// import {SyntheticEvent, useState} from "react";

// interface ToastProps {
//   type: "Alert" | "Success" | "Info";
//   autohideDuration: number;
//   show: boolean;
//   onClose: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
//   message: string;
// }

// interface State extends SnackbarOrigin {
//   open: boolean;
// }

// const Toast = (props: ToastProps) => {
//   const {type, autohideDuration, onClose, show, message} = props;
//   const [state, setState] = useState<State>({
//     open: false,
//     vertical: "bottom",
//     horizontal: "center",
//   });
//   const {vertical, horizontal, open} = state;

//   return (
//     <>
//       <Snackbar anchorOrigin={{vertical, horizontal}} open={show} autoHideDuration={6000} onClose={onClose} message={message} action={null} />
//     </>
//   );
// };

// export default Toast;
