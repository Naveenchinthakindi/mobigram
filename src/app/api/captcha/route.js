export async function POST(req) {
  const data = await req.json();
  const { token } = data;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return new Response(JSON.stringify({ message: "Token not found" }), {
      status: 400,
    });
  }

  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await fetch(verifyUrl, { method: "POST" });

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`Failed to verify CAPTCHA, status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      return new Response(
        JSON.stringify({ message: "CAPTCHA verified successfully" }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Failed CAPTCHA verification" }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
