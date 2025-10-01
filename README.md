# 🏡 Zentro - Real Estate Marketplace

Zentro is a **full-stack real estate marketplace** built with **Next.js** (frontend) and **Node.js** (backend).  
It aims to provide a **central hub** for buyers, renters, and agents to seamlessly connect through property listings, map integration, booking systems, and more.

---

## 🔗 Backend Server

- Backend Repository:[https://github.com/rafiqmia65/zentro-server](https://github.com/rafiqmia65/zentro-server)
- The backend API is hosted here:  [https://zentro-server.vercel.app](https://zentro-server.vercel.app)

---

## ✨ Features (Planned)

### 🔍 Property Listings
- Advanced filters (location, price, property type, etc.)
- Interactive map integration (Google Maps / Mapbox)
- Grid & list views
- Saved searches and alerts

### 🏠 Property Details
- Image gallery & videos
- Detailed property info
- Mortgage calculator
- Schedule appointments
- Related properties

### 👤 User Features
- Register/login (Email, Google, Facebook)
- Dashboard with:
  - Saved properties
  - Bookings/appointments
  - Messages with agents
  - Profile management
- Reviews & ratings

### 👨‍💼 Agent Features
- Agent verification & profile
- Agent dashboard:
  - Manage property listings
  - Handle inquiries & bookings
  - Analytics on views, favorites, sales
  - Messaging system

### 🛠️ Admin Features
- Manage users, agents, and properties
- Approve/reject listings
- Analytics dashboard
- Subscription & payments
- Content management (blogs, FAQs)

### 📅 Booking & Communication
- Appointment requests with calendar
- Chat/messaging system
- Email & push notifications

### 💳 Payments & Monetization
- Paid plans for agents (basic, premium, featured)
- Payment gateways (Stripe, PayPal, etc.)
- Commission-based revenue

### 🌟 Extra Features
- Blogs & articles
- Multi-language & multi-currency support
- Dark/light theme
- SEO optimization
- Responsive design

---

## 🛠 Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Material Tailwind](https://www.material-tailwind.com/) (UI Components)

**Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (Database)
- [Mongoose](https://mongoosejs.com/) (ODM)

**Other Tools**
- Google Maps / Mapbox API
- Firebase (for auth or notifications)
- Stripe/PayPal (Payments)

---

## 📂 Project Structure (Planned)

```bash
zentro-client/
├── public/                     # Static files (images, icons, fonts, etc.)
│   ├── favicon.ico
│   └── logo.png
│
├── src/                        # Main app source
│   ├── app/                    # Next.js App Router (pages, layouts, routes)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── properties/         # Property-related pages
│   │   │   ├── page.tsx        # Property listing page
│   │   │   └── [id]/page.tsx   # Property details page
│   │   ├── agents/             # Agent-related pages
│   │   ├── dashboard/          # User dashboard (protected routes)
│   │   ├── admin/              # Admin dashboard
│   │   └── api/                # Next.js API routes (if used)
│   │
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Buttons, inputs, modals
│   │   ├── layout/             # Navbar, Sidebar, Footer
│   │   ├── property/           # Property cards, filters
│   │   └── dashboard/          # Dashboard widgets
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions, helpers
│   ├── services/               # API calls (Axios, TanStack Query configs)
│   ├── store/                  # Global state (Zustand/Redux/Context)
│   ├── styles/                 # Global & component-specific styles
│   ├── types/                  # TypeScript types/interfaces
│   └── config/                 # Environment configs (API base URLs, etc.)
│
├── .env.local                  # Environment variables (not committed)
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── tsconfig.json                # TypeScript config
├── package.json
└── README.md

```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Git

### Installation
Clone the repository:
```bash

git clone https://github.com/ArunRoy404/zentro-client.git
cd zentro-client
npm install
npm run dev

```

---
## 👥 Contributors

- **[Orun Chondro Ray]** – Lead Developer  
- **[Md Rafiq Mia]** – Backend Developer  
- **[Abdul Al Roman ]** – Frontend Developer  

---

## 📌 Roadmap

- [ ] Setup project base (Next.js + Node.js + MongoDB)  
- [ ] Authentication system  
- [ ] Property listing module  
- [ ] Agent dashboard  
- [ ] Booking system  
- [ ] Admin panel  
- [ ] Payments & monetization  
- [ ] Deployment  

