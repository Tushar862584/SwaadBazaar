# 🌮 SwaadBazaar 🛍️

### A smart sourcing platform empowering street food vendors through hyperlocal group buying and AI-driven inventory management.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)


---

## 🎯 The Problem

Street food vendors are the heart of India's culinary culture, yet they operate on thin margins and face daily operational hurdles. Sourcing raw materials is often inefficient, forcing them to deal with price volatility, inconsistent quality, and the logistical nightmare of visiting crowded wholesale markets. This eats into their valuable time and hard-earned profits.

## 💡 Our Solution

**SwaadBazaar** is a mobile-first web platform designed to be the ultimate digital assistant for every street food vendor. We digitize the supply chain, creating a transparent and efficient ecosystem that directly benefits the vendor.

* **💰 Cost Savings:** By enabling hyperlocal group buying, we give individual vendors the collective bargaining power of a supermarket, unlocking access to wholesale prices.
* **⏰ Time Efficiency:** No more morning trips to the market. Vendors can order everything they need in minutes from their phone, freeing up time to focus on what they do best: cooking and serving customers.
* **🗑️ Reduced Waste:** Our AI-powered forecasting engine analyzes past sales and local trends to predict demand, ensuring vendors buy only what they need, minimizing spoilage and maximizing profit.
* **✅ Quality Assurance:** A community-driven trust and rating system helps vendors identify and build relationships with the most reliable, high-quality suppliers in their area.

---

## ✨ Key Features

* 👥 **Dual-Role Portals:** Seamless interfaces for both Vendors (to order and track) and Suppliers (to manage inventory and sales).
* 📦 **Hyperlocal Group Buying:** Allows multiple vendors in a locality to combine their orders for items like onions or cooking oil into a single large purchase, automatically unlocking bulk discounts.
* 🧠 **AI Demand Forecasting:** A dedicated microservice predicts a vendor's weekly raw material needs. It considers past sales data, day of the week, seasonality, and even local holidays to provide actionable insights.
* 🗺️ **Smart Supplier Matchmaking:** Connects vendors to the nearest, highest-rated suppliers based on their live location and the specific items they need, ensuring fresh produce and fast delivery.
* ⭐ **Trust & Rating System:** After each transaction, vendors can rate suppliers on quality, timeliness, and price. This builds a transparent and self-regulating marketplace.
* 🔔 **Real-Time Notifications:** Instant SMS and WhatsApp alerts for order confirmations, when a group buy target is met, and delivery status updates.
* ⚙️ **Admin Dashboard:** An internal panel for the SwaadBazaar team to onboard and verify suppliers (KYC), resolve disputes, and monitor platform health.

---

## 🤔 Why This Tech Stack?

Our technology choices were guided by the need for rapid development, scalability, and performance—critical for a hackathon.

* **Next.js (Frontend):** Provides server-side rendering for a fast initial page load and SEO benefits, crucial for a public-facing platform. Its file-based routing and component model accelerate development.
* **Node.js & Express (Backend):** The robust, event-driven architecture of Node.js is perfect for handling numerous concurrent API requests. The vast NPM ecosystem allows for quick integration of essential services.
* **FastAPI (AI Microservice):** For our AI model, FastAPI offers blazing-fast performance (on par with Node.js) and automatically generated, interactive API documentation, which is perfect for integrating ML services.
* **Supabase (BaaS):** A fantastic all-in-one solution. It provides a managed PostgreSQL database, instant APIs, user authentication, and file storage out of the box. This drastically reduces backend setup time and complexity.
* **Vercel & Render (Hosting):** These platforms offer seamless, Git-based deployment workflows, allowing us to push code and see it live in minutes without worrying about complex server configuration.

---

## 🗄️ Database Schema Overview

The data is structured relationally in PostgreSQL, managed by Supabase.

| Table Name     | Key Columns                               | Description                                                                 |
| :------------- | :---------------------------------------- | :-------------------------------------------------------------------------- |
| `Users`        | `id`, `name`, `role`, `location`          | Stores user profiles for vendors, suppliers, and admins.                    |
| `Products`     | `id`, `name`, `price`, `supplier_id`      | Contains all raw materials listed by suppliers.                             |
| `Orders`       | `id`, `vendor_id`, `items[]`, `status`    | Tracks individual orders placed by a vendor.                                |
| `GroupOrders`  | `id`, `product_id`, `members[]`, `total_qty` | Manages active and completed group buy pools.                               |
| `Forecasts`    | `vendor_id`, `product_id`, `predicted_qty`| Stores the output from the AI/ML forecasting model for each vendor.         |
| `Reviews`      | `order_id`, `vendor_id`, `supplier_id`, `rating` | Holds the ratings and feedback provided by vendors for suppliers.           |

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/swaad-bazaar.git](https://github.com/your-username/swaad-bazaar.git)
    cd swaad-bazaar
    ```

2.  **Install dependencies for each service** (run in the respective `frontend`, `backend`, `ml-service` folders):
    ```bash
    npm install
    # or for the ML service:
    pip install -r requirements.txt
    ```

3.  **Set up Supabase & Environment Variables:**
    * Create a new project on [Supabase](https://supabase.com/).
    * In your project dashboard, go to `Project Settings` > `API`.
    * Create a `.env` file in the `backend` directory and add your Supabase credentials:
    ```env
    # .env.example

    # Server Port
    PORT=5000

    # Supabase Credentials (from your Supabase Project's API settings)
    SUPABASE_URL="[https://your-project-ref.supabase.co](https://your-project-ref.supabase.co)"
    SUPABASE_ANON_KEY="your-public-anon-key"
    SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" # Keep this secret!

    # JWT Secret for signing tokens
    JWT_SECRET="a_very_strong_and_long_secret_key_for_your_app"

    # Other services
    CLOUDINARY_URL="your_cloudinary_api_url"
    ```

4.  **Run the services:**
    ```bash
    # Run the frontend (in /frontend)
    npm run dev

    # Run the backend (in /backend)
    npm start
    ```

---

## 🚀 Future Scope

* **Mobile App:** Develop a native Android/iOS application for an even more accessible user experience.
* **Logistics Integration:** Partner with local last-mile delivery services to create a fully integrated SwaadBazaar delivery network.
* **Supplier Analytics:** Provide suppliers with a dashboard showing demand trends, popular items, and peak order times in their area.
* **Payment & Credit:** Integrate a complete digital payment gateway and explore micro-credit options for trusted vendors.

---

## 🧑‍💻 Our Team

| Role             | Primary Stack                 | Key Responsibilities                               |
| :--------------- | :---------------------------- | :------------------------------------------------- |
| **Frontend Dev 1** | Next.js, Redux                | Vendor UI, Group Order Flow, Product Listings      |
| **Frontend Dev 2** | Next.js, React Query          | Supplier Dashboard, Admin Panel, Auth Integration  |
| **Backend Dev** | Node.js, Express, Supabase    | REST APIs, Order Logic, Matchmaking, DB Schema     |
| **AI/ML Dev** | Python, FastAPI, Scikit-learn | Demand Forecasting Engine, Model Training & API    |
| **UI/UX & PM** | Figma, Supabase               | Wireframing, User Flow, KYC Logic, Onboarding      |

---

## 📄 License

This project is licensed under the MIT License.
