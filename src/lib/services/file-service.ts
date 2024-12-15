// src/lib/services/file-service.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

// Define allowed file types
const allowedFileTypes = {
  image: ["image/jpeg", "image/png", "image/gif"],
  video: ["video/mp4", "video/quicktime"],
  model: ["application/x-3ds", "model/gltf-binary", ".fbx", ".obj"],
  document: ["application/pdf", "application/zip"],
};

// FileRouter for your app
export const uploadRouter = {
  // Course material upload
  courseMaterial: f({
    "image/jpeg": { maxFileSize: "4MB" },
    "image/png": { maxFileSize: "4MB" },
    "image/gif": { maxFileSize: "8MB" },
    "video/mp4": { maxFileSize: "512MB" },
    "application/pdf": { maxFileSize: "16MB" },
    "application/zip": { maxFileSize: "1GB" },
  })
    .middleware(async () => {
      const session = await getServerSession(authOptions);
      if (!session?.user) throw new Error("Unauthorized");

      // Verify instructor role
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
      });

      if (user?.role !== 'INSTRUCTOR') throw new Error("Not an instructor");

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.resource.create({
        data: {
          title: file.name,
          url: file.url,
          type: file.type,
          size: file.size,
          uploadedById: metadata.userId,
        }
      });
    }),

  // Assignment submission upload
  assignmentSubmission: f({
    "image/jpeg": { maxFileSize: "16MB" },
    "image/png": { maxFileSize: "16MB" },
    "video/mp4": { maxFileSize: "512MB" },
    "application/zip": { maxFileSize: "1GB" },
    "model/gltf-binary": { maxFileSize: "256MB" },
  })
    .middleware(async () => {
      const session = await getServerSession(authOptions);
      if (!session?.user) throw new Error("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // File upload completed
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;