import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req){
    const students = await unitrackRepo.getAllStudents();
    
    if (!students) {
      return new Response(JSON.stringify({ error: 'Students not found' }), { status: 404 });
    }
    
    return Response.json(students, { status: 200 });
}