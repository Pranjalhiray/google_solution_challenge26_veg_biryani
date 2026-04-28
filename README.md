<h1 align="center">🌱 [Smart Resource Allocation] Data-Driven Volunteer Coordination for Social Impact</h1>

<p align="center">
  <em>An intelligent civic-tech monorepo built for the Google Solution Challenge 2026.</em>
</p>

---

## 🚀 The Problem

Local social groups and NGOs collect a lot of important information about community needs through paper surveys and field reports. However, this valuable data is often scattered across different places, making it hard to see the biggest problems clearly.

## 🎯 Objective

Design a powerful system that gathers scattered community information to clearly show the most urgent local needs. Build a smart way to quickly match and connect available volunteers with the specific tasks and areas where they are needed most.

## 🛠 Tech Blueprint

This project leverages a modern **Turborepo** monorepo architecture, splitting concerns across specialized applications:

*   **`apps/api-server`**: The brain of the operation. An Express.js backend using Prisma, PostgreSQL (Supabase with PostGIS), and Firebase Admin. It orchestrates a chain of AI agents (GCP Speech-to-Text, Vision API, Translation, Gemini) to structure messy field data.
*   **`apps/web-client`**: The NGO Administrator dashboard built with **Angular 17+** and TailwindCSS. Admins use this to review verified issues, approve volunteers, and monitor analytics.
*   **`apps/mobile-client`**: The field reporting tool built with **Flutter**. Volunteers use this to capture multimodal reports (audio, image, text) and receive location-based task assignments via push notifications.

## 🧠 How The AI Pipeline Works

1.  **Ingestion:** Multimodal data is uploaded to Google Cloud Storage.
2.  **Transcription & OCR:** Google Cloud Speech-to-Text and Vision API extract raw text.
3.  **Normalization:** Google Translation API standardizes everything to a common language.
4.  **Compression:** Abstractive summarization via `facebook/bart-large-cnn`.
5.  **Structuring:** The **Gemini API** takes the compressed context and outputs a clean JSON with `category`, `urgency_score`, and `priority`.

## 📍 Geospatial Volunteer Matching

Once an issue is structured, our PostGIS database queries for the nearest available NGOs and volunteers matching the required skills and trust scores. We use Firebase Cloud Messaging to send real-time alerts.

## 💻 Developer Setup

Ensure you have Node.js 20+, Docker, and Flutter 3.x installed.

### 1. Backend API (`apps/api-server`)

```bash
cd apps/api-server
cp .env.example .env # Configure your Firebase, Supabase, and GCP keys
npm install
npx prisma migrate deploy
npm run dev
```

### 2. Web Dashboard (`apps/web-client`)

```bash
cd apps/web-client
cp src/environments/environment.example.ts src/environments/environment.ts
npm install
npm run start
```

### 3. Mobile App (`apps/mobile-client`)

```bash
cd apps/mobile-client
flutter pub get
flutter run
```

## 🚢 Deployment

*   **API Server:** Containerized via Docker and deployed automatically to **Google Cloud Run**.
*   **Web Dashboard:** Built via Vite and hosted on Firebase Hosting.
*   **Mobile Clients:** Built to APK/IPA formats for Android and iOS respectively.

<br />

<p align="center">
  <i>Built with ❤️ for the Google Solution Challenge 2026.</i>
</p>