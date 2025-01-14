# Real-Time Collaborative Text Editor

## 📖 Overview
The **Real-Time Collaborative Text Editor** is a web-based application designed to enable seamless multi-user collaboration on documents. It provides an intuitive platform for real-time editing, secure access, and advanced text formatting features—ideal for professional, educational, and creative purposes.

---

## 🌟 Features

- 🖊️ **Real-Time Collaboration**: Simultaneous multi-user editing with live updates.
- 🔐 **Secure User Authentication**: Email-based sign-up and login functionality.
- 📝 **Rich Text Formatting**: Options for bold, italic, underline, lists, and text alignment.
- 💾 **Autosave**: Periodic automatic saving to prevent data loss.
- 📥 **Export to .docx**: Download documents for offline access.
- 🔄 **Real-Time Synchronization**: Instant propagation of changes across all users.

---

## 🛠️ Technology Stack

### Frontend:
- **Quill.js**: Rich text editor framework
- **HTML5, CSS3, JavaScript**: Custom scripts and responsive design

### Backend:
- **Django**: Server-side logic and authentication
- **Django Channels**: WebSocket support for real-time updates
- **Redis**: Message broker for low-latency communication

### Database:
- **PostgreSQL**: Storage for user data and documents

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Python 3.8+
- Node.js 14+
- Redis
- PostgreSQL
- Git

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/destinyson7/Real-Time-Collaborative-Text-Editor.git
   cd Real-Time-Collaborative-Text-Editor
   ```

2. **Set Up a Virtual Environment**:
   ```bash
   python -m venv venv
   ```

3. **Activate the Virtual Environment**:
   - On **Linux/MacOS**:
     ```bash
     source venv/bin/activate
     ```
   - On **Windows**:
     ```bash
     venv\Scripts\activate
     ```

4. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   npm install
   ```

5. **Set Up PostgreSQL**:
   ```sql
   CREATE DATABASE collab_editor_db;
   CREATE USER my_pg_user WITH PASSWORD 'my_password';
   GRANT ALL PRIVILEGES ON DATABASE collab_editor_db TO my_pg_user;
   ```

6. **Run Migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. **Start Redis**:
   ```bash
   redis-server
   ```

### Running the Application
1. **Start the Backend**:
   ```bash
   uvicorn collaborative_editor.asgi:application --host 127.0.0.1 --port 8000 --reload
   ```

2. **Start the Frontend**:
   ```bash
   npm start
   ```

3. **Access the App**:  
   Open your browser and navigate to [http://127.0.0.1:8000](http://127.0.0.1:8000).

---

## 📂 File Structure

```plaintext
📦 Real-Time-Collaborative-Text-Editor
├── collaborative_editor/    # Django project configuration
├── editor/                  # Backend logic, WebSocket consumers, and views
├── staticfiles/             # Compiled frontend assets (CSS, JS)
├── templates/               # HTML templates for UI
└── README.md                # Project documentation
```

---

## 🧪 Testing Plan

- **Functionality Testing**: Multi-user collaboration, text formatting, authentication.
- **Unit Testing**: Test individual components and backend APIs.
- **Integration Testing**: Verifying interactions between frontend and backend.
  

---

## 🎯 Future Enhancements

- 🖼️ Add support for multimedia embedding (images, videos).
- 📝 Enable inline comments for better collaboration.
- 🌐 Extend browser compatibility and responsiveness.

---

## 👨‍💻 Contributors

- **Ananya RajGirish**  
- **Himangi Parekh**

---


