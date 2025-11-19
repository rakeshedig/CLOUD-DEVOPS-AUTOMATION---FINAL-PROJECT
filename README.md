# 🌟 Full-Stack Mini Project: Flask + Nginx + Docker + Kubernetes

Welcome to my **Mini Kubernetes Project**! 🚀  
This repo contains a full-stack app deployed on **Minikube**, showcasing a frontend served with **Nginx** and a backend API. Perfect for learning containerization, Kubernetes deployments, and local cloud setups. 💻☁️

---

## 📂 Project Structure

```
frontend_app/
├── Dockerfile              # Frontend Dockerfile 🏗️
├── index.html              # Main HTML page 📝
├── style.css               # Styling 🎨
├── script.js               # Frontend logic ⚡
├── static/                 # Images & assets 🖼️
│   └── sample.jpg
└── README.md               # Project overview 📖

backend_app/
├── Dockerfile              # Backend Dockerfile 🏗️
├── app.py                  # Flask API 🐍
└── requirements.txt        # Python dependencies 📦

k8s/
├── frontend-deployment.yaml  # Frontend Deployment & Service 🧩
└── backend-deployment.yaml   # Backend Deployment & Service 🧩
```

---

## ⚡ Features

- 🔹 Frontend served via **Nginx** with static assets  
- 🔹 Backend API with **Flask**  
- 🔹 Kubernetes deployment with **Minikube**  
- 🔹 Multiple pods & NodePort services for scaling  
- 🔹 Hands-on experience with **Docker image building** and `imagePullPolicy`  

---

## 🚀 How to Run Locally

1. Start Minikube:

```bash
minikube start

2.	Build Docker images inside Minikube:
eval $(minikube -p minikube docker-env)
docker build -t frontend-local:latest ./frontend_app
docker build -t backend-local:latest ./backend_app

3.	Deploy to Kubernetes:
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

4.	Open frontend:
minikube service frontend

🌈 Notes
	•	Make sure to use local images or imagePullPolicy: IfNotPresent to avoid delays. ⏱️
	•	Static assets must be inside the Docker image to appear correctly. 🖼️
  
