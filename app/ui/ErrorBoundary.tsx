'use client';

import React from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Captured error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload(); // Ou, opcionalmente, `router.reload()` se for SPA
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4">
          <h2 className="text-2xl font-bold text-red-600">
            Something went wrong!
          </h2>
          <p className="mt-2 text-gray-600">{this.state.error?.message}</p>
          <button
            onClick={this.handleRetry}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
          >
            Try Again
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
