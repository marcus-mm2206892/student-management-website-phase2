import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req){
    const classes = await unitrackRepo.getAllClasses();
    
    if (!classes) {
      return new Response(JSON.stringify({ error: 'Classes not found' }), { status: 404 });
    }
    
    return Response.json(classes, { status: 200 });
}

export async function POST(req){
    const newClass = await req.json();
    const createdClass = await unitrackRepo.createClass(newClass);
    return Response.json(createdClass, { status: 200 });
}