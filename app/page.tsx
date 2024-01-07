import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[conic-gradient(var(--tw-gradient-stops))] from-red-700 via-black to-black">
      <div className="space-y-6 text-center p-6">
        <h1 className="text-5xl text-white font-semibold drop-shadow-md">
          🔐Auth
        </h1>
        <p className="text-blue-400 font-semibold">
          A simple Authentication tool
        </p>
        <div>
          <LoginButton>
            <Button className="w-full">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
