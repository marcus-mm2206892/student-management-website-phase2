import statisticsRepo from "@/lib/statistics-repo";

export async function GET() {
  const data = await statisticsRepo.getAverageGPAByMajor();
  return Response.json(data);
}