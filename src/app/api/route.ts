let userName1 = 'User 1';
let userName2 = 'User 2';
let link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';


export async function GET() {
    return Response.json({ userName1, userName2, link });
}
export async function POST(request : Request) { 
    const { NuserName1, NuserName2, Nlink } = await request.json();
    console.log(NuserName1, NuserName2, Nlink);
    
    if (NuserName1) userName1 = NuserName1;
    if (NuserName2) userName2 = NuserName2;
    if (Nlink) link = Nlink;
    return Response.json({ userName1, userName2, link });

}