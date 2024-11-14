// src/app/api/user/career-path/route.ts

import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

const careerPathSchema = z.object({
  careerPath: z.enum(["SHORT_COURSE", "DEGREE_PROGRAM"]),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { careerPath } = careerPathSchema.parse(body);

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { careerPath },
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
      nextStep: careerPath === "SHORT_COURSE" ? "/onboarding/short-course/survey" : "/onboarding/degree-program/survey",
    });
  } catch (error) {
    console.error("Career path selection error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}