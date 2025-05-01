export async function GET(req){
    const { searchParams } = new URL(req.url);
    // const type = searchParams.get('Type');
    const response = { message: 'API endpoint http://localhost:3000 ' }
    return Response.json(response, {status: 200});
}

export async function POST(req){
    const newClass = await req.json();
    // create new class in repo
    const response = { message: 'API endpoint http://localhost:3000 ' }
    return Response.json(newAccount, {status: 200});
}
export async function PUT(req){
    const response = { message: 'API endpoint http://localhost:3000 ' }
    return Response.json(response, {status: 200});
}

// We dont have delete functionality for classes
