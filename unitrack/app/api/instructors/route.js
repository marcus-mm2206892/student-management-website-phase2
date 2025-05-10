import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req){
    const instructors = await unitrackRepo.getAllInstructors();
    
    if (!instructors) {
      return new Response(JSON.stringify({ error: 'Instructors not found' }), { status: 404 });
    }
    
    return Response.json(instructors, { status: 200 });
}