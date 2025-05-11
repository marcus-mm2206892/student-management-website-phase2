import statisticsRepo from "@/repos/statistics-repo";

export async function GET() {
  const data = await statisticsRepo.getSemesterCourseCountsByMajor();
  return Response.json(data);
}