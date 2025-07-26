<div align="center">

# 🌮 SwaadBazaar 🛍️

### A smart sourcing platform for street food vendors.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

</div>

---

## 🎯 Problem & Solution

Street vendors face inefficient sourcing, volatile pricing, and wasted time. **SwaadBazaar** solves this by creating a digital marketplace that empowers vendors to:

* 💰 **Save Money** through hyperlocal group buying.
* ⏰ **Save Time** with a streamlined ordering process.
* 🗑️ **Reduce Waste** with AI-powered demand forecasting.
* ✅ **Ensure Quality** via a community-based rating system.

---

## ✨ Key Features

* **👥 Dual Portals:** Separate, tailored interfaces for Vendors and Suppliers.
* **📦 Group Buying:** Pool orders with nearby vendors to unlock bulk pricing.
* **🧠 AI Forecasting:** Predicts weekly raw material needs to optimize purchasing.
* **🗺️ Smart Matchmaking:** Connects vendors to the nearest, best-rated suppliers.
* **⭐ Trust & Ratings:** Transparent feedback system to maintain quality standards.
* **🔔 Real-Time Notifications:** SMS & WhatsApp alerts for all order updates.

---

## 🛠️ Tech Stack

* **Frontend:** **Next.js** & **Tailwind CSS** for a high-performance, responsive UI.
* **Backend:** **Node.js** & **Express.js** for a robust and scalable API.
* **AI Service:** **Python** & **FastAPI** for a high-speed ML microservice.
* **Database & Auth:** **Supabase** providing PostgreSQL, Authentication, and Storage.
* **Hosting:** **Vercel** for the frontend and **Render** for backend services.

---

## 🗄️ Database Schema

| Table Name  | Key Columns                          | Description                               |
| :---------- | :----------------------------------- | :---------------------------------------- |
| `Users`     | `id`, `role`, `location`             | Profiles for vendors, suppliers, admins.  |
| `Products`  | `id`, `name`, `price`, `supplier_id` | All raw materials listed by suppliers.    |
| `Orders`    | `id`, `vendor_id`, `items[]`, `status` | Tracks individual vendor orders.          |
| `GroupOrders`| `id`, `product_id`, `members[]`    | Manages active and completed group buys.  |
| `Reviews`   | `order_id`, `rating`, `comment`      | Ratings and feedback for suppliers.       |

---

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/swaad-bazaar.git](https://github.com/your-username/swaad-bazaar.git)
    cd swaad-bazaar
    ```
2.  **Install dependencies** in the `frontend`, `backend`, and `ml-service` folders.
    ```bash
    npm install
    # or for ML service:
    pip install -r requirements.txt
    ```
3.  **Set up `.env` file** in the backend with your Supabase & Cloudinary credentials.
    ```env
    SUPABASE_URL="[https://your-project-ref.supabase.co](https://your-project-ref.supabase.co)"
    SUPABASE_ANON_KEY="your-public-anon-key"
    JWT_SECRET="your-jwt-secret"
    ```

---

## 🚀 Future Scope

* **Native Mobile App** for an even better on-the-go experience.
* **Logistics Integration** for a complete order and delivery network.
* **Supplier Analytics Dashboard** to show demand trends and insights.
* **Digital Payments & Credit** to streamline transactions.

---

<div align="center">

## 🧑‍💻 Our Team

| Role             | Primary Stack                 |
| :--------------- | :---------------------------- |
| **Frontend Dev 1** | Next.js, Redux                |
| **Frontend Dev 2** | Next.js, React Query          |
| **Backend Dev** | Node.js, Express, Supabase    |
| **AI/ML Dev** | Python, FastAPI, Scikit-learn |
| **UI/UX & PM** | Figma, Supabase               |

</div>
