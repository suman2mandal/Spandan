# 🐾 Spandan – Be the Voice for the Voiceless

**Spandan** is a non-profit animal welfare platform built using [Next.js](https://nextjs.org), designed to help protect, rescue, and care for street animals. From requesting rescue support to spreading awareness about animal rights, Spandan is a compassionate initiative for voiceless beings.

🌐 **Live Site**: [https://www.spandan.life](https://www.spandan.life)

---

## ✨ Features

- 🚨 **Rescue Help Request** – Easily request help for distressed or injured animals.
- 📚 **Animal Law Information** – Access detailed legal provisions for animal protection in India.
- 🖼️ **Gallery of Rescues** – Stories and images of animals rescued by Spandan.
- 🤝 **Volunteer & Contact Forms** – Connect with the team or join as a volunteer.
- 🌓 **Dark/Light Theme Support**
- 🔒 **Authentication System** – Secure login for internal access (optional/expandable).
- 🗂️ **Admin Panel (Optional/Upcoming)** – To manage rescue requests, blog posts, and more.

---

## 🧱 Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Authentication:** NextAuth.js
- **Database:** MongoDB (via Mongoose)
- **Markdown Content:** MDX with Custom Components
- **Deployment:** Vercel

---

## 🚀 Getting Started

To run this project locally:

### 1. Clone the repository

bash
git clone https://github.com/your-username/spandan-ngo-website.git
cd spandan-ngo-website


### 2. Install dependencies using pnpm

bash
pnpm install


### 3. Configure environment variables

Create a `.env.local` file in the root directory and add:

\`\`\`env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
\`\`\`

### 4. Run the development server

bash
pnpm dev


Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 📁 Project Structure


📁 spandan-ngo-website  
├─ 📂 app                – Next.js App Router pages and layouts  
├─ 📂 components         – UI and shared components  
├─ 📂 redux              – Redux store setup and slices  
├─ 📂 lib                – DB connections and utility functions  
├─ 📂 models             – Mongoose schema models  
├─ 📂 public             – Static assets  
├─ 📂 styles             – Global styles and Tailwind config  
├─ 📂 utils              – Authentication, JWT, helper functions  
└─ 📄 middleware.ts      – Middleware for auth and routing  

---

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [NextAuth.js Guide](https://next-auth.js.org/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [MDX](https://mdxjs.com/)

---

## ☁️ Deployment

Spandan is deployed using [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🤝 Contributing

We welcome contributions, ideas, or bug reports!  
Please fork the repository, make your changes, and open a pull request.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

### Made with ❤️ by the Spandan Team  
[https://www.spandan.life](https://www.spandan.life)
