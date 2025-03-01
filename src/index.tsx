import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import $ from "jquery"
import Popper from "@popperjs/core"
import autocomplete from "@algolia/autocomplete-js/dist/esm"
import PerfectScrollbar from "perfect-scrollbar"
import Hammer from "hammerjs"
import i18n from "i18next"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ""
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
