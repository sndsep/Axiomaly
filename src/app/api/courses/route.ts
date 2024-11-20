// src/app/api/courses/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level");

    const courses = await prisma.course.findMany({
      where: {
        ...(category && { categoryId: category }),
        ...(level && { difficultyLevel: level })
      },
      include: {
        instructor: {
          select: {
            name: true,
            image: true
          }
        },
        category: true,
        resources: {
          select: {
            id: true,
            title: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}