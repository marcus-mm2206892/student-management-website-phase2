import statisticsRepo from "@/repos/statistics-repo";

export async function GET() {
  const data = await statisticsRepo.getTop3WaitlistedClasses();
  return Response.json(data, { status: 200 });
}