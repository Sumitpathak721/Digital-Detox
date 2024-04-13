from transformers import BertForSequenceClassification, BertTokenizer, TextClassificationPipeline
import pytesseract
from flask import Flask,jsonify,request
from werkzeug.utils import secure_filename
import os
from PIL import Image
import asyncio


# Initializing app
app = Flask(__name__)



# Model load

model_path = "JungleLee/bert-toxic-comment-classification"
toxicTokenizer = BertTokenizer.from_pretrained(model_path)
toxicModel = BertForSequenceClassification.from_pretrained(model_path, num_labels=2)


# Constrainsts
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Configuration
app.config['UPLOAD_FOLDER'] = 'uploads/'
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


def imageToText(filename):
    img = Image.open("./uploads/"+filename)
    text = pytesseract.image_to_string(img)
    return text


def predictToxic(text):
    pipeline = TextClassificationPipeline(model=toxicModel, tokenizer=toxicTokenizer)
    out = pipeline(text)
    return out


@app.route('/api/toxicScore', methods=['POST'])
async def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    if file and ('.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        text = imageToText(filename)
        await asyncio.sleep(2)
        res = predictToxic(text)[0]
        print(res)
        
        return jsonify({'prediction':res['label']}), 200
    else:
        return jsonify({'error': 'Invalid file type'}), 400



if __name__ == '__main__':
    app.run(debug=True)