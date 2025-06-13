
// export async function GET(req:Request){

//   const data = await req.json();
//   const stringArray: string[] = [];
//     stringArray.push(`The data is added successfully: ${data}`);
//     return new Response(JSON.stringify({ stringArray }), {
//         status: 200,
//         headers: { "Content-Type": "application/json" }
//     });
// }


export async function POST(req: Request) {
  const { name } = await req.json();

  const names: string[] = [];
  names.push(`The name was received: ${name}`);

  return new Response(JSON.stringify({ names }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}