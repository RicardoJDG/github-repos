import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { NextUIProvider } from "@nextui-org/react"
import FetchedUserContextProvider from "./context/fetchedUserContextProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider className="h-full">
      <main className="h-full dark text-foreground bg-background">
        <FetchedUserContextProvider>
          <App />
        </FetchedUserContextProvider>
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
