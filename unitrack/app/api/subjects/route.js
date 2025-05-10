import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req){
    const subjects = await unitrackRepo.getAllSubjects();

    if (!subjects) {
      return new Response(JSON.stringify({ error: 'Subjects not found' }), { status: 404 });
    }

    return Response.json(subjects, { status: 200 });
}