import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, {params}){
    const id = params.classId;
    const cls = await unitrackRepo.getClassById(id);
    
    if (!cls) {
      return new Response(JSON.stringify({ error: 'Class not found' }), { status: 404 });
    }
    
    return Response.json(cls, { status: 200 });
}

export async function PUT(req, {params}){
    const id = params.classId;
    const body = await req.json();
    const updatedClass = await unitrackRepo.updateClass(id, body);

    return Response.json(updatedClass, { status: 200 });
}

// We dont have delete functionality for classes
