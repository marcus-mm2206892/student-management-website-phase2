import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, {params}){
    const id = params.instructorId;
    const instructor = await unitrackRepo.getInstructorById(id);
    
    if (!instructor) {
      return new Response(JSON.stringify({ error: 'Instructor not found' }), { status: 404 });
    }
    
    return Response.json(instructor, { status: 200 });
}

export async function PUT(req, {params}){
    const id = params.instructorId;
    const body = await req.json();
    const updatedInstructor = await unitrackRepo.updateInstructor(id, body);

    return Response.json(updatedInstructor, { status: 200 });
}