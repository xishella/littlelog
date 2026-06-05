import { useNavigate } from "react-router";

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 pt-[60px]">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl">Page not found</h1>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
