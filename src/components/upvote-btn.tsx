"use client";

export default function UpvoteButton() {
  return (
    <button
      onClick={() => {
        console.log("Upvote clicked");
        alert("Upvoted!");
      }}
      className="bg-blue-500 text-white p-2 mt-2 w-full"
    >
      Upvote
    </button>
  );
}
