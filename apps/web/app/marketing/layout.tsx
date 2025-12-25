export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <span className="text-xl font-bold">AutoResume AI</span>
            <div className="space-x-4">
              <a href="/auth/login" className="text-gray-600 hover:text-gray-900">
                Login
              </a>
              <a href="/auth/signup" className="text-gray-600 hover:text-gray-900">
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
