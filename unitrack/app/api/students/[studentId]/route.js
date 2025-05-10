import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, props){
    const id = params.studentId;
    const student = await unitrackRepo.getStudentById(id);
    
    if (!student) {
      return new Response(JSON.stringify({ error: 'Student not found' }), { status: 404 });
    }
    
    return Response.json(student, { status: 200 });
}

export async function PUT(req){
    const id = params.studentId;
    const body = await req.json();
    const updatedStudent = await unitrackRepo.updateStudent(id, body);

    return Response.json(updatedStudent, { status: 200 });
}