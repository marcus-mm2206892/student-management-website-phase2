export async function GET(req){
    const { searchParams } = new URL(req.url);
    // const type = searchParams.get('Type');
    const response = { message: 'API endpoint http://localhost:3000 ' }
    return Response.json(response, {status: 200});
}