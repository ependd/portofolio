(function () {
  var $ = function (s, r) {
      return (r || document).querySelector(s);
    },
    $$ = function (s, r) {
      return [].slice.call((r || document).querySelectorAll(s));
    };
  var isMobile = function () {
    return matchMedia("(max-width:720px)").matches;
  };

  // KUMPULAN DATA PROYEK
  var P = [
    {
      // informasi projek
      c: ["data"],
      i: "sales.svg",
      t: "Dashboard Sales CV Usaha Dagang Kita",
      m: "Proyek Pribadi, CV Usaha Dagang Kita, 2026",
      tags: ["Data"],
      stack: ["Excel", "Data Studio / Looker Studio"],

      // link portofolio
      demo: "https://datastudio.google.com/u/0/reporting/1b5a94ad-df90-4804-9d8d-780a3b3b636d/page/PrqBG",

      // summary projek
      masalah:
        "Data transaksi penjualan 2024-2025 tersimpan dalam tabel mentah, sehingga sulit melihat performa penjualan, profit, dan produk unggulan tanpa rekap manual.",
      solusi:
        "Dashboard interaktif yang merangkum penjualan, profit, dan volume produk dalam satu halaman. Tersedia filter tahun, bulan, jenis penjualan, dan metode pembayaran, serta visualisasi tren bulanan, kontribusi kategori, dan 5 produk terlaris.",
      peran:
        "Menghitung metrik dengan calculated field, merancang visualisasi, dan membangun dashboard.",
      hasil: {
        teks: "Dashboard merangkum penjualan sebesar Rp750,5 juta dengan profit Rp143,6 juta dari 64.568 produk terjual. Temuan utamanya:",
        poin: [
          "Penjualan naik sekitar 54% dari Rp295,9 juta (2024) menjadi Rp454,6 juta (2025).",
          "Minuman menjadi kategori terkuat dengan kontribusi 36% (Rp272,6 juta).",
          "Grosir memberi kontribusi terbesar (41,7%), diikuti Online (39,8%) dan Eceran (18,6%).",
          "Pembayaran didominasi tunai (85%).",
        ],
      },
    },
    {
      // informasi projek
      c: ["data"],
      i: "analisis.svg",
      t: "Pembersihan data PHK perusahaan dengan SQL",
      m: "Proyek Pribadi, Data Cleaning, 2025",
      tags: ["Data"],
      stack: ["PostgreSQL", "SQL", "DBeaver"],

      // link portofolio
      github: "https://github.com/ependd/cleaning_data",

      // summary projek
      masalah:
        "Data PHK perusahaan masih mentah, ada baris duplikat, penulisan kategori yang tidak konsiten, kolom tanggal bertipe teks, serta nilai kosong. Kondisi ini membuat hasil analisis tidak akurat jika langsung dipakai.",
      solusi:
        "Proses pembersihan data dan standarisasi dengan SQL di PostgreSQL melalui DBeaver, dikerjakan pada tabel staging agar data asli tetap utuh. ",
      peran:
        "Merancang alur pembersihan dari awal sampai akhir: membuat tabel staging, mendeteksi duplikat dengan ROW_NUMBER dan CTE, menstandarkan data dengan TRIM dan UPDATE, memvalidasi format tanggal dengan regex sebelum konversi, serta mengisi nilai kosong dengan self join.",
      hasil: {
        teks: "Tabel hasil pembersihan siap dianalisis lebih lanjut. Ringkasannya:",
        poin: [
          "Baris data berkurang dari 2.361 menjadi 1.995 setelah duplikat dan baris kosong dihapus.",
          "366 baris duplikat berhasil diidentifikasi dan dihapus.",
          "Variasi penulisan industri dan negara diseragamkan menjadi satu kategori yang konsisten.",
          "Kolom tanggal berubah dari teks menjadi tipe DATE sehingga bisa dianalisis per periode.",
        ],
      },
    },
    {
      // informasi proyek
      c: ["web"],
      i: "monitoring.svg",
      t: "Monitoring penggunaan dana BOS",
      m: "Skripsi, SMPN 40 Kota Bekasi, 2026",
      tags: ["Web", "Data"],
      stack: ["Laravel", "Naive Bayes", "Whale Optimization Algorithm"],

      // link portofolio

      github: "https://github.com/ependd/dana_bos",

      // summary projek
      masalah:
        "Laporan keuangan di ARKAS tidak bisa dilihat kembali setelah disubmit. Hal ini menyulitkan saat audit apabila bendahara tidak membuat catatan tersendiri. Selain itu, penentuan barang yang layak diajukan masih subjektif, dan pengajuan kebutuhan oleh guru dan staf tata usaha masih dilakukan secara konvensional.",
      solusi:
        "Sistem pendamping ARKAS berbasis web. Sebelum dimasukkan ke ARKAS, setiap permohonan diuji dengan algoritma Naive Bayes yang dioptimasi menggunakan Whale Optimization Algorithm, dengan data latih dari data historis beberapa tahun terakhir. Hasil pengujiannya mengklasifikasikan permohonan sebagai wajar atau menyimpang. Setiap guru dan staf tata usaha memiliki akun sendiri untuk mengajukan kebutuhan, sehingga riwayat pengajuan tercatat dan bisa ditelusuri saat audit.",
      peran:
        "Menganalisis kebutuhan, merancang aplikasi dan basis data, serta melakukan pengujian bersama bendahara.",
      hasil: {
        teks: "Sistem berhasil mengklasifikasikan permohonan kebutuhan dengan akurasi 91,76% setelah dioptimasi, naik dari 86,67% pada Naive Bayes tanpa optimasi. Pengujian memakai 150 data dengan validasi silang 5 lipatan. Temuan utamanya:",
        poin: [
          "Pada pengujian akhir, Whale Optimization Algorithm memilih 5 fitur yang paling berpengaruh dan menyisihkan 2 fitur yang kurang relevan, sehingga model menjadi lebih sederhana dan akurat. Fitur terpilih dapat berbeda pada setiap proses pelatihan karena WOA bersifat stokastik dan bergantung pada data.",
          "Guru dan staf tata usaha kini mengajukan kebutuhan secara digital melalui akun masing-masing, tanpa pengajuan manual, dan dapat memantau status pengajuannya.",
          "Bendahara memiliki bahan acuan yang objektif saat memasukkan kebutuhan ke ARKAS.",
          "Seluruh pengajuan tercatat per akun, sehingga bendahara memiliki riwayat yang dapat ditunjukkan saat audit.",
        ],
      },
    },

    {
      // informasi proyek
      c: ["web"],
      i: "kesehatan.svg",
      t: "Website puskesmas dengan panel admin",
      m: "Laravel 12 dan Filament, 2026",
      tags: ["Web"],
      stack: ["Excel", "Data Studio / Looker Studio"],

      // link portofolio
      demo: "https://lookerstudio.google.com/",
      github: "https://github.com/username/dashboard-sales",

      // summary projek
      masalah:
        "Informasi layanan puskesmas perlu mudah ditemukan warga, dan petugas perlu cara sederhana untuk memperbarui isinya.",
      solusi:
        "Situs publik untuk pengunjung dan panel admin Filament agar petugas mengelola konten tanpa menyentuh kode.",
      peran: null,
      hasil: null,
    },
  ];
  var todo = function (t) {
    return '<span class="todo">' + t + "</span>";
  };
  var pb = $("#proyekBody");
  var bar = $("#proyekBar");
  var CAT = {
    data: ["Data", "Analisis, anomali, dan pengolahan data"],
    web: ["Web", "Aplikasi web dan sistem informasi"],
  };
  var tt = $("#w-proyek .t");
  function setBar(cat, label, back) {
    bar.hidden = false;
    bar.innerHTML =
      '<button class="backbtn" type="button"><span aria-hidden="true">‹</span>' +
      label +
      '</button><span class="vsep"></span><div class="chips" role="group" aria-label="Kategori">' +
      Object.keys(CAT)
        .map(function (c) {
          return (
            '<button class="chip" type="button" data-c="' +
            c +
            '" aria-pressed="' +
            (c === cat) +
            '">' +
            CAT[c][0] +
            "</button>"
          );
        })
        .join("") +
      "</div>";
    $(".backbtn", bar).onclick = back;
    $$(".chip", bar).forEach(function (b) {
      b.onclick = function () {
        listView(b.dataset.c);
      };
    });
  }
  function rootView() {
    tt.textContent = "proyek/";
    bar.hidden = true;
    var n = function (c) {
      return P.filter(function (p) {
        return p.c.indexOf(c) > -1;
      }).length;
    };
    pb.innerHTML =
      '<h2>Proyek</h2><p class="hint">Buka folder untuk melihat proyeknya. ' +
      '</p><div class="folders">' +
      Object.keys(CAT)
        .map(function (c) {
          return (
            '<button class="fold" data-c="' +
            c +
            '"><svg class="pi" aria-hidden="true"><use href="#i-folder"/></svg><b>' +
            CAT[c][0] +
            "</b><i>" +
            n(c) +
            " proyek</i><small>" +
            CAT[c][1] +
            "</small></button>"
          );
        })
        .join("") +
      "</div>";
    $$(".fold", pb).forEach(function (b) {
      b.onclick = function () {
        listView(b.dataset.c);
      };
    });
  }
  function listView(c) {
    tt.textContent = "proyek/" + c + "/";
    pb.innerHTML =
      "<h2>" +
      CAT[c][0] +
      '</h2><p class="hint">Klik proyek untuk membaca studi kasusnya.</p><div class="list">' +
      P.map(function (p, k) {
        return p.c.indexOf(c) > -1
          ? '<button class="item" data-k="' +
              k +
              '">' +
              '<div class="th"><img src="icons/' +
              p.i +
              '" alt="" class="project-icon"></div>' +
              "<div><b>" +
              p.t +
              "</b><span>" +
              p.m +
              "</span></div></button>"
          : "";
      }).join("") +
      "</div>";
    setBar(c, "Semua proyek", rootView);
    $$(".item", pb).forEach(function (b) {
      b.onclick = function () {
        caseView(+b.dataset.k, c);
      };
    });
    pb.scrollTop = 0;
  }
  function hasilHtml(h) {
    if (!h)
      return (
        "<p>" +
        todo("Isi hasil nyata, misalnya waktu rekap turun dari X menjadi Y.") +
        "</p>"
      );
    if (typeof h === "string") return "<p>" + h + "</p>";
    return (
      "<p>" +
      h.teks +
      '</p><ul class="poin">' +
      h.poin
        .map(function (x) {
          return "<li>" + x + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function caseView(k, cat) {
    var p = P[k];
    pb.innerHTML =
      '<div class="case"><h2>' +
      p.t +
      '</h2><p class="hint">' +
      p.m +
      "</p>" +
      '<div class="tags">' +
      p.tags
        .map(function (t) {
          return "<span>" + t + "</span>";
        })
        .join("") +
      "<span>Stack:</span>" +
      (p.stack || [])
        .map(function (s) {
          return "<span>" + s + "</span>";
        })
        .join("") +
      "</div>" +
      "<h3>MASALAH</h3><p>" +
      p.masalah +
      "</p><h3>SOLUSI</h3><p>" +
      p.solusi +
      "</p>" +
      "<h3>PERAN SAYA</h3><p>" +
      (p.peran || todo("Jelaskan bagian yang kamu kerjakan.")) +
      "</p>" +
      "<h3>HASIL</h3>" +
      hasilHtml(p.hasil) +
      '<div class="row">' +
      (p.demo
        ? '<a class="btn" href="' +
          p.demo +
          '" target="_blank" rel="noopener noreferrer">Demo</a>'
        : "") +
      (p.github
        ? '<a class="btn o" href="' +
          p.github +
          '" target="_blank" rel="noopener noreferrer">GitHub</a>'
        : "") +
      "</div></div>";
    setBar(cat, "Daftar", function () {
      listView(cat);
    });
    pb.scrollTop = 0;
  }
  rootView();

  /* jendela */
  var z = 10,
    placed = {},
    pos = {
      proyek: [190, 70],
      tentang: [300, 110],
      cv: [420, 80],
      kontak: [560, 100],
      sertifikat: [240, 90],
    };
  function win(id) {
    return $("#w-" + id);
  }
  function front(w) {
    w.style.zIndex = ++z;
  }
  function sync() {
    $$(".dock [data-open]").forEach(function (b) {
      var w = win(b.dataset.open);
      b.setAttribute("aria-pressed", String(!w.hidden));
    });
  }
  function open(id) {
    var w = win(id);
    if (!w) return;
    var wasHidden = w.hidden;
    if (isMobile()) {
      $$(".win").forEach(function (o) {
        if (o !== w) o.hidden = true;
      });
      if (wasHidden) {
        w.style.left = "8px";
        w.style.top = "56px";
      }
    }
    w.hidden = false;
    if (!placed[id] && !isMobile()) {
      var p = pos[id];
      w.style.left =
        Math.min(p[0], Math.max(10, innerWidth - w.offsetWidth - 20)) + "px";
      w.style.top = p[1] + "px";
      placed[id] = 1;
    }
    front(w);
    sync();
  }
  function toggle(id) {
    var w = win(id);
    if (!w.hidden && w.style.zIndex == z) {
      w.hidden = true;
      sync();
    } else open(id);
  }
  $$("[data-open]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.closest(".dock")) toggle(b.dataset.open);
      else open(b.dataset.open);
    });
  });
  $$(".win").forEach(function (w) {
    w.addEventListener("pointerdown", function () {
      front(w);
    });
    $$("[data-close],[data-min]", w).forEach(function (b) {
      b.onclick = function () {
        w.hidden = true;
        sync();
      };
    });
    var tb = $(".tb", w),
      dx,
      dy,
      drag = false;
    tb.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button")) return;
      drag = true;
      dx = e.clientX - w.offsetLeft;
      dy = e.clientY - w.offsetTop;
      tb.setPointerCapture(e.pointerId);
    });
    tb.addEventListener("pointermove", function (e) {
      if (!drag) return;
      w.style.left =
        Math.max(0, Math.min(innerWidth - 120, e.clientX - dx)) + "px";
      w.style.top =
        Math.max(34, Math.min(innerHeight - 100, e.clientY - dy)) + "px";
    });
    tb.addEventListener("pointerup", function () {
      drag = false;
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var v = $$(".win")
        .filter(function (w) {
          return !w.hidden;
        })
        .sort(function (a, b) {
          return b.style.zIndex - a.style.zIndex;
        })[0];
      if (v) {
        v.hidden = true;
        sync();
      }
    }
  });

  /* form: kirim langsung lewat Web3Forms */
  var form = $("#mailForm"),
    fmsg = $("#formMsg");
  form.onsubmit = function (e) {
    e.preventDefault();
    var btn = $(".send", form);
    btn.disabled = true;
    btn.textContent = "Mengirim…";
    fmsg.textContent = "";
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (d) {
        if (!d.success) throw new Error(d.message);
        form.reset();
        fmsg.textContent = "Terkirim. Terima kasih, saya akan segera membalas.";
      })
      .catch(function () {
        fmsg.textContent = "Gagal mengirim. Silakan coba lagi sebentar lagi.";
      })
      .then(function () {
        btn.disabled = false;
        btn.textContent = "Kirim pesan";
      });
  };

  /* tanggal dan jam */
  $("#tgl").textContent = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  function tick() {
    var t = new Date()
      .toLocaleTimeString("id-ID", { hour12: false })
      .replace(/\./g, ":");
    $("#clk").innerHTML =
      t.slice(0, 5) + '<span class="sec">' + t.slice(5) + "</span>";
  }
  tick();
  setInterval(tick, 1000);

  /* boot */
  var boot = $("#boot"),
    done = false,
    pct = 0,
    msgs = ["Menyusun jendela…", "Memuat proyek…", "Menyiapkan CV…", "Siap."];
  function finish() {
    if (done) return;
    done = true;
    boot.classList.add("off");
    setTimeout(function () {
      boot.style.display = "none";
    }, 600);
  }
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
    finish();
  } else {
    var iv = setInterval(function () {
      pct = Math.min(100, pct + 4);
      $("#pbar").style.width = pct + "%";
      $("#ppct").textContent = pct + "%";
      $("#pmsg").textContent = msgs[Math.min(3, Math.floor(pct / 34))];
      if (pct >= 100) {
        clearInterval(iv);
        setTimeout(finish, 300);
      }
    }, 90);
    ["keydown", "pointerdown"].forEach(function (ev) {
      addEventListener(ev, finish, { once: true });
    });
  }
})();
