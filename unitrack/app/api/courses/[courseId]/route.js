
import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, {params}){
    const id = params.courseId;
    const course = await unitrackRepo.getCourseById(id);
    
    if (!course) {
      return new Response(JSON.stringify({ error: 'Course not found' }), { status: 404 });
    }
    
    return Response.json(course, { status: 200 });
}