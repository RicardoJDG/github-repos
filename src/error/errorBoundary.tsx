import { Component, ErrorInfo, ReactNode } from "react"
import SearchInput from "../components/search/SearchInput"

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <SearchInput
          caughtError={true}
          errorMsg="There has been an error. Please restart your browser."
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
