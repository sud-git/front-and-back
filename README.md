🛍️ Frontend + Backend Project (FakeStore API)

This project demonstrates how to connect a React frontend with a Node.js/Express backend.
The backend fetches data from the FakeStore API
 and exposes it through an endpoint that the frontend consumes.

🚀 Features

Frontend (React + Vite)

Displays products from the backend.

Uses Axios for API requests.

Clean functional components with hooks (useState, useEffect).

Backend (Express + Axios)

Acts as a middleware between frontend and FakeStore API.

Provides a REST endpoint: /api/products.

Uses CORS for cross-origin requests.

📂 Project Structure
project-root/
│
├── backend/

│   ├── server.js 
      # Express server (Node.js)

│   └── package.json

│
├── frontend/

│   ├── src/

│   │   ├── App.jsx   

  # React frontend

│   │   └── main.jsx

│   └── package.json

│

└── README.md

⚙️ Backend Setup (Express)

Go inside the backend folder:

cd backend


Install dependencies:

npm install express axios cors


Run the backend:

node server.js


Open:

http://localhost:3000/ → Welcome message

http://localhost:3000/api/products → Product JSON

⚛️ Frontend Setup (React + Vite)

Go inside the frontend folder:

cd frontend


Install dependencies:

npm install


Run the frontend:

npm run dev


Open:
http://localhost:5173/

🔗 Connecting Frontend to Backend

In App.jsx, update Axios call to use backend API:

useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/products");
    setProducts(response.data);
  };
  fetchData();
}, []);

📌 Example API Response
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg"
  }
]

✅ Tech Stack

Frontend: React + Vite + Axios

Backend: Node.js + Express + Axios + CORS

API Source: FakeStore API

🔮 Future Improvements

Add product detail page.

Add search & filter functionality.

Deploy backend (Heroku/Render) and frontend (Vercel/Netlify).

✍️ Author: Sudhanshu Mishra