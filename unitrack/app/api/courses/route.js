import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req){
    const courses = await unitrackRepo.getAllCourses();
    
    if (!courses) {
      return new Response(JSON.stringify({ error: 'Courses not found' }), { status: 404 });
    }
    
    return Response.json(courses, { status: 200 });
}

export async function POST(req){
    const newCourse = await req.json();
    const createdCourses = await unitrackRepo.createCourse(newCourse);
    return Response.json(createdCourses, { status: 200 });
}