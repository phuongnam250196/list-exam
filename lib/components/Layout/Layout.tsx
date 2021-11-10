import Head from "next/head"
import { useEffect } from "react";
import AppHeader from "../../../components/AppHeader";
import AppSideBar from "../../../components/AppSideBar";
const Layout: React.FC = ({children}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Comatible" content='IE=edge'/>
                <meta name="viewport" content="width=device-width, intitial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Next App</title>
            </Head>
            <AppSideBar htm={children}></AppSideBar>
        </>
    )
}

export default Layout;  