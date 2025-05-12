import statisticsRepo from "@/repos/statistics-repo";

export async function GET() {
  const data = await statisticsRepo.getAverageGPAByMajor();
  return Response.json(data);
}