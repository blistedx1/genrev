# Genrev Interio Pvt Ltd — Full-Stack 3D Architectural Web Presence

An editorial, luxury full-stack 3D web platform built for **Genrev Interio Pvt Ltd**, directly adapting the iconic minimal layout, editorial typography, and structure of `go.arch` with a client-focused luxury brand identity, interactive Three.js 3D spatial models, dynamic MongoDB/Express backend API, and a built-in live Admin CMS console.

---

## Architecture Overview

```
┌─────────────────────────┐          ┌──────────────────────────┐          ┌──────────────────────┐
│  Vite + React Frontend   │  ◄────►  │   Express REST API       │  ◄────►  │   MongoDB / Fallback │
│  (Three.js + Tailwind)  │          │   (Port 5000)            │          │   Data Store         │
└─────────────────────────┘          └──────────────────────────┘          └──────────────────────┘
      (Port 3000)
```

- **Frontend (`/frontend`)**:
  - React 19 + Vite + Tailwind CSS v4.
  - Three.js 3D WebGL engine:
    - **Hero 3D Scene**: Procedural architectural pavilion with mouse parallax camera tilt, reflections, and gold ambient ring sculpture.
    - **Interactive 3D Studio Configurator**: Orbit controls (drag to rotate 360°, scroll to zoom), lighting environment switch (Daylight, Golden Dusk, Nocturne), material switch (Statuario Marble, Smoked Walnut, Monolithic Concrete), wireframe blueprint mode, and interactive architectural hotspots.
  - Authentic `go.arch` layout adaptation:
    - Fixed left vertical rail (`01 / 04`, slide arrows, social links, `GENREV INTERIO 2026`).
    - Editorial serif headers (*Playfair Display* / *Cinzel*) with crisp sans & monospace numbers.
    - Watermark typography (`About`, `Projects`, `Clients`, `Contacts`).
    - Expanding 4-panel vertical accordion projects showcase + 3-column project grid with category filters and high-res modal case studies.
    - Textured metallic milestone number (`10+ Years`).
    - Client logo grid with testimonial slider and ratings.
    - Real-time "Get In Touch" inquiry form with instant backend validation.
    - Built-in **Admin CMS Console**: View incoming leads, publish new projects, and manage testimonials in real time.

- **Backend (`/backend`)**:
  - Node.js + Express REST API on port `5000`.
  - Mongoose models for `Project`, `Testimonial`, `Contact`, `Client`.
  - Dual-mode resilient database: Automatically connects to MongoDB via `MONGODB_URI` if configured; otherwise gracefully falls back to an embedded JSON database (`backend/data/store.json`) with zero setup required.
  - Pre-seeded with luxury architecture and interior design projects, clients, and testimonials.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health and branding status |
| `GET` | `/api/projects` | List all projects (supports `?category=...&featured=true`) |
| `GET` | `/api/projects/:id` | Retrieve single project case study |
| `POST` | `/api/projects` | Publish a new project to the database |
| `DELETE` | `/api/projects/:id` | Delete a project |
| `GET` | `/api/testimonials` | Retrieve active client reviews and ratings |
| `POST` | `/api/testimonials` | Submit a client testimonial |
| `GET` | `/api/clients` | Retrieve partner and client list |
| `POST` | `/api/contact` | Submit user inquiry from website form |
| `GET` | `/api/contacts` | Retrieve all received inquiries for the Admin CMS |

---

## Running Locally

### 1. Start the Backend API
```bash
cd backend
npm install
npm start
```
*The Express API will start on `http://localhost:5000`.*

To connect to MongoDB Atlas, add a `.env` file in `backend/`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/genrev_interio?retryWrites=true&w=majority
```

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
*The web presence will be available at `http://localhost:3000`.*

---

## Building for Production
```bash
cd frontend
npm run build
```
Outputs optimized static assets to `frontend/dist/`.
