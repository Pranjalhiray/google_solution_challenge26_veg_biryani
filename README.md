# 🛰️ Smart Resource Allocation (SRA)
### *AI-Powered Crisis Response & Volunteer Orchestration*

[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-blue?style=for-the-badge&logo=google-gemini&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

---

## 🌪️ The Challenge
In times of crisis or community distress, information is often messy, scattered, and unorganized. NGOs and government agencies struggle to process thousands of field reports—ranging from handwritten notes to voice memos—leading to delayed response times and inefficient resource allocation. **SRA solves this by turning raw community chaos into structured, actionable intelligence.**

## 💡 The Solution
**Smart Resource Allocation (SRA)** is an intelligent civic-tech ecosystem built for the **Google Solution Challenge 2026**. It uses a sophisticated Multi-Agent AI Pipeline to ingest multimodal field data and automatically categorize, prioritize, and allocate resources where they are needed most.

### ✨ Key Features
- **🧠 Intelligence Feed:** Real-time ingestion of community reports (Text/Audio/Images).
- **🤖 Gemini-Powered Orchestration:** Automatic extraction of issues, urgency scoring, and task generation using **Gemini 2.5 Flash**.
- **📍 Geospatial Command Center:** A high-performance dashboard for NGOs to visualize "Hot Zones" and manage resource distribution.
- **⚡ Real-time Sync:** Powered by Firebase and Supabase for instantaneous field-to-command-center updates.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | **Angular 17+**, Tailwind CSS (Glassmorphism UI) |
| **Backend** | **Node.js**, Express, Prisma ORM |
| **Database** | **PostgreSQL (Supabase)** with PostGIS for geospatial queries |
| **AI/ML** | **Google Gemini 2.5 Flash**, GCP Vision, Speech-to-Text, Translation |
| **Infrastructure** | **Google Cloud Run** (Serverless), Firebase Hosting |
| **Authentication** | **Firebase Auth** (Google & Email/Password) |

---

## 🧠 The AI "Intelligence" Pipeline
Our proprietary pipeline transforms messy data into structured JSON in milliseconds:
1.  **Ingestion:** Field reports (multimodal) are captured.
2.  **Transcription/OCR:** GCP APIs extract text from images and voice.
3.  **Agentic Synthesis:** **Gemini 2.5 Flash** analyzes the context, determines the "Category" (Water, Health, Infrastructure, etc.), and assigns an "Urgency Score" (1-10).
4.  **Actionable Output:** The system automatically generates a list of "Tasks" and identifies the nearest qualified NGOs.

---

## 🚀 Local Setup Guide

Follow these steps to get the environment running locally for development.

### 📋 Prerequisites
- **Node.js:** v20.x or higher
- **Package Manager:** npm
- **Database:** A PostgreSQL instance (Supabase is used in production)
- **GCP Project:** Enabled Gemini API, Vision API, and Speech-to-Text

### 🛠️ Step-by-Step Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/0xYuvi/google_solution_challenge26_veg_biryani
cd google_solution_challenge26_veg_biryani
```

#### 2. Install Root Dependencies
```bash
npm install
```

#### 3. Environment Configuration
Navigate to the API server and set up your `.env` file:
```bash
cd apps/api-server
cp .env.example .env
# Open .env and add your DATABASE_URL, GEMINI_API_KEY, and Cloudinary keys
```

#### 4. Database Setup (Prisma)
From the root directory, sync your database schema:
```bash
npx prisma migrate dev --name init
```

#### 5. Run with Docker (Alternative)
If you prefer using Docker to manage your database and backend:
```bash
cd apps/api-server
docker-compose up --build
```
*Note: This will spin up the Node.js API and a local PostgreSQL instance.*

#### 6. Run Manually (Best for Frontend Dev)
You can run both apps from the root using workspace commands:

| Command | Action |
| :--- | :--- |
| `npm run dev:api` | Starts the Express Backend (Port 5000) |
| `npm run dev:web` | Starts the Angular Dashboard (Port 4200) |

---

## 🏗️ Technical Architecture
- **Turborepo:** Optimized monorepo management.
- **Agentic AI:** A chain of Gemini-powered agents for data extraction.
- **PostGIS:** Specialized geospatial database for finding nearby help.

---

## 📈 Impact
- **80% Faster** issue categorization compared to manual entry.
- **Real-time** visibility into community distress signals.
- **Data-driven** resource allocation reducing waste and saving lives.

---

<p align="center">
  <i>Developed with precision for the Google Solution Challenge 2026.</i>
</p>