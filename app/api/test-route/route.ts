
const messages: string[] = [];


export async function GET(req: Request){

    return new Response(JSON.stringify({ messages }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}



export async function POST(req: Request) {
  const { name } = await req.json();

  messages.push(`The name was received: ${name}`);

  return new Response(JSON.stringify({ messages }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
