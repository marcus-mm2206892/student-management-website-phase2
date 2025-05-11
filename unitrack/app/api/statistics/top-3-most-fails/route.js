import statisticsRepo from "@/repos/statistics-repo";

export async function GET() {
  const data = await statisticsRepo.getTop3CoursesWithMostFails();
  return Response.json(data);
}