export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-aquamarine-600 hover:bg-aquamarine-700 text-white font-bold px-6 rounded transition transform hover:scale-105 active:scale-95 animate-bounce h-10 self-end mb-5 dark:bg-aquamarine-600/40 dark:hover:bg-aquamarine-600/70"
    >
      {children}
    </button>
  );
};
