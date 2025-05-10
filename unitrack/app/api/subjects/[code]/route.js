import unitrackRepo from "@/repos/unitrack-repo";

export async function GET(req, { params }){
    const code = params.code;
    const subject = await unitrackRepo.getSubject(code);

    if (!subject) {
      return new Response(JSON.stringify({ error: 'Subject not found' }), { status: 404 });
    }

    return Response.json(subject, { status: 200 });
}