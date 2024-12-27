const scenarios = {
    oil_spill: {
        title: "Kebocoran Minyak",
        actions: [
            { 
                text: "Kendalikan kebocoran", 
                result: "Anda segera mengambil tindakan dengan menutup sumber kebocoran menggunakan teknologi penyegelan darurat. Bahan penyerap digunakan untuk membersihkan minyak di permukaan air. Meskipun langkah ini mencegah kerusakan lingkungan yang lebih besar, pembersihan ekosistem laut membutuhkan waktu berminggu-minggu." 
            },
            { 
                text: "Evakuasi area", 
                result: "Anda memastikan semua pekerja dan penduduk di sekitar lokasi kebocoran dievakuasi dengan aman. Langkah ini menyelamatkan banyak nyawa dari paparan bahan beracun. Namun, kerusakan lingkungan tetap memerlukan perhatian segera." 
            },
            { 
                text: "Abaikan", 
                result: "Kebocoran dibiarkan tanpa penanganan, menyebabkan pencemaran yang meluas. Habitat laut rusak parah, dan dampaknya pada ekosistem bisa bertahan selama beberapa dekade. Reputasi perusahaan juga hancur akibat kritik publik." 
            },
        ],
    },
    explosion: {
        title: "Ledakan",
        actions: [
            { 
                text: "Hubungi bantuan", 
                result: "Tim darurat tiba dengan cepat setelah Anda menghubungi mereka. Kebakaran akibat ledakan berhasil dikendalikan, dan korban luka mendapat perawatan medis. Kerusakan fisik pada fasilitas memerlukan waktu berbulan-bulan untuk diperbaiki." 
            },
            { 
                text: "Bantu korban", 
                result: "Anda dengan sigap membantu korban di lokasi ledakan. Beberapa nyawa berhasil diselamatkan dengan pertolongan pertama. Namun, risiko ledakan lanjutan tetap tinggi hingga bantuan profesional tiba." 
            },
            { 
                text: "Lari menjauh", 
                result: "Anda memprioritaskan keselamatan diri dan berhasil menjauh dari lokasi ledakan. Sayangnya, tidak ada yang menangani situasi, sehingga korban terlantar dan kerusakan menyebar tanpa kontrol." 
            },
        ],
    },
    fire: {
        title: "Kebakaran",
        actions: [
            { 
                text: "Padamkan api", 
                result: "Dengan menggunakan alat pemadam kebakaran, Anda berhasil memadamkan api sebelum menyebar ke area lain. Tindakan cepat ini mencegah kerugian lebih besar dan menyelamatkan fasilitas penting." 
            },
            { 
                text: "Evakuasi gedung", 
                result: "Semua penghuni gedung berhasil dievakuasi ke tempat aman. Namun, kebakaran tetap berlangsung hingga tim pemadam kebakaran tiba, menyebabkan kerusakan pada properti." 
            },
            { 
                text: "Abaikan", 
                result: "Kebakaran menyebar dengan cepat, menghancurkan seluruh gedung. Tidak ada tindakan pencegahan yang diambil, sehingga kerugian finansial dan risiko terhadap nyawa manusia meningkat drastis." 
            },
        ],
    },
    flood: {
        title: "Banjir",
        actions: [
            { 
                text: "Bangun tanggul", 
                result: "Tanggul darurat dibangun menggunakan karung pasir dan bahan lain. Ini membantu mengurangi kerusakan pada fasilitas utama, meskipun beberapa area tetap terdampak banjir." 
            },
            { 
                text: "Evakuasi warga", 
                result: "Semua warga berhasil dievakuasi ke tempat yang lebih tinggi. Langkah ini menyelamatkan nyawa, tetapi kerusakan properti akibat banjir tetap signifikan." 
            },
            { 
                text: "Abaikan", 
                result: "Tanpa tindakan pencegahan, banjir menghancurkan infrastruktur dan menyebabkan evakuasi besar-besaran. Kerugian finansial dan sosial meningkat." 
            },
        ],
    },
    earthquake: {
        title: "Gempa Bumi",
        actions: [
            { 
                text: "Berlindung", 
                result: "Anda berlindung di bawah meja yang kokoh, menghindari reruntuhan. Setelah gempa berakhir, Anda memastikan area aman sebelum membantu orang lain." 
            },
            { 
                text: "Evakuasi", 
                result: "Anda memandu orang lain ke zona aman di luar bangunan. Evakuasi dilakukan dengan tertib, menyelamatkan banyak nyawa dari potensi reruntuhan." 
            },
            { 
                text: "Abaikan", 
                result: "Tidak ada tindakan yang diambil, sehingga banyak orang terjebak di dalam bangunan yang runtuh. Dampaknya adalah kerugian besar pada nyawa dan properti." 
            },
        ],
    },
    chemical_leak: {
        title: "Kebocoran Bahan Kimia",
        actions: [
            { 
                text: "Tutup kebocoran", 
                result: "Anda berhasil menutup sumber kebocoran dengan alat khusus. Langkah ini mencegah penyebaran zat beracun, tetapi pembersihan area tetap diperlukan." 
            },
            { 
                text: "Evakuasi area", 
                result: "Semua orang di area terpapar berhasil dievakuasi ke tempat aman. Langkah ini menyelamatkan banyak nyawa dari risiko kesehatan jangka panjang." 
            },
            { 
                text: "Abaikan", 
                result: "Bahan kimia menyebar ke udara dan air, menyebabkan risiko kesehatan serius bagi masyarakat sekitar. Pemulihan membutuhkan waktu lama dan biaya besar." 
            },
        ],
    },
    cyber_attack: {
        title: "Serangan Siber",
        actions: [
            { 
                text: "Blokir akses", 
                result: "Anda segera memutus koneksi jaringan untuk menghentikan serangan. Meskipun data penting tetap aman, sistem perlu diperiksa sebelum diaktifkan kembali." 
            },
            { 
                text: "Hubungi tim keamanan", 
                result: "Tim keamanan siber berhasil mengidentifikasi sumber serangan dan memulihkan sistem. Namun, serangan ini menyebabkan gangguan sementara pada operasi." 
            },
            { 
                text: "Abaikan", 
                result: "Data penting dicuri, menyebabkan kerugian finansial dan reputasi yang besar. Pemulihan membutuhkan waktu dan sumber daya yang signifikan." 
            },
        ],
    },
    gas_leak: {
        title: "Kebocoran Gas",
        actions: [
            { 
                text: "Tutup sumber gas", 
                result: "Kebocoran gas berhasil dihentikan dengan menutup sumbernya. Langkah ini mencegah potensi ledakan besar." 
            },
            { 
                text: "Evakuasi area", 
                result: "Semua orang berhasil dievakuasi dari area terpapar. Keselamatan menjadi prioritas utama, meskipun kebocoran tetap perlu ditangani segera." 
            },
            { 
                text: "Abaikan", 
                result: "Kebocoran gas tidak ditangani, menyebabkan ledakan besar yang merusak properti dan mengancam nyawa." 
            },
        ],
    },
    power_outage: {
        title: "Pemadaman Listrik",
        actions: [
            { 
                text: "Aktifkan generator", 
                result: "Generator cadangan berhasil diaktifkan, memulihkan daya untuk operasi penting. Kerusakan lebih lanjut dapat dihindari." 
            },
            { 
                text: "Laporkan ke pihak terkait", 
                result: "Pihak terkait merespons dengan cepat, memperbaiki masalah dan memulihkan pasokan listrik dalam waktu singkat." 
            },
            { 
                text: "Abaikan", 
                result: "Pemadaman berlangsung lama, menyebabkan gangguan besar pada operasi dan kerugian finansial." 
            },
        ],
    },
    storm: {
        title: "Badai",
        actions: [
            { 
                text: "Amankan properti", 
                result: "Properti berhasil diamankan dengan menutup jendela dan memperkuat struktur. Kerusakan akibat badai dapat diminimalkan." 
            },
            { 
                text: "Evakuasi warga", 
                result: "Warga berhasil dievakuasi ke tempat aman sebelum badai melanda. Langkah ini menyelamatkan nyawa." 
            },
            { 
                text: "Abaikan", 
                result: "Badai menghancurkan properti dan menyebabkan korban jiwa karena tidak ada tindakan pencegahan." 
            },
        ],
    },
    terror_attack: {
        title: "Serangan Teroris",
        actions: [
            { 
                text: "Hubungi otoritas", 
                result: "Anda segera menghubungi pihak berwenang, memberikan informasi detail tentang situasi. Tim keamanan tiba tepat waktu untuk mengendalikan keadaan dan mengevakuasi korban. Meskipun ada beberapa kerusakan, respons cepat Anda membantu meminimalkan jumlah korban jiwa." 
            },
            { 
                text: "Evakuasi orang-orang", 
                result: "Anda memimpin evakuasi dengan sigap, mengarahkan orang-orang ke tempat yang aman. Langkah ini menyelamatkan banyak nyawa, tetapi tanpa intervensi pihak berwenang, pelaku tetap menjadi ancaman hingga bantuan tiba." 
            },
            { 
                text: "Sembunyi dan tunggu", 
                result: "Anda memilih untuk bersembunyi di tempat aman hingga situasi mereda. Meskipun Anda selamat, tidak ada tindakan yang diambil untuk membantu orang lain atau melaporkan situasi. Serangan berlanjut tanpa hambatan hingga otoritas akhirnya tiba." 
            },
        ],
    },
};

function loadScenario() {
    const select = document.getElementById('scenario-select');
    const selectedScenario = scenarios[select.value];
    const actionsDiv = document.getElementById('actions');
    const buttonsDiv = document.getElementById('buttons');
    const title = document.getElementById('scenario-title');

    if (selectedScenario) {
        title.textContent = selectedScenario.title;
        buttonsDiv.innerHTML = '';
        selectedScenario.actions.forEach((action) => {
            const button = document.createElement('button');
            button.textContent = action.text;
            button.onclick = () => showResult(action.result);
            buttonsDiv.appendChild(button);
        });
        actionsDiv.classList.remove('hidden');
    } else {
        actionsDiv.classList.add('hidden');
    }
}

function showResult(result) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = result;
}
