type LoadingButtonProps = {
  loading: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
};

export default function LoadingButton({
  loading,
  text,
  type = "button",
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full min-h-[44px] min-w-[120px] bg-sky-700 hover:bg-sky-800 
        disabled:opacity-90 disabled:cursor-not-allowed 
        text-white font-semibold rounded-lg px-4 py-2 transition-colors 
        flex items-center justify-center"
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </span>
      ) : (
        text
      )}
    </button>
  );
}
