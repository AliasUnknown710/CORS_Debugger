function runCorsTest() {
  const url = document.getElementById("target-url").value;
  if (!url) return alert("Enter a valid URL");

  fetch(url, {
    method: "OPTIONS",
    headers: {
      "Origin": "https://frontend.example.com",
      "Access-Control-Request-Method": "GET",
      "Access-Control-Request-Headers": "Content-Type"
    }
  })
    .then(res => {
      document.getElementById("options-output").textContent = `Status: ${res.status}\n`;
      const headers = [...res.headers.entries()].filter(([k]) => k.toLowerCase().includes("access-control"));
      headers.forEach(([k, v]) => {
        document.getElementById("options-output").textContent += `${k}: ${v}\n`;
      });
      document.getElementById("raw-headers").textContent = JSON.stringify(Object.fromEntries(res.headers), null, 2);
    })
    .catch(err => {
      document.getElementById("options-output").textContent = `OPTIONS error: ${err}`;
    });

  fetch(url, {
    method: "GET",
    headers: {
      "Origin": "https://frontend.example.com"
    }
  })
    .then(res => {
      document.getElementById("get-output").textContent = `Status: ${res.status}\n`;
      const headers = [...res.headers.entries()].filter(([k]) => k.toLowerCase().includes("access-control"));
      headers.forEach(([k, v]) => {
        document.getElementById("get-output").textContent += `${k}: ${v}\n`;
      });
    })
    .catch(err => {
      document.getElementById("get-output").textContent = `GET error: ${err}`;
    });
}
