import { createPost } from "@/actions/actions";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const posts = await prisma.post.findMany();

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>

      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <form action={createPost} className="max-w-[400px] mx-auto mt-24">
        <input
          type="text"
          name="title"
          placeholder="Title of the new post"
          className="border border-gray-300 p-2 w-full"
        />
        <textarea
          name="content"
          placeholder="Content of the new post"
          className="border border-gray-300 p-2 w-full mt-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 mt-2 w-full"
        >
          Create post
        </button>
      </form>
    </div>
  );
}
