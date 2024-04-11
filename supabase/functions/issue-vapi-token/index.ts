// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import {
  create,
  getNumericDate,
  type Header,
  type Payload,
} from "https://deno.land/x/djwt@v3.0.2/mod.ts";

async function generateVapiJWT() {
  const vapiPrivateKey = Deno.env.get("VAPI_PRIVATE_KEY");
  if (!vapiPrivateKey) throw new Error("Private key is not set");

  const encoder = new TextEncoder();
  const secretKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(vapiPrivateKey),
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign"],
  );

  const payload: Payload = {
    orgId: Deno.env.get("VAPI_ORG_ID"),
    exp: getNumericDate(60 * 60), // 1 hour from now
  };

  const header: Header = {
    alg: "HS256",
    typ: "JWT",
  };

  try {
    const jwt = await create(header, payload, secretKey);
    return JSON.stringify({ jwt });
  } catch (error) {
    console.error("Error signing token:", error);
    return "Error issuing token";
  }
}

Deno.serve(async () => {
  const response = await generateVapiJWT();
  return new Response(response, {
    headers: { "Content-Type": "application/json" },
    status: response.startsWith("Error") ? 500 : 200,
  });
});
