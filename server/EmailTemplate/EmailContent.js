const deleteQuery = (title, username) => {
    const content = `
            <div style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
                <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Query deleted successfully</h3>
                <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${username}</span>,</p>
                <p style="font-size: 16px;">I hope this email finds you well. We wanted to inform you that your query will the below details on our website has been  <span style="color: red; font-weight: bold;"> successfully deleted</span>, as per your request.</p>
                <p style="margin-left: 20px;">Query Title: <strong> ${title}</strong></p>
                <p style="font-size: 16px; margin-top: 10px;">We understand that circumstances and preferences can change, and we're here to ensure that your experience on our platform is as smooth and tailored as possible. If you have any further questions or need assistance, please don't hesitate to reach out to  <span style="font-weight: bold;color: blue;">our support team</span> by replying to this email.  We're here to help.</p>
                <p style="font-size: 16px; margin-top: 10px;">Thank you for using our platform, and we appreciate your engagement. Your feedback is important to us as we continuously strive to improve our services.</p>
                <p style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
                <p style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
            </div>`;
    return content;
};
module.exports = deleteQuery;