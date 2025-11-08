"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(fromData: FormData) {
  const title = fromData.get("title")?.toString();
  const content = fromData.get("content")?.toString();

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  revalidatePath("/posts");
}
