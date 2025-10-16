# 🧪 CORS Debugger

Python script and local dashboard for testing CORS behavior across any API endpoint. Sends both preflight and actual requests, extracts relevant headers, and displays results in a structured HTML interface.

---

## 🔧 Tools Included

| File | Description |
|------|-------------|
| `test_cors.py` | Sends OPTIONS and GET requests with Origin headers. |
| `public/index.html` | Loads and displays CORS results in browser. |
| `public/css/style.css` | Dark theme styling for dashboard. |
| `public/js/dashboard.js` | Runs live CORS tests from browser input. |

---

## 🚀 Usage

### 🔹 CLI Script

1. Edit `test_cors.py`:

   python
   
   TARGET_URL = "https://api.example.com/data"
   
   HEADERS["Origin"] = "https://frontend.example.com"

2. 	Run the script:

   python3 test_cors.py

3. 	Review printed headers:
  Access-Control-Allow-Origin

  Access-Control-Allow-Methods
  
  Access-Control-Allow-Headers

## 🔹 Local Dashboard- Open public/index.html in a browser.


- Enter the target API URL.

  
- Click Run Test to send live OPTIONS and GET requests.

  
- View structured output in:

  
- OPTIONS Response

  
- GET Response

  
- Raw Headers

---

🧠 Notes- Dashboard uses browser fetch with custom Origin headers.

- Script uses Python requests for full control and automation.

  
- Extend with POST, PUT, or custom header sets as needed.

  
- Ideal for debugging frontend/backend integration issues, especially across domains.
