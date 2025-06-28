from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware  # <-- import this
from keras.models import load_model
from PIL import Image
import numpy as np
import io

app = FastAPI()

# Enable CORS middleware here
origins = [
    "http://localhost:5173",  # your React dev server origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # allow this origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = load_model("model/brain_model.keras")

# Define classes
class_names = ["glioma", "meningioma", "pituitary", "no_tumor"]

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    
    # Resize the image to the model’s input shape (e.g., 224x224)
    image = image.resize((224, 224))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    # Predict
    predictions = model.predict(image_array)[0]
    predicted_class = class_names[np.argmax(predictions)]
    confidence = float(np.max(predictions))

    return JSONResponse({
        "predicted_class": predicted_class
    })
