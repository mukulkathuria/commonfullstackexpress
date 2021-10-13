import React, { Component } from 'react';

interface ErrorProp {
  children: JSX.Element;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProp, State> {
  constructor(props: ErrorProp) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(err: boolean): State {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
