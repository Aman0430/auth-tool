const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-700 via-sky-500 to-sky-200">
      {children}
    </div>
  );
};
export default AuthLayout;
