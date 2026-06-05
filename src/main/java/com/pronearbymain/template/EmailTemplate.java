package com.pronearbymain.template;

public class EmailTemplate {

    public static String otpTemplate(String name, String otp) {

        String template = """
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ProNearby OTP Verification</title>
</head>

<body style="
margin:0;
padding:0;
background-color:#f4f7fc;
font-family:Arial, Helvetica, sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="padding:30px 15px;">

<table width="600" cellpadding="0" cellspacing="0" border="0"
style="
background:#ffffff;
border-radius:12px;
overflow:hidden;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
">

<!-- HEADER -->
<tr>
<td align="center"
style="
background:#2563eb;
padding:30px;
color:white;
">

<h1 style="
margin:0;
font-size:32px;
font-weight:bold;
">
ProNearby
</h1>

<p style="
margin-top:8px;
font-size:15px;
">
Find Trusted Professionals Near You
</p>

</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:40px;">

<h2 style="
margin-top:0;
color:#111827;
text-align:center;
">
Email Verification
</h2>

<p style="
font-size:16px;
color:#374151;
line-height:1.6;
">
Hello <strong>{{name}}</strong>,
</p>

<p style="
font-size:15px;
color:#4b5563;
line-height:1.6;
">
Thank you for registering with ProNearby.
Use the OTP below to verify your email address and complete your account setup.
</p>

<div style="
margin:30px auto;
max-width:280px;
background:#eff6ff;
border:2px dashed #2563eb;
border-radius:12px;
padding:20px;
text-align:center;
">

<span style="
font-size:42px;
font-weight:bold;
letter-spacing:8px;
color:#2563eb;
">
{{otp}}
</span>

</div>

<p style="
text-align:center;
color:#374151;
font-size:15px;
">
This OTP is valid for <strong>10 minutes</strong>.
</p>

<div style="
background:#fff7ed;
border-left:4px solid #f97316;
padding:15px;
margin-top:25px;
border-radius:8px;
">

<p style="
margin:0;
font-size:14px;
color:#7c2d12;
">
<strong>Security Notice:</strong><br>
Never share this OTP with anyone. ProNearby will never ask for your OTP via phone call, email, or message.
</p>

</div>

<p style="
margin-top:30px;
font-size:15px;
color:#4b5563;
">
If you did not request this OTP, you can safely ignore this email.
</p>

<p style="
margin-top:30px;
font-size:15px;
color:#111827;
">
Regards,<br>
<strong>ProNearby Team</strong>
</p>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="
background:#f9fafb;
padding:25px;
text-align:center;
">

<p style="
margin:0;
font-size:13px;
color:#6b7280;
">
Need help? Contact our support team.
</p>

<p style="
margin-top:10px;
font-size:13px;
color:#9ca3af;
">
© 2026 ProNearby. All Rights Reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
""";

        return template
                .replace("{{name}}", name)
                .replace("{{otp}}", otp);
    }
}