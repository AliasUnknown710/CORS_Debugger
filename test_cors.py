import requests

TARGET_URL = "https://api.example.com/data"  # Replace with actual endpoint
HEADERS = {
    "Origin": "https://frontend.example.com",
    "Access-Control-Request-Method": "GET",
    "Access-Control-Request-Headers": "Content-Type"
}

def test_options():
    print("[✓] Sending preflight OPTIONS request...")
    res = requests.options(TARGET_URL, headers=HEADERS)
    print(f"Status: {res.status_code}")
    for k, v in res.headers.items():
        if "access-control" in k.lower():
            print(f"{k}: {v}")

def test_get():
    print("[✓] Sending GET request with Origin header...")
    res = requests.get(TARGET_URL, headers={"Origin": HEADERS["Origin"]})
    print(f"Status: {res.status_code}")
    for k, v in res.headers.items():
        if "access-control" in k.lower():
            print(f"{k}: {v}")

if __name__ == "__main__":
    test_options()
    print("\n---\n")
    test_get()
