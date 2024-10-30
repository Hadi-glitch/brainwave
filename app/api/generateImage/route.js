// app/api/generateImage/route.js

export async function POST(req) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = await req.json();

  const raw = JSON.stringify({
    key: process.env.MODELSLAB_API_KEY,
    prompt: body.prompt || "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))",
    negative_prompt: body.negative_prompt || "bad quality",
    width: body.width || "512",
    height: body.height || "512",
    safety_checker: body.safety_checker || false,
    seed: body.seed || null,
    samples: body.samples || 1,
    base64: body.base64 || false,
    webhook: body.webhook || null,
    track_id: body.track_id || null
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://modelslab.com/api/v6/realtime/text2img", requestOptions);
    const result = await response.json();

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Error generating image' }), { status: 500 });
  }
}
