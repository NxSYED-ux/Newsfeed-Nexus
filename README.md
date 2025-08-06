# 🌐 Newsfeed Nexus | React News Dashboard

A feature-rich news aggregation platform built with React, Redux Toolkit, and Tailwind CSS that delivers real-time global headlines from multiple sources.

![App Preview](./public/logo192.png) <!-- Replace with actual screenshot -->

## ✨ Key Features

- **📰 Multi-Source News Aggregation**  
  Fetch headlines from NewsAPI, Reddit, and other public APIs
- **🌙 Dark/Light Mode Toggle**  
  Customizable UI themes with persistent settings
- **🔍 Advanced Search**  
  Filter by keywords, date ranges, and categories
- **🗺️ Location-Based Filtering**  
  View country-specific news with automatic geolocation
- **⚡ Optimized Performance**  
  RTK Query caching for fast, efficient data fetching
- **📱 Fully Responsive**  
  Mobile-first design with Tailwind CSS

## 🛠️ Tech Stack

| Category       | Technologies                                                                                     |
|----------------|--------------------------------------------------------------------------------------------------|
| **Frontend**   | React 18, Redux Toolkit, RTK Query                                                               |
| **Styling**    | Tailwind CSS, Framer Motion                                                                      |
| **Routing**    | React Router v6                                                                                  |
| **API**        | NewsAPI.org + 3rd party integrations                                                             |
| **Testing**    | Jest, React Testing Library                                                                      |

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16.x
- npm ≥8.x or yarn
- NewsAPI key (free tier available)

### Installation
```bash
# Clone repository
git clone https://github.com/NxSYED-ux/Newsfeed-Nexus
cd Newsfeed-Nexus

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Add your API keys in .env.local

# Start development server
npm start
