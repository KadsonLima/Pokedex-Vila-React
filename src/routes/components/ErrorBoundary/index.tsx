import { Component, ReactNode } from 'react'


export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError }:any = this.state
    const { children }:any = this.props
    if (hasError) {
      return <>Algo deu errado.</>
    return children
  }
}
