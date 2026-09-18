(() => {
  "use strict";
  const config = window.PRODO_CONFIG || {};
  const email = typeof config.email === "string" ? config.email.trim() : "";
  const validEmail = /^[^\s@<>"?&#]+@[^\s@<>"?&#]+\.[^\s@<>"?&#]+$/.test(email);
  if (validEmail) {
    const subject = "How we check Amazon packaging updates";
    const body = "Hi Murgesh,\n\nHere’s how our team confirms packaging updates are live on Amazon:\n\n";
    const cta = document.getElementById("email-cta");
    const address = document.getElementById("email-address");
    cta.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    address.href = `mailto:${email}`;
    address.textContent = email;
    cta.hidden = false;
    address.hidden = false;
    document.getElementById("contact-pending").hidden = true;
  }
  if (typeof config.founderBio === "string" && config.founderBio.trim()) {
    document.getElementById("founder-bio").textContent = config.founderBio.trim();
  }
  try {
    const url = new URL(config.founderProfileUrl);
    if (url.protocol === "https:" && !url.username && !url.password) {
      const link = document.getElementById("founder-profile");
      link.href = url.href;
      link.hidden = false;
    }
  } catch { /* An optional missing or invalid profile stays hidden. */ }
})();
