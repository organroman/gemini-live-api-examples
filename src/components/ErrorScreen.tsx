"use client";

const ErrorScreen = ({ error }: { error: string | null }) => {
  return (
    <div className="page">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="display display-md" style={{ marginBottom: 16 }}>
          Something went wrong
        </p>
        <p className="body-sm" style={{ marginBottom: 32 }}>
          {error}
        </p>
        <button
          className="btn btn-outline"
          onClick={() => (window.location.href = "/")}
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
