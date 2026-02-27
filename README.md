# Mamun The Nomad - Travel Blog Platform

A modern travel blog and photo gallery platform built for showcasing travel adventures across Bangladesh. Originally designed as a full-stack application with dynamic content management, currently deployed as a static website on Vercel's Hobby plan.

## 🌟 Project Overview

This is a personal travel blog created for my uncle to document and share his travel experiences. The platform showcases stunning visual storytelling with a beautiful, responsive design. 

**Current Status**: The website is live and functional as a static site with pre-loaded content. The Supabase backend (database, authentication, and storage) was paused on June 24, 2024, after 90+ days of inactivity and cannot be restored through the dashboard. However, all previously uploaded images and content remain accessible through the static deployment.

## ✨ Key Features

### Currently Active (Static Website)
- **Responsive Homepage** with hero section and featured content
- **Photo Gallery** with 80+ travel photos and lightbox viewer for immersive browsing
- **Static Content Display** showcasing destinations and blog posts
- **Interactive Contact Form** with Gmail integration
- **Mobile-First Design** with smooth navigation and animations
- **Dark/Light Theme Support** using next-themes
- **Social Media Integration** (Facebook)
- **Optimized Images** served from `/public/images` directory

### Originally Built Features (Currently Inactive)
The codebase includes a fully functional admin panel and backend system that is currently inactive due to Supabase being paused:

- **Secure Authentication** with Supabase Auth
- **Content Management System** for destinations and blog posts
- **Image Upload** with Supabase Storage integration
- **CRUD Operations** (Create, Read, Update, Delete) for all content
- **Real-time Preview** of uploaded images
- **Dual Content Types**: Travel Destinations and Blog Posts
- **Password Reset** functionality
- **Responsive Admin Interface** optimized for desktop and mobile

### Technical Implementation
- **Server-Side Rendering (SSR)** for optimal SEO and performance
- **API Routes** architecture (ready for backend reactivation)
- **Type-Safe** development with TypeScript
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
- **Supabase** - Backend as a Service (Currently Paused)
  - PostgreSQL database (inactive)
  - Authentication (inactive)
  - Storage for images (inactive)
  - Real-time capabilities (inactive)
- **Next.js API Routes** - Serverless functions (ready for reactivation)
- **Static Images** - Currently served from `/public/images` directory

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

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### To Reactivate Backend Features (Optional)

If you want to restore the full dynamic functionality:

1. **Restore Supabase Database**:
   - Download the backup from the paused Supabase project
   - Create a new Supabase project
   - Restore the backup to the new project
   - Or restore locally using the backup

2. **Set up environment variables**:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_new_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_new_supabase_anon_key
```

3. **Configure Supabase**:
   - Create tables: `travel_destinations` and `blog_posts`
   - Set up Storage bucket for images
   - Configure authentication
   - Set up Row Level Security policies

4. The admin panel at `/admin` will become functional again

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

The project is deployed on Vercel's Hobby plan as a static website:

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch
3. Static images are served from the `/public/images` directory

### Build Command
```bash
npm run build
```

### Environment Variables (Vercel)
Currently not required for static deployment. If reactivating Supabase:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📱 Features Breakdown

### Current User Experience Flow (Static)
1. Visitor lands on homepage with hero image
2. Browses 81+ pre-loaded travel photos from Bangladesh
3. Clicks on photos to view in full-screen lightbox
4. Navigates to gallery for complete collection
5. Views static blog posts and destinations
6. Contacts via integrated Gmail form

### Original Content Management Workflow (When Backend Active)
1. Admin logs in with credentials
2. Selects content type (Destination or Blog Post)
3. Uploads image and fills in details
4. Submits form - content is saved to Supabase
5. Content appears instantly on public website
6. Can edit or delete existing content anytime

**Note**: The admin panel code exists at `/admin` but requires Supabase reactivation to function.

## 🎯 Unique Selling Points

1. **Production-Ready Codebase**: Full-stack architecture with admin panel ready for reactivation
2. **Static Performance**: Lightning-fast load times with pre-optimized images
3. **Scalable Architecture**: Easy to restore backend and add new features
4. **Cost-Effective**: Currently runs entirely on Vercel's free tier
5. **SEO-Friendly**: Proper meta tags and semantic HTML
6. **Mobile-Optimized**: Responsive design works perfectly on all devices
7. **Rich Content**: 81+ high-quality travel photos from Bangladesh
8. **Professional Design**: Modern UI with smooth animations and transitions

### Technical Achievements
- **Dual Content System**: Separate management for destinations and blog posts (in code)
- **Instant Preview**: Real-time image preview before upload (in code)
- **Smart ID Generation**: Automatic slug creation from titles (in code)
- **Type-Safe Development**: Full TypeScript implementation
- **Component Library**: Extensive shadcn/ui integration

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📈 Future Enhancements

### Immediate Opportunities
- [ ] Reactivate Supabase backend for dynamic content management
- [ ] Restore admin panel functionality
- [ ] Enable real-time content updates

### Long-term Features
- [ ] Add search functionality for destinations and blog posts
- [ ] Implement comments system for blog posts
- [ ] Add analytics dashboard for admin
- [ ] Create email newsletter subscription
- [ ] Add multi-language support (Bengali + English)
- [ ] Implement advanced image filters and editing
- [ ] Add social sharing buttons
- [ ] Create mobile app version
- [ ] Add map integration showing travel locations

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is private and created for personal use.

## 👨‍💻 Developer

Built with ❤️ for Mamun The Nomad

## � Project History

- **Initial Development**: Built as a full-stack application with Supabase backend
- **June 24, 2024**: Supabase project paused due to 90+ days inactivity
- **Current State**: Deployed as static website with 81+ pre-loaded images
- **Data Status**: All Supabase data remains intact and can be restored

## �🙏 Acknowledgments

- **shadcn/ui** for beautiful component library
- **Vercel** for seamless deployment and free hosting
- **Supabase** for backend infrastructure (during active phase)
- **Next.js** team for amazing framework

---

**Live Website**: [Deployed on Vercel]
**Admin Panel**: `/admin` (requires Supabase reactivation)
**Contact**: almamunurrashid1973@gmail.com

**Note**: This project demonstrates full-stack development capabilities with Next.js, TypeScript, and Supabase, currently running in static mode. The complete backend infrastructure code is production-ready and can be reactivated by restoring the Supabase database.
