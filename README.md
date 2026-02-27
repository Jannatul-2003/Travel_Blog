# Mamun The Nomad - Travel Blog Platform

A modern, full-stack travel blog and photo gallery platform built for showcasing travel adventures across Bangladesh. This project features a beautiful public-facing website with an integrated admin panel for content management.

## 🌟 Project Overview

This is a personal travel blog created for my uncle to document and share his travel experiences. The platform combines stunning visual storytelling with robust content management capabilities, deployed on Vercel's Hobby plan for reliable, scalable hosting.

## ✨ Key Features

### Public Website
- **Responsive Homepage** with hero section and featured content
- **Photo Gallery** with lightbox viewer for immersive photo browsing
- **Blog System** with individual post pages and rich content display
- **Interactive Contact Form** with Gmail integration
- **Mobile-First Design** with smooth navigation and animations
- **Dark/Light Theme Support** using next-themes
- **Social Media Integration** (Facebook)

### Admin Panel
- **Secure Authentication** with Supabase Auth
- **Content Management System** for destinations and blog posts
- **Image Upload** with Supabase Storage integration
- **CRUD Operations** (Create, Read, Update, Delete) for all content
- **Real-time Preview** of uploaded images
- **Dual Content Types**: Travel Destinations and Blog Posts
- **Password Reset** functionality
- **Responsive Admin Interface** optimized for desktop and mobile

### Technical Highlights
- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **API Routes** for secure backend operations
- **Type-Safe** development with TypeScript
- **Database Integration** with Supabase PostgreSQL
- **Image Optimization** with Next.js Image component
- **Form Validation** with React Hook Form and Zod
- **Toast Notifications** for user feedback

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Backend & Database
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Authentication
  - Storage for images
  - Real-time capabilities
- **Next.js API Routes** - Serverless functions

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Deployment
- **Vercel** - Hosting platform (Hobby plan)
- **Git** - Version control

## 📁 Project Structure

```
├── app/
│   ├── admin/              # Admin panel pages
│   │   ├── login/          # Admin login
│   │   ├── reset-password/ # Password reset
│   │   └── admin-content.tsx # Main admin interface
│   ├── api/                # API routes
│   │   ├── content/        # Content CRUD operations
│   │   └── upload-image/   # Image upload handler
│   ├── blog/               # Blog pages
│   │   └── [slug]/         # Dynamic blog post pages
│   ├── gallery/            # Photo gallery
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Navigation component
│   ├── photo-lightbox.tsx  # Image viewer
│   └── theme-provider.tsx  # Theme context
├── lib/
│   ├── auth.ts             # Authentication utilities
│   ├── supabase.ts         # Supabase client
│   ├── content.ts          # Content type definitions
│   └── database.types.ts   # Database TypeScript types
├── hooks/
│   ├── useAuth.ts          # Authentication hook
│   └── use-toast.ts        # Toast notification hook
└── public/
    └── images/             # Static images
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Supabase account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mamun-the-nomad
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase:
   - Create a new Supabase project
   - Create tables: `travel_destinations` and `blog_posts`
   - Set up Storage bucket for images
   - Configure authentication

5. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Database Schema

### travel_destinations
```sql
- id (text, primary key)
- title (text)
- location (text)
- description (text)
- full_description (text, nullable)
- image (text)
- created_at (timestamp)
```

### blog_posts
```sql
- id (text, primary key)
- title (text)
- date (text)
- excerpt (text)
- content (text, nullable)
- image (text)
- created_at (timestamp)
```

## 🎨 Design Features

- **Modern UI/UX** with smooth transitions and hover effects
- **Responsive Grid Layouts** that adapt to all screen sizes
- **Image Optimization** with lazy loading and blur placeholders
- **Accessible Components** following WCAG guidelines
- **Consistent Color Scheme** with emerald/teal accent colors
- **Typography Hierarchy** for improved readability

## 🔐 Security Features

- **Protected Admin Routes** with authentication middleware
- **Secure API Endpoints** with request validation
- **Environment Variables** for sensitive data
- **Row Level Security** in Supabase
- **HTTPS** enforced on production

## 🌐 Deployment

The project is deployed on Vercel's Hobby plan:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Build Command
```bash
npm run build
```

### Environment Variables (Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📱 Features Breakdown

### Content Management Workflow
1. Admin logs in with credentials
2. Selects content type (Destination or Blog Post)
3. Uploads image and fills in details
4. Submits form - content is saved to Supabase
5. Content appears instantly on public website
6. Can edit or delete existing content anytime

### User Experience Flow
1. Visitor lands on homepage with hero image
2. Browses featured destinations and blog posts
3. Clicks on photos to view in lightbox
4. Navigates to gallery for full collection
5. Reads blog posts with rich content
6. Contacts via integrated Gmail form

## 🎯 Unique Selling Points

1. **Dual Content System**: Separate management for destinations and blog posts
2. **Instant Preview**: Real-time image preview before upload
3. **Smart ID Generation**: Automatic slug creation from titles
4. **Optimized Performance**: Server-side rendering with static optimization
5. **Scalable Architecture**: Easy to add new features and content types
6. **Cost-Effective**: Runs on free/hobby tier services
7. **SEO-Friendly**: Proper meta tags and semantic HTML
8. **Offline-Ready**: Progressive enhancement approach

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📈 Future Enhancements

- [ ] Add search functionality for destinations and blog posts
- [ ] Implement comments system for blog posts
- [ ] Add analytics dashboard for admin
- [ ] Create email newsletter subscription
- [ ] Add multi-language support
- [ ] Implement advanced image filters and editing
- [ ] Add social sharing buttons
- [ ] Create mobile app version

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is private and created for personal use.

## 👨‍💻 Developer

Built with ❤️ for Mamun The Nomad

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful component library
- **Vercel** for seamless deployment
- **Supabase** for backend infrastructure
- **Next.js** team for amazing framework

---

**Live Website**: [Deployed on Vercel]
**Admin Panel**: `/admin`
**Contact**: almamunurrashid1973@gmail.com
