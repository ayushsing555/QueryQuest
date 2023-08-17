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

const followEmail = (followed, User) => {
    const content = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${User}</span>,</p>
      <p style="font-size: 16px;">We hope this email finds you well. We're excited to inform you that you are now successfully following <span style="font-weight: bold;">${followed}</span> on our website!</p>
      <p style="font-size: 16px; margin-top: 10px;"><span style="font-weight: bold;">${followed}'s</span> updates, posts, and activities will now be prominently featured in your feed, allowing you to stay up-to-date with their latest content. Whether it's insightful articles, engaging discussions, or exciting announcements, you won't miss a thing.</p>
      <p style="font-size: 16px; margin-top: 10px;">Should you have any questions or encounter any issues while using our platform, please don't hesitate to reach out to <span style="font-weight: bold;color: blue;">our support team</span> by replying to this email. We're here to ensure you have the best experience possible.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being a part of our community and for choosing to connect with <span style="font-weight: bold;">${followed}</span>. We look forward to providing you with valuable content and a seamless user experience.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>`;
    return content;
};

const followedEmail = (followed, user) => {
    const content = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Connect and Engage with Your Follower</h3>
      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${followed}</span>,</p>
      <p style="font-size: 16px;">We hope this message finds you well. We wanted to inform you that <span style="font-weight: bold;">${user}</span> has recently started following your updates on <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>, and we thought this would be a great opportunity to connect and engage within our community.</p>
      <p style="font-size: 16px; margin-top: 10px;">It's always inspiring to see individuals with shared interests connect on our platform, and we believe this could be the beginning of a meaningful connection. <span style="font-weight: bold;">${user}</span> has shown an interest in your content, and we encourage you to explore their profile and potentially initiate a conversation or engage with their posts.</p>
      <p style="font-size: 16px; margin-top: 10px;">We believe that connecting with <span style="font-weight: bold;">${user}</span> could lead to enriching experiences and open doors to new possibilities. We're here to support you in making the most of your time on our website.</p>
      <p style="font-size: 16px; margin-top: 10px;">If you have any questions, need assistance, or want to share your experiences, please don't hesitate to reach out. Our team is dedicated to ensuring you have a positive and rewarding experience within our community.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being a valued member of <span style="color:rgb(126, 25, 25); font-weight: bold;">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span>. We look forward to seeing the wonderful connections and interactions that may unfold between you and <span style="font-weight: bold;">${user}</span>.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
    `;
    return content;
};
const QueryPostEmail = (user,follow,queryTitle)=>{
    const content = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;"> New Query Notification from User You Follow</h3>

      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${user}</span>,</p>
      <p style="font-size: 16px;">We hope this email finds you well. We're excited to notify you about a recent post from one of the users you are following on <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>. We believe this query could be of great interest to you based on your preferences and interactions within the community.</p>
      <p style="font-size: 16px; margin-top: 10px;"><span style="font-weight: bold;">${follow}</span>, whom you follow, has shared a new query titled "<span style="font-weight: bold; color: red;">${queryTitle}</span>". We thought you might appreciate the insights, perspectives, and discussions presented in this query.</p>
      <p style="font-size: 16px; margin-top: 10px;">To read the full query and engage in the conversation, simply go to our website and see new query posted. </p>
      <p style="font-size: 16px; margin-top: 10px;">If you have any questions or concerns, or if there's anything we can assist you with, please don't hesitate to reach out to <span style="font-weight: bold; color: blue;">our support team</span>. We are here to support you and ensure you have a positive experience within our community.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being an active and valued member of our community. Your participation contributes to the vibrant discussions and meaningful interactions that make <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span> such a valuable platform for all of us.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
    `
    return content
}

const unfollowEmail = (follow,user)=>{
    const content = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Unfollow Confirmation on our website</h3>
      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${user}</span>,</p>
      <p style="font-size: 16px;">We hope this message finds you well. We wanted to inform you that you are no longer following <span style="font-weight: bold;">${follow}</span> on <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>. As part of our platform's functionality, you now have more control over the content and connections you engage with.</p>
      <p style="font-size: 16px; margin-top: 10px;">We understand that interests and preferences can evolve over time, and we respect your decision to curate your experience on our website. If you unfollowed <span style="font-weight: bold;">${user}</span> by mistake or if you have any questions, please feel free to reach out to <span style="font-weight: bold; color: blue;">our support team</span>, and we'd be happy to assist you.</p>
      <p style="font-size: 16px; margin-top: 10px;">Please remember that our community is built on meaningful connections and engaging content. If you're looking to discover new voices, explore fresh perspectives, or reconnect with users in the future, you're always welcome to do so.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being a valued member of <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>. We are here to ensure you have a positive and fulfilling experience within our community. If you have any feedback or suggestions, please don't hesitate to share them with us.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
    `
    return content;
}

const unfollowedEmail = (followed,user) =>{
    const content = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;"> Unfollow Notification from our website</h3>
      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${user}</span>,</p>
      <p style="font-size: 16px;">We hope this email finds you well. We wanted to notify you that <span style="font-weight: bold;">${followed}</span> has recently unfollowed you on <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>. We understand that these interactions are a natural part of online communities, and we wanted to ensure you are informed about this update.</p>
      <p style="font-size: 16px; margin-top: 10px;">Please remember that the decision to follow or unfollow is a personal choice, often influenced by individual interests and preferences. It's important to recognize that this action is not a reflection of your content or contributions.</p>
      <p style="font-size: 16px; margin-top: 10px;">We encourage you to continue sharing your insights, engaging in discussions, and connecting with the vibrant community here at our website. Your contributions are valued and contribute to the diversity of perspectives that make our platform thrive.</p>
      <p style="font-size: 16px; margin-top: 10px;">If you have any questions or concerns, or if there's anything we can assist you with, please don't hesitate to reach out to <span style="font-weight: bold; color: blue;">our support team</span>. We are here to support you and ensure you have a positive experience within our community.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being a part of <span style="color: rgb(126, 25, 25); font-weight: bold;">QueryQuest</span>. We appreciate your presence and look forward to your continued engagement.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
    `
    return content;
}

const UpdateProfileMail = (user) =>{
  const content = `<div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Profile Updated Successfully</h3>

      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${user}</span>,</p>
      <p style="font-size: 16px;">We hope this email finds you well. We wanted to inform you that your profile update has been successfully processed. Your changes have been implemented and are now reflected in your profile.</p>
      <p style="font-size: 16px; margin-top: 10px;">We understand how important it is to have accurate and up-to-date information on your profile, and we're pleased to confirm that your changes have been saved.</p>
      <p style="font-size: 16px; margin-top: 10px;">If you have any further questions or require assistance, please don't hesitate to  contact<span style="color: blue; font-weight: bold;"> our customer support team </span> by replying to this mail. We're here to help!</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for using our platform and keeping your profile information current. We appreciate your commitment to maintaining accurate records.</p>
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
    `
    return content;
}
module.exports = {deleteQuery, followEmail,unfollowedEmail,unfollowEmail,followedEmail,QueryPostEmail,UpdateProfileMail};