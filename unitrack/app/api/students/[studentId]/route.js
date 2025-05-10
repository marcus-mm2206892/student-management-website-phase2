import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, {params}){
    const id = params.studentId;
    const student = await unitrackRepo.getStudentById(id);
    
    if (!student) {
      return new Response(JSON.stringify({ error: 'Student not found' }), { status: 404 });
    }
    
    return Response.json(student, { status: 200 });
}

export async function PUT(req, {params}){   //We can only directly modify the college, or else there would be a foreign key error
    const id = params.studentId;
    const body = await req.json();
    const updatedStudent = await unitrackRepo.updateStudent(id, body);

    return Response.json(updatedStudent, { status: 200 });
}