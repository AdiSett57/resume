const scriptURL =
  "https://script.google.com/macros/s/AKfycby-MTPb7SBec17jyaZMuLkaC2ronog7RUNnfcnkA5AAIFUPtTJ1qlgVLsVMw5DIQ9kx/exec";
const form = document.getElementById("myForm");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("error_message");
const loading = document.getElementById("loading-btn");
const btn_normal = document.getElementById("btn-normal");

loading.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loading.style.display = "inline-block";
  successMsg.style.display = "none";
  btn_normal.style.display = "none";
  errorMsg.style.display = "none";

  const data = {
    nama: form.nama.value,
    email: form.email.value,
    subject: form.subject.value,
    pesan: form.pesan.value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors", // Wajib jika kamu pakai Apps Script tanpa CORS
  })
    .then(() => {
      loading.style.display = "none";
      successMsg.style.display = "inline-block";
      btn_normal.style.display = "inline-block";
      form.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    })
    .catch((error) => {
      loading.style.display = "none";
      errorMsg.html(error.message);
      errorMsg.style.display = "block";
      console.error("Error!", error.message);
    });
});

// Tahun lahir
const tahunLahir = 1997;

// Ambil tahun saat ini
const tahunSekarang = new Date().getFullYear();

// Hitung usia
const usia = tahunSekarang - tahunLahir;

// Tampilkan usia ke elemen span
document.getElementById("usia").textContent = usia;
