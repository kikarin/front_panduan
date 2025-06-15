export const allArticlesData: Record<string, any> = {
  "cara-submit-jurnal-di-ojs": {
    category: "OJS",
    title: "Cara Submit Jurnal di OJS",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Kamu bisa submit jurnal lewat menu Author → New Submission...</p>
        <h2>Langkah-langkah:</h2>
        <ol className="list-decimal list-inside">
          <li>Login sebagai Author</li>
          <li>Klik New Submission</li>
          <li>Ikuti langkah pengisian hingga selesai</li>
        </ol>
      </>
    ),
  },
  "cara-mengatasi-ojs-logout-sendiri": {
    category: "OJS",
    title: "Cara Mengatasi OJS Logout Sendiri Melalui Setting Session",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Masalah ini biasanya terjadi karena pengaturan session timeout yang terlalu pendek.</p>
        <ul className="list-disc list-inside">
          <li>Buka file `config.inc.php`</li>
          <li>Atur `session_lifetime` jadi lebih panjang</li>
          <li>Restart web server</li>
        </ul>
      </>
    ),
  },
  "cara-membuat-journal-di-ojs": {
    category: "OJS",
    title: "Cara Membuat Journal di OJS (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Untuk membuat jurnal baru, login sebagai Admin dan akses menu Site Admin → Hosted Journals.</p>
        <ul className="list-disc list-inside">
          <li>Klik “Create Journal”</li>
          <li>Masukkan nama, path, dan deskripsi</li>
          <li>Simpan dan atur user role</li>
        </ul>
      </>
    ),
  },
  "cara-membuat-favicon-di-ojs": {
    category: "OJS",
    title: "Cara Membuat Favicon di OJS (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Di OJS, kamu bisa tambahkan favicon melalui menu Admin → Settings → Web.</p>
        <h2>Langkah-langkah:</h2>
        <ol className="list-decimal list-inside">
          <li>Siapkan file `favicon.ico`</li>
          <li>Masuk ke Settings → Web</li>
          <li>Upload file favicon → klik Save</li>
        </ol>
      </>
    ),
  },
  "cara-menghilangkan-indexphp-di-ojs": {
    category: "OJS",
    title: "Cara Menghilangkan index.php pada (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Kamu bisa menyembunyikan `index.php` dari URL OJS dengan mengaktifkan mod_rewrite.</p>
        <ol className="list-decimal list-inside">
          <li>Edit file `.htaccess` di root OJS</li>
          <li>Aktifkan pengaturan base_url di `config.inc.php`</li>
          <li>Pastikan module rewrite Apache aktif</li>
        </ol>
      </>
    ),
  },
  "cara-install-plugin-di-ojs": {
    category: "OJS",
    title: "Cara Install Plugin OJS (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Install plugin bisa melalui UI Plugin Gallery atau manual via FTP.</p>
        <ul className="list-disc list-inside">
          <li>Login sebagai Admin</li>
          <li>Buka Website Settings → Plugin</li>
          <li>Cari dan klik Install</li>
        </ul>
      </>
    ),
  },
  "cara-meningkatkan-keamanan-ojs": {
    category: "OJS",
    title: "Cara Meningkatkan Keamanan OJS (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>Untuk keamanan, pastikan versi terbaru, permissions benar, dan SSL aktif.</p>
        <ul className="list-disc list-inside">
          <li>Update OJS secara rutin</li>
          <li>Gunakan HTTPS</li>
          <li>Batasi akses direktori melalui .htaccess</li>
        </ul>
      </>
    ),
  },
  "cara-menambahkan-recaptcha-di-ojs": {
    category: "OJS",
    title: "Cara Menambahkan Google reCAPTCHA di OJS (Open Journal System)",
    updated: "Juni 13, 2025",
    content: (
      <>
        <p>reCAPTCHA digunakan untuk melindungi form dari spam.</p>
        <ul className="list-disc list-inside">
          <li>Daftarkan situs di Google reCAPTCHA</li>
          <li>Salin site key dan secret key</li>
          <li>Masukkan ke pengaturan Website → Plugins → reCAPTCHA</li>
        </ul>
      </>
    ),
  },
  "cara-mengganti-theme-di-ojs": {
    category: "OJS",
    title: "Cara Mengganti Theme OJS (Open Journal System)",
    updated: "Juni 12, 2025",
    content: (
      <>
        <p>Kamu bisa ganti theme lewat menu Website → Appearance.</p>
        <ul className="list-disc list-inside">
          <li>Pilih theme dari dropdown</li>
          <li>Klik Save</li>
          <li>Reload halaman utama untuk melihat perubahan</li>
        </ul>
      </>
    ),
  },
  "cara-reset-password-ojs": {
    category: "OJS",
    title: "Cara Reset Password OJS (Open Journal System)",
    updated: "Juni 12, 2025",
    content: (
      <>
        <p>Password bisa di-reset melalui link Forgot Password di halaman login atau oleh Admin.</p>
        <ul className="list-disc list-inside">
          <li>Masukkan email di halaman login</li>
          <li>Cek email untuk link reset</li>
          <li>Jika gagal, admin bisa ubah manual via dashboard atau database</li>
        </ul>
      </>
    ),
  },
  "cara-menambahkan-user-di-ojs": {
    category: "OJS",
    title: "Cara Menambahkan User di OJS",
    updated: "Juni 12, 2025",
    content: (
      <>
        <p>User bisa ditambah via menu Users & Roles.</p>
        <ul className="list-disc list-inside">
          <li>Login sebagai Admin</li>
          <li>Buka Users & Roles → Add User</li>
          <li>Masukkan data lalu klik Save</li>
        </ul>
      </>
    ),
  },
  "cara-setting-smtp2go-pada-domain": {
    category: "Email / SMTP",
    title: "Cara Setting SMTP2GO Pada Domain",
    updated: "Juni 12, 2025",
    content: (
      <>
        <p>SMTP2GO digunakan agar pengiriman email lebih stabil dan tidak masuk spam.</p>
        <ul className="list-disc list-inside">
          <li>Buat akun di smtp2go.com</li>
          <li>Catat SMTP server, port, username dan password</li>
          <li>Masukkan ke konfigurasi email di aplikasi kamu</li>
        </ul>
      </>
    ),
  },
};
