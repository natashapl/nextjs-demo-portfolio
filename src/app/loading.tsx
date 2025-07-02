export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="ml-3">Loading...</p>
    </div>
  );
}
