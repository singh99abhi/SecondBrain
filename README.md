# SecondBrain - Personal Knowledge Management System

## 📖 Overview

SecondBrain is a full-stack web application designed to help users organize and manage their digital content, links, and knowledge in one centralized location. Think of it as your personal digital brain where you can store, categorize, and share your valuable content.

## 🎥 Project Overview

Check out this video for a visual overview of the project:

[![Project Overview](https://img.youtube.com/vi/eDUrvSymFxA/maxresdefault.jpg)](https://youtu.be/eDUrvSymFxA)

## 🏗️ Architecture

This project follows a modern full-stack architecture with:

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT-based authentication
- **Styling**: Tailwind CSS for modern, responsive design

## 📁 Project Structure

```
SecondBrain/
├── brainly/                 # Backend API server
│   ├── src/
│   │   ├── index.ts        # Main server entry point
│   │   ├── db.ts           # Database models and connection
│   │   ├── middleware.ts   # Authentication middleware
│   │   ├── utils.ts        # Utility functions
│   │   └── config.ts       # Configuration
│   ├── prisma/             # Database schema (PostgreSQL)
│   └── package.json        # Backend dependencies
├── brainlynewfe/           # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── icons/          # Icon components
│   │   ├── assets/         # Static assets
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # React entry point
│   └── package.json        # Frontend dependencies
└── README.md               # This file
```

## ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Secure password handling
- Protected routes

### 📝 Content Management

- Add various types of content (links, articles, videos, etc.)
- Organize content with titles and types
- Tag-based categorization system
- View all your saved content in a dashboard

### 🎨 Modern UI/UX

- Clean, responsive design with Tailwind CSS
- Modal-based content creation
- Card-based content display
- Intuitive navigation with sidebar

### 🔗 Sharing Capabilities

- Generate shareable links for your content
- Share your entire knowledge base with others
- Public access to shared content

### 🛠️ Developer Experience

- TypeScript for type safety
- Hot reloading with Vite
- ESLint for code quality
- Modular component architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (running locally or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd SecondBrain
   ```

2. **Set up the Backend**

   ```bash
   cd brainly
   npm install
   ```

3. **Set up the Frontend**

   ```bash
   cd ../brainlynewfe
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the `brainly` directory:

   ```env
   DATABASE_URL="mongodb://localhost:27017/secondbrain"
   JWT_SECRET="your-secret-key-here"
   ```

5. **Start the Development Servers**

   **Backend (Terminal 1):**

   ```bash
   cd brainly
   npm run dev
   ```

   The backend will run on `http://localhost:3000`

   **Frontend (Terminal 2):**

   ```bash
   cd brainlynewfe
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## 📚 API Endpoints

### Authentication

- `POST /api/v1/signup` - Register a new user
- `POST /api/v1/signin` - Login user

### Content Management

- `POST /api/v1/content` - Add new content (requires authentication)
- `GET /api/v1/content` - Get user's content (requires authentication)
- `DELETE /api/v1/content` - Delete content (requires authentication)

### Sharing

- `POST /api/v1/brain/share` - Generate shareable link (requires authentication)

## 🗄️ Database Schema

### Users Collection

```javascript
{
  _id: ObjectId,
  username: String (unique),
  password: String
}
```

### Content Collection

```javascript
{
  _id: ObjectId,
  title: String,
  link: String,
  type: String,
  tags: [ObjectId], // References to Tag collection
  userId: ObjectId  // Reference to User collection
}
```

### Links Collection (for sharing)

```javascript
{
  _id: ObjectId,
  hash: String,
  userId: ObjectId (unique) // Reference to User collection
}
```

## 🎯 Usage Guide

1. **Registration/Login**

   - Visit the application and sign up with a username and password
   - Or login if you already have an account

2. **Adding Content**

   - Click the "Add Content" button on the dashboard
   - Fill in the title, link, and select the content type
   - Save to add it to your knowledge base

3. **Managing Content**

   - View all your content in the dashboard
   - Content is displayed in cards with type indicators
   - Use the sidebar for navigation

4. **Sharing**
   - Click "Share Brain" to generate a shareable link
   - Share the link with others to give them access to your content

## 🛠️ Development

### Available Scripts

**Backend (`brainly/`):**

- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start the production server
- `npm run dev` - Build and start in development mode

**Frontend (`brainlynewfe/`):**

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Structure

The application follows a clean architecture pattern:

- **Components**: Reusable UI elements in `brainlynewfe/src/components/`
- **Pages**: Main page components in `brainlynewfe/src/pages/`
- **Hooks**: Custom React hooks in `brainlynewfe/src/hooks/`
- **API**: RESTful endpoints in `brainly/src/index.ts`
- **Database**: Mongoose models in `brainly/src/db.ts`

## 🔧 Configuration

### Backend Configuration

- Database connection: MongoDB (configurable in `db.ts`)
- JWT secret: Set in environment variables
- CORS: Enabled for frontend communication

### Frontend Configuration

- Backend URL: Configured in `config.ts`
- Vite configuration: Custom build settings
- Tailwind CSS: Custom styling configuration

## 🚀 Deployment

### Backend Deployment

1. Build the TypeScript code: `npm run build`
2. Set up environment variables on your hosting platform
3. Deploy the `dist/` folder to your server
4. Ensure MongoDB is accessible

### Frontend Deployment

1. Build the React app: `npm run build`
2. Deploy the `dist/` folder to a static hosting service
3. Update the backend URL in production configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🔮 Future Enhancements

- [ ] Advanced search and filtering
- [ ] Content categories and folders
- [ ] Export/import functionality
- [ ] Mobile app version
- [ ] Collaborative features
- [ ] Rich text editor for notes
- [ ] Integration with external services

---

**Built with ❤️ using React, Node.js, and MongoDB**
