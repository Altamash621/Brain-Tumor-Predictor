# 🧠 Brain Tumor Predictor

A deep learning-based web application to classify brain tumors from medical images using a pre-trained model. This project includes both frontend and backend components and provides an end-to-end system for users to upload brain scans and receive classification results.

---

## 🚀 Project Features

- Classifies brain tumors into one of the following categories:
  - Glioma
  - Meningioma
  - Pituitary
  - No Tumor
- Frontend built using **React** + **Tailwind CSS**
- Backend developed using **Flask** with a trained `.keras` model
- User-friendly interface for uploading images and viewing predictions
- Clean folder structure and scalable design

---

## 📁 Project Structure

```
Brain-Tumor-Predictor/
├── backend/
│   ├── app.py
│   ├── model/
│   │   └── brain_model.keras ← (Download separately, see below)
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
├── README.md
└── ...
```

---

## 📥 Download the Trained Model

> ⚠️ GitHub does not allow files over 100MB. The trained model (`brain_model.keras`, ~329MB) must be downloaded manually.

### 🔗 [Click here to download the model](https://drive.google.com/file/d/1rzwZCqzQ6_qUIbcUdMlU7VirFCO1Mw6X/view?usp=sharing)

Once downloaded, place the file in the following location:

```
backend/model/brain_model.keras
```

No changes are needed in the code — just make sure the file path matches.

---

## 🧪 How to Run the Project

### 1. 📦 Backend (Flask)

#### Install dependencies:

```bash
pip install -r requirements.txt
```

#### Run the Flask server:

```bash
python backend/app.py
```

---

### 2. 🌐 Frontend (React + Vite)

#### Navigate to frontend folder and install dependencies:

```bash
cd frontend
npm install
```

#### Start the React development server:

```bash
npm run dev
```

---

## 📸 Sample Screenshot

> _(Optional: Add a screenshot or UI preview here)_

---

## 🛠️ Technologies Used

- Python, Flask
- TensorFlow / Keras
- React.js, Vite
- Tailwind CSS
- Git, GitHub

---

## 📚 Dataset & Model

The model was trained on a brain tumor dataset with four classes (Glioma, Meningioma, Pituitary, No Tumor). It uses a fine-tuned deep learning architecture and is saved in `.keras` format.

---

## 🙋‍♂️ Author

**Altamash Mannikeri**  
Biomedical Engineer | Machine Learning Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/altamash-mannikeri/)  
🌐 [GitHub](https://github.com/Altamash621)

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).
