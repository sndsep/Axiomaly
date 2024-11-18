import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Replace with actual logic to fetch courses from your database
    const courses = await fetchCoursesFromDatabase();

    return NextResponse.json(courses); // Ensure this is an array
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Mock function - replace with actual database fetching logic
async function fetchCoursesFromDatabase() {
  return [
    { id: '1', title: 'Introduction to VFX' },
    { id: '2', title: 'Advanced Compositing' },
    // Add more courses as needed
  ];
}