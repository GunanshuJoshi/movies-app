# 🎬 Movie App

A React.js-based movie app that allows users to discover trending and popular movies, search for their favorite films using a debounced search, and view the top 5 most searched movies. The app fetches movie data from the [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) and stores search analytics in an [Appwrite](https://cloud.appwrite.io/) database.

## 🚀 Features

✅ **Movie Listings** – Displays trending and popular movies fetched from the TMDB API.  
🔍 **Search Functionality** – Users can search for movies using a **debounced** input to optimize API calls.  
🔥 **Trending Searches** – Tracks and displays the **top 5 most searched movies** by users.  
🎨 **Responsive UI** – Styled with **Tailwind CSS** for a modern and mobile-friendly design.  
⚡ **Fast & Optimized** – Built with **React + Vite** for a smooth and efficient experience.  
🗄️ **Appwrite Database** – Stores search analytics and trending movie data.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend/DB:** Appwrite
- **API:** TMDB API

## 🔧 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GunanshuJoshi/movies-app.git
   cd movie-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add:

   ```plaintext
    VITE_TMDPB_API_KEY=your_tmdb_api_key
    VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
    VITE_APPWRITE_DB=your_appwrite_database_id
    VITE_APPWRITE_COLLECTION=your_appwrite_collection_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
