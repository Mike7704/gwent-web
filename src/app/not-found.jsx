"use client";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-evenly">
      <h2 className="text-3xl">404 - Page Not Found</h2>
      {/* Using normal button rather than link because of this issue
      https://github.com/vercel/next.js/issues/48367 
      <Link className="button" href="/">
        Return To Main Menu
      </Link>
      */}
      <button className="button" onClick={() => (window.location.href = "/")}>
        Return To Main Menu
      </button>
    </main>
  );
}
