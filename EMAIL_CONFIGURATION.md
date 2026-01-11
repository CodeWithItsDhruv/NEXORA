# EmailJS Configuration Guide

## How to specific multiple recipients

To send the contact form data to multiple email addresses (e.g., `help@nexora-digital.in` AND `nexoraworkk@gmail.com`), you must configure this in the EmailJS Dashboard. This **cannot** be done directly in the React code for security reasons.

### Steps:

1.  Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2.  Go to **Email Templates** on the left sidebar.
3.  Select your Contact Form template (ID: `template_6h6hml5`).
4.  Look for the **"To Email"** field on the right side of the editor.
5.  Enter multiple email addresses separated by a comma.
    *   **Example:** `help@nexora-digital.in, nexoraworkk@gmail.com`
6.  Click **Save**.

## Auto-Reply Configuration

If you want to send an automatic reply to the user who submitted the form:

1.  Go to **Email Templates** and create a new template (or use `template_cxlky7n`).
2.  Click the **"Source Code"** icon (`<>`).
3.  Copy and paste the HTML content from the `email-autoreply-template.html` file in this repository.
4.  Save the template.
5.  To trigger this automatically:
    *   Go to your **Contact Form Template** (`template_6h6hml5`).
    *   Click on the **"Auto-Reply"** tab (or check if there is an option to "Send auto-reply").
    *   *Alternatively*, you can enable this in the React code by making a second API call, but the dashboard configuration is more reliable.
