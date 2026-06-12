import React, { Component } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary] Caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-bg-app text-text-primary p-8">
          <h2 className="text-lg font-bold mb-2">Algo salió mal</h2>
          <pre className="text-xs text-danger max-w-xl overflow-auto border border-border-color rounded-lg p-4 bg-bg-hover">
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload(); }}
            className="mt-4 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white"
          >
            Recargar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
