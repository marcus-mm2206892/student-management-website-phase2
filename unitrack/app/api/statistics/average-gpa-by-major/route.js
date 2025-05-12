import statisticsRepo from "@/repos/statistics-repo";

export async function GET() {
  const result = await statisticsRepo.getAverageGPAByMajor();
  return Response.json(result, { status: 200 });
}