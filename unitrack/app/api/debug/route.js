import unitrackRepo from "@/repos/unitrack-repo";



export async function GET(req, {params}){
    const { searchParams } = new URL(req.url);
    // const type = searchParams.get('Type');
    const response = await unitrackRepo.getCourseIdsByMajor("CMPS");
    return Response.json(response, {status: 200});
}
