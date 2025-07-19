interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

export const NxButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 text-white p-2 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};
