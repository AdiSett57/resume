document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.getElementById("horizontalScroll");
  if (!scroller) {
    console.error("Element #horizontalScroll tidak ditemukan!");
    return;
  }

  const sectionFiles = [
    "page/hero.html",
    "page/intro.html",
    "page/educations.html",
    "page/skills.html",
    "page/experience.html",
    "page/portofolio.html",
    "page/contact.html",
  ];

  // Load semua file HTML dan tempel apa adanya
  Promise.all(
    sectionFiles.map((f) =>
      fetch(f)
        .then((res) => (res.ok ? res.text() : `<div>Gagal load ${f}</div>`))
        .catch(() => `<div>Error fetch ${f}</div>`)
    )
  )
    .then((htmls) => {
      scroller.innerHTML = htmls.join("");
    })
    .catch((err) => {
      console.error("Promise.all error:", err);
    });

  // Update tanggal nav
  const tglNav = document.getElementById("tgl-nav");
  if (tglNav) {
    tglNav.textContent = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
});
