export const Label = ({
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className="font-semibold mb-2 text-center text-black dark:text-white"
      {...props}
    >
      {children}
    </label>
  );
};
