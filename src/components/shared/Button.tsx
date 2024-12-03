import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: "solid" | "outline" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = "solid",
	...props
}) => {
	const baseStyles =
		"px-4 py-2 font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ";
	const variants = {
		solid: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
		outline: "border border-secondary text-secondary hover:bg-secondary/10",
		ghost: "text-secondary hover:bg-secondary/10",
	};

	return (
		<button
			className={clsx(baseStyles, variants[variant], className, {
				"opacity-50 cursor-not-allowed": props.disabled,
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
