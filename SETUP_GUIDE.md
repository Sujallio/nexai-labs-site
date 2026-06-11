# Setup Guide: Consultation Form & WhatsApp Integration

## ✅ What's Been Configured

### 1. **Consultation Form Email Submission** 
Your form now automatically sends all inquiry details to `auxmet01@gmail.com` when clients submit.

**Form Details Captured:**
- Full Name, Email, Phone
- Company, Country
- Project Type, Budget, Timeline
- Project Description & Additional Requirements

### 2. **WhatsApp Button**
✅ Already configured with your number: **8793001079**
- Clients can click "Chat with us" button to open WhatsApp
- Pre-filled greeting message included
- Button appears in bottom-right corner of the website

---

## 🔧 Setup Steps (Required for Email to Work)

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled

### Step 2: Generate Gmail App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
3. Google will generate a **16-character password**
4. Copy this password (you'll need it in the next step)

### Step 3: Update `.env` File
The `.env` file in your project root has been created. Update it with:

```env
EMAIL_USER=auxmet01@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Paste the 16-char password here (remove spaces)
EMAIL_TO=auxmet01@gmail.com
NODE_ENV=development
```

**Important:** 
- Remove spaces from the app password when pasting
- Keep this file private and never commit to git

### Step 4: Install Dependencies
Run this command in your project:
```bash
npm install
```

This installs the `nodemailer` package needed for sending emails.

### Step 5: Test the Form
1. Start your dev server: `npm run dev`
2. Navigate to the contact/inquiry form
3. Fill out and submit the form
4. Check your email at `auxmet01@gmail.com` for the inquiry details

---

## 📧 Email Details

When a client submits the form, you'll receive:
- ✉️ **To:** auxmet01@gmail.com
- **Subject:** "New Project Inquiry from [Client Name]"
- **Contains:** All form fields in a formatted HTML email
- **Reply-To:** Client's email (so you can reply directly)

---

## 💬 WhatsApp Integration

**Current Setup:**
- Phone: +91 8793001079
- Button location: Bottom-right corner (fixed)
- Default message: "Hello, I would like to discuss a project."

To customize the message, edit [`src/components/site/WhatsAppButton.tsx`](src/components/site/WhatsAppButton.tsx#L4):
```tsx
const MESSAGE = "Your custom message here";
```

---

## 🆘 Troubleshooting

**Email not sending?**
- ✅ Check `EMAIL_PASSWORD` is correct (16-char app password, not your Gmail password)
- ✅ Verify `EMAIL_USER` is correct
- ✅ Ensure 2FA is enabled on Gmail
- ✅ Check browser console for error messages

**WhatsApp button not working?**
- WhatsApp Web/Desktop must be installed
- Ensure phone number is in international format (+91 8793001079)

---

**Questions?** Check the error messages in the browser console or server logs.
