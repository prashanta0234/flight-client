import React from "react";

type ErrorBoundaryProps = {
	children: React.ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1 className="text-center">500 - Something went wrong</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
