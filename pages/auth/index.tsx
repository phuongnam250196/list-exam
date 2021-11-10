import React, { useEffect, useState } from "react";
import { AuthNS } from "../../lib/models/Auth";
import { Button, TextField, Grid } from '@mui/material';
import { AuthAPi } from './../../lib/services/AuthApi';
import userStyle from './auth.module.scss';
import { SESSIONSTORAGE, BASE_URL, TYPE_MESSAGE } from "../../lib/constances/const";
import { useRouter } from 'next/router'
// import Notify from "../../lib/components/Notify/Notify";
interface AuthProps {
    auth: AuthNS.UserSession[] | [];
}
const Login: React.FC<AuthProps> = ({ auth }) => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [typeNotify, setTypeNotify] = useState("" as TYPE_MESSAGE);
    const router = useRouter();
    console.log('BASE_URL', BASE_URL)
    const Login = () => {
        console.log('click');
        AuthAPi.Login(username, password).then(res => console.log(res))
    }
    const handleHide = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            {/* <Notify title={title} open={open} type={typeNotify} handleHide={handleHide} /> */}
            <div className={userStyle.Login}>
                <h2>Đặng nhập</h2>
                <Grid container spacing={2}>
                    <Grid item={true} xs={2}>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <p className="text-center">Tài khoản</p>
                    </Grid>
                    <Grid item={true} xs={7}>
                        <TextField id="outlined-basic"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            label="Tài khoản" variant="outlined" />
                    </Grid>
                    <Grid item={true} xs={2}>
                    </Grid>
                    <Grid item={true} xs={3}>
                        <p className="text-center">Mật Khẩu</p>
                    </Grid>
                    <Grid item={true} xs={7}>
                        <TextField id="outlined-basic"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            label="Mật khẩu" type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onKeyPress={(event: React.KeyboardEvent) => {
                                if (event.key === "Enter") {
                                    Login()
                                }
                            }}
                        />
                    </Grid>
                </Grid>

                <br />
                <Grid className="d-flex justify-content-between" container spacing={1}>
                    <Grid item={true} xs={6} >
                    </Grid>
                    <Grid item={true} xs={6} >
                        <Button variant="contained" onClick={() => Login()}>Đăng nhập</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Login;