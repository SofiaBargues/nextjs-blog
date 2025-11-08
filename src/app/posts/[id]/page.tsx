import UpvoteButton from "@/components/upvote-btn";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";

export async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });

  if (!post) {
    return notFound();
  }
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.content}</p>
      <UpvoteButton />
    </div>
  );
}

export default Page;
