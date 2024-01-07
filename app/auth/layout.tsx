const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[conic-gradient(var(--tw-gradient-stops))] from-red-700 via-black to-black">
      {children}
    </div>
  );
};
export default AuthLayout;
