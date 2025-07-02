# Career Assistant Stack

A comprehensive AI-powered career navigation platform built with Next.js and React. This application provides intelligent career guidance through market analysis, resume optimization, skill development recommendations, and interactive coaching features.

## 🚀 Features

### Core Functionality
- **Multi-Agent Career Assistant**: Specialized AI agents for different career aspects
- **Job Market Analysis**: Real-time job trends, salary data, and demand analytics
- **Resume Analysis & Optimization**: AI-powered resume scoring and improvement suggestions
- **Skill Gap Analysis**: Personalized skill assessment and development roadmap
- **Course Recommendations**: Curated learning paths based on career goals
- **Interactive Career Chat**: AI coaching with conversation history
- **Career Path Visualization**: Data-driven charts and progress tracking

### Key Components
- **Market Research Agent**: Analyzes job trends and market demands
- **Resume Optimization Agent**: Provides detailed resume feedback and scoring
- **Learning Path Agent**: Recommends courses and skill development
- **Career Coach Chat**: Interactive AI assistant for career guidance

## 🛠️ Technologies

### Frontend Stack
- **Next.js 15.2.4** - React framework with App Router
- **React 19.0.0** - UI library with latest features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### UI Components
- **Radix UI** - Accessible component primitives
  - Avatar, Progress, Scroll Area, Tabs, Slot components
- **Lucide React** - Modern icon library
- **Recharts** - Data visualization and charting
- **Class Variance Authority** - Component variant management

### Development Tools
- **ESLint** - Code linting and formatting
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js (version 20 or higher)
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Ragha02/Career_Asisstant_Stack.git
cd Career_Asisstant_Stack
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open the application**
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Getting Started
1. **Skills Assessment**: Enter your current skills and target role
2. **Choose Your Agent**: Select from specialized career assistance modes:
   - Research Agent: Market analysis and job trends
   - Resume Agent: Resume optimization and scoring
   - Learning Agent: Course recommendations and skill development
   - Coach Agent: Interactive career guidance

### Core Features

#### Job Market Analysis
- View trending job roles with growth percentages
- Analyze salary trends over time
- Explore job demand indicators
- Interactive charts showing market data

#### Resume Optimization
- Upload resume for AI analysis
- Get detailed scoring (current implementation shows 78% baseline)
- Receive specific improvement recommendations
- Track optimization progress

#### Skill Development
- Input current skills for gap analysis
- Receive personalized course recommendations
- Browse curated learning paths with ratings and pricing
- Track learning progress and relevance scores

#### Interactive Career Chat
- Real-time conversation with AI career coach
- Contextual advice based on your profile
- File upload capabilities for document analysis
- Conversation history and continuity

## 📊 Data Features

### Job Market Insights
- Monthly demand trends
- Salary progression data
- Top 5 trending roles with growth metrics
- Industry-specific analytics

### Course Database
- Curated course recommendations
- Provider information and ratings
- Duration and pricing details
- Relevance scoring based on career goals

### Analytics Dashboard
- Progress tracking visualizations
- Skill development metrics
- Career milestone monitoring
- Interactive data charts

## 🔧 Development

### Project Structure
```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main career navigator interface
│   ├── loading.tsx         # Loading state component
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # Reusable UI components
│       ├── card.tsx        # Card component system
│       ├── button.tsx      # Button variants
│       ├── input.tsx       # Form inputs
│       ├── chart.tsx       # Data visualization
│       └── ...             # Additional UI components
├── lib/
│   └── utils.ts            # Utility functions
└── package.json            # Dependencies and scripts
```

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Key Components
- **CareerNavigator**: Main dashboard component with tabbed interface
- **Chart Components**: Data visualization for trends and analytics
- **UI Components**: Comprehensive design system with Radix UI
- **Alert System**: User feedback and notification components

## 🎨 Design System

### Typography
- **Geist Sans**: Primary font family
- **Geist Mono**: Monospace font for code elements

### Component Variants
- Multiple button styles (default, outline, secondary, ghost)
- Card layouts with headers, content, and actions
- Progress indicators and loading states
- Responsive tab navigation
- Interactive form elements

## 🚀 Future Enhancements

Based on the code structure, potential expansions include:
- Integration with real job market APIs
- Advanced resume parsing and analysis
- Machine learning-powered recommendations
- Social features and career networking
- Mobile application development
- Enhanced data visualization options

## 📝 License

This project is private as indicated in the package.json configuration.

## 🤝 Contributing

This appears to be a private project. For contribution guidelines, please contact the repository owner.

---

**Note**: This documentation is based on source code analysis. Some features may be in development or require additional configuration for full functionality.
