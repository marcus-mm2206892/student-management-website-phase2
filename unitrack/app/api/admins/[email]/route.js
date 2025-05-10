import unitrackRepo from "@/repos/unitrack-repo";

unitrackRepo
export async function GET(req, {params}){
    const email = params.email;
    const admin = await unitrackRepo.getAdminByEmail(email);
    
    if (!admin) {
      return new Response(JSON.stringify({ error: 'Admin with the email not found' }), { status: 404 });
    }

    return Response.json(admin, {status: 200});
}