import PanduanDetail from "@/components/PanduanDetail";

export default function DetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const guideMap: Record<string, any> = {
    "hosting-cpanel": {
      category: "Panduan Lengkap Hosting",
      title: "Cara Mengelola Hosting dengan cPanel",
      updated: "Mei 10, 2024",
      subtopics: [
        { title: "Pengenalan cPanel", href: "#intro" },
        { title: "Login ke cPanel", href: "#login" },
        { title: "Upload File Website", href: "#upload" },
        { title: "Kelola Email di cPanel", href: "#email" },
        { title: "Backup Data", href: "#backup" },
      ],
      content: (
        <>
          <h2>Mengenal cPanel</h2>
          <p>
            cPanel adalah kontrol panel hosting paling populer yang memungkinkan
            Anda mengelola hosting dengan mudah. Dengan cPanel, Anda bisa kelola
            file, domain, email, database, dan fitur hosting lainnya melalui
            interface yang user-friendly.
          </p>

          <h3>Login ke cPanel</h3>
          <p>Ada beberapa cara untuk mengakses cPanel:</p>
          <ul>
            <li>
              <strong>URL Langsung:</strong> <code>namadomain.com/cpanel</code>
            </li>
            <li>
              <strong>URL dengan Port:</strong> <code>namadomain.com:2083</code>
            </li>
            <li>
              <strong>Melalui Provider:</strong> Link yang diberikan provider
              hosting
            </li>
          </ul>
          <p>
            Masukkan username dan password yang diberikan provider hosting Anda.
          </p>

          <h3>Upload File Website</h3>
          <p>Untuk upload file website ke hosting:</p>
          <ol>
            <li>Login ke cPanel</li>
            <li>
              Cari dan klik <strong>"File Manager"</strong>
            </li>
            <li>
              Masuk ke folder <code>public_html</code>
            </li>
            <li>
              Klik tombol <strong>"Upload"</strong>
            </li>
            <li>Pilih file dari komputer Anda</li>
            <li>Tunggu proses upload selesai</li>
          </ol>

          <h3>Kelola Email di cPanel</h3>
          <p>
            <strong>Membuat Email Baru:</strong>
          </p>
          <ol>
            <li>
              Di cPanel, klik <strong>"Email Accounts"</strong>
            </li>
            <li>
              Klik <strong>"Create Email Account"</strong>
            </li>
            <li>Masukkan username email yang diinginkan</li>
            <li>Buat password yang kuat</li>
            <li>
              Klik <strong>"Create Account"</strong>
            </li>
          </ol>

          <p>
            <strong>Akses Webmail:</strong>
          </p>
          <p>
            Buka <code>namadomain.com/webmail</code> di browser, lalu login
            dengan email dan password yang sudah dibuat.
          </p>
        </>
      ),
    },

    domain: {
      category: "Panduan Lengkap Domain",
      title: "Cara Konfigurasi Domain & DNS",
      updated: "Mei 14, 2024",
      subtopics: [
        { title: "Konsep Domain & DNS", href: "#konsep" },
        { title: "Arahkan Domain ke Hosting", href: "#arahkan" },
        { title: "Ubah Nameserver", href: "#nameserver" },
        { title: "Kelola DNS Record", href: "#dns-record" },
      ],
      content: (
        <>
          <h2>Konsep Domain dan DNS</h2>
          <p>
            Domain adalah alamat website Anda di internet (contoh: google.com),
            sedangkan DNS adalah sistem yang mengarahkan domain ke server
            hosting tempat website Anda berada.
          </p>
          <p>
            Ibaratnya, domain adalah alamat rumah, dan DNS adalah peta yang
            menunjukkan cara menuju rumah tersebut.
          </p>

          <h3>Ubah Nameserver</h3>
          <p>
            Nameserver menghubungkan domain dengan hosting. Cara mengubahnya:
          </p>
          <ol>
            <li>
              Login ke dashboard penyedia domain (GoDaddy, Namecheap, dll)
            </li>
            <li>
              Cari menu <strong>"DNS Management"</strong> atau{" "}
              <strong>"Nameserver"</strong>
            </li>
            <li>Ubah nameserver ke yang diberikan provider hosting</li>
            <li>Simpan perubahan</li>
          </ol>
          <p>
            <strong>Contoh nameserver:</strong>
            <br />
            <code>ns1.hostingprovider.com</code>
            <br />
            <code>ns2.hostingprovider.com</code>
          </p>
          <p>
            <em>
              Catatan: Perubahan nameserver butuh waktu 24-48 jam untuk aktif
              sepenuhnya.
            </em>
          </p>

          <h3>Kelola DNS Record</h3>
          <p>
            <strong>Jenis DNS Record yang penting:</strong>
          </p>
          <ul>
            <li>
              <strong>A Record:</strong> Mengarahkan domain ke alamat IP server
            </li>
            <li>
              <strong>CNAME:</strong> Membuat alias untuk subdomain
            </li>
            <li>
              <strong>MX Record:</strong> Mengatur server email
            </li>
          </ul>
          <p>
            Biasanya DNS record dikelola melalui control panel hosting atau
            dashboard penyedia domain.
          </p>
        </>
      ),
    },

    "vps-linux": {
      category: "Panduan Lengkap VPS",
      title: "Setup VPS dengan Linux (Ubuntu/Debian)",
      updated: "Mei 20, 2024",
      subtopics: [
        { title: "Akses via SSH", href: "#ssh" },
        { title: "Update Sistem", href: "#update" },
        { title: "Install LAMP Stack", href: "#lamp" },
        { title: "Amankan VPS", href: "#security" },
      ],
      content: (
        <>
          <h2>Login VPS via SSH</h2>
          <p>
            SSH adalah cara untuk mengakses VPS secara remote. Gunakan terminal
            atau aplikasi SSH client.
          </p>
          <p>
            <strong>Command dasar:</strong>
          </p>
          <pre>
            <code>ssh root@ip-vps-anda</code>
          </pre>
          <p>
            Ganti <code>ip-vps-anda</code> dengan IP address VPS yang diberikan
            provider.
          </p>

          <h3>Update Sistem</h3>
          <p>Setelah login, update sistem terlebih dahulu:</p>
          <pre>
            <code>apt update && apt upgrade -y</code>
          </pre>

          <h3>Install LAMP Stack</h3>
          <p>LAMP adalah kombinasi Linux, Apache, MySQL, dan PHP:</p>
          <p>
            <strong>Install Apache:</strong>
          </p>
          <pre>
            <code>apt install apache2 -y</code>
          </pre>

          <p>
            <strong>Install MySQL:</strong>
          </p>
          <pre>
            <code>apt install mysql-server -y</code>
          </pre>

          <p>
            <strong>Install PHP:</strong>
          </p>
          <pre>
            <code>apt install php php-mysql libapache2-mod-php -y</code>
          </pre>

          <p>
            <strong>Restart Apache:</strong>
          </p>
          <pre>
            <code>systemctl restart apache2</code>
          </pre>

          <h3>Amankan VPS</h3>
          <p>
            <strong>Langkah keamanan penting:</strong>
          </p>
          <ul>
            <li>Buat user baru (jangan selalu pakai root)</li>
            <li>Ubah port SSH default (22) ke port lain</li>
            <li>Install dan konfigurasi firewall</li>
            <li>Disable login root via SSH</li>
            <li>Gunakan SSH key daripada password</li>
          </ul>

          <p>
            <strong>Install Firewall:</strong>
          </p>
          <pre>
            <code>
              apt install ufw -y ufw allow ssh ufw allow http ufw allow https
              ufw enable
            </code>
          </pre>
        </>
      ),
    },

    "windows-nfs": {
      category: "Panduan Lengkap Windows Server",
      title: "Cara Mengaktifkan NFS pada Windows Server",
      updated: "April 5, 2024",
      subtopics: [
        { title: "Mengakses RDP Windows", href: "#rdp" },
        { title: "Install NFS Role", href: "#install" },
        { title: "Konfigurasi NFS", href: "#config" },
        { title: "Testing NFS", href: "#test" },
      ],
      content: (
        <>
          <h2>Buka Windows Firewall</h2>
          <p>Pastikan port yang dibutuhkan NFS sudah dibuka:</p>
          <ul>
            <li>Port 111 (RPC)</li>
            <li>Port 445 (SMB)</li>
            <li>Port 2049 (NFS)</li>
          </ul>

          <h3>Install NFS Role</h3>
          <p>Untuk mengaktifkan NFS di Windows Server:</p>
          <ol>
            <li>
              Buka <strong>Server Manager</strong>
            </li>
            <li>
              Klik <strong>Add Roles and Features</strong>
            </li>
            <li>
              Pilih <strong>Role-based installation</strong>
            </li>
            <li>
              Di bagian <strong>File and Storage Services</strong>, expand menu
            </li>
            <li>
              Centang <strong>"Server for NFS"</strong>
            </li>
            <li>
              Klik <strong>Next</strong> dan <strong>Install</strong>
            </li>
          </ol>

          <h3>Konfigurasi Shared Folder</h3>
          <p>Setelah NFS terinstall:</p>
          <ol>
            <li>Buat folder yang akan di-share</li>
            <li>
              Klik kanan folder → <strong>Properties</strong>
            </li>
            <li>
              Pilih tab <strong>NFS Sharing</strong>
            </li>
            <li>
              Centang <strong>"Share this folder"</strong>
            </li>
            <li>Atur permission sesuai kebutuhan</li>
            <li>
              Klik <strong>OK</strong>
            </li>
          </ol>

          <p>
            <strong>Testing dari client Linux:</strong>
          </p>
          <pre>
            <code>mount -t nfs ip-windows-server:/path/to/folder /mnt/nfs</code>
          </pre>
        </>
      ),
    },

    "email-bisnis": {
      category: "Panduan Lengkap Email",
      title: "Cara Setup Email Bisnis di Hosting",
      updated: "Juni 1, 2024",
      subtopics: [
        { title: "Buat Akun Email", href: "#create" },
        { title: "Akses Webmail", href: "#webmail" },
        { title: "Konfigurasi Outlook", href: "#outlook" },
        { title: "Setting Mobile", href: "#mobile" },
      ],
      content: (
        <>
          <h2>Buat Email Baru</h2>
          <p>Untuk membuat email bisnis dengan domain sendiri:</p>
          <ol>
            <li>Login ke cPanel hosting</li>
            <li>
              Cari dan klik <strong>"Email Accounts"</strong>
            </li>
            <li>
              Klik <strong>"Create Email Account"</strong>
            </li>
            <li>
              Masukkan nama email (misal: <code>info@domain.com</code>)
            </li>
            <li>Buat password yang kuat</li>
            <li>Atur kuota mailbox (opsional)</li>
            <li>
              Klik <strong>"Create Account"</strong>
            </li>
          </ol>

          <h3>Akses Webmail</h3>
          <p>Cara akses email melalui browser:</p>
          <ol>
            <li>
              Buka <code>domain.com/webmail</code>
            </li>
            <li>Login dengan email dan password</li>
            <li>
              Pilih aplikasi webmail (Roundcube, Horde, atau SquirrelMail)
            </li>
            <li>Mulai kirim dan terima email</li>
          </ol>

          <h3>Setting Outlook</h3>
          <p>Untuk menggunakan email di Microsoft Outlook:</p>
          <p>
            <strong>Informasi yang dibutuhkan:</strong>
          </p>
          <ul>
            <li>
              <strong>Email:</strong> emailanda@domain.com
            </li>
            <li>
              <strong>Password:</strong> password email
            </li>
            <li>
              <strong>IMAP Server:</strong> mail.domain.com (port 993, SSL)
            </li>
            <li>
              <strong>SMTP Server:</strong> mail.domain.com (port 465, SSL)
            </li>
          </ul>

          <p>
            <strong>Langkah setting:</strong>
          </p>
          <ol>
            <li>
              Buka Outlook → <strong>File</strong> →{" "}
              <strong>Add Account</strong>
            </li>
            <li>
              Pilih <strong>"Manual setup"</strong>
            </li>
            <li>
              Pilih <strong>"POP or IMAP"</strong>
            </li>
            <li>Masukkan informasi server di atas</li>
            <li>Test account settings</li>
            <li>
              Klik <strong>Finish</strong>
            </li>
          </ol>
        </>
      ),
    },

    ssl: {
      category: "Panduan Lengkap SSL",
      title: "Cara Install SSL Certificate",
      updated: "Juni 10, 2024",
      subtopics: [
        { title: "Apa itu SSL", href: "#about" },
        { title: "Generate CSR", href: "#csr" },
        { title: "Install SSL via cPanel", href: "#install" },
        { title: "Cek Status SSL", href: "#check" },
      ],
      content: (
        <>
          <h2>Apa itu SSL Certificate</h2>
          <p>
            SSL Certificate adalah sertifikat digital yang mengenkripsi data
            antara browser pengunjung dan server website. Website dengan SSL
            akan menampilkan <strong>https://</strong> dan ikon gembok di
            browser.
          </p>
          <p>
            <strong>Manfaat SSL:</strong>
          </p>
          <ul>
            <li>Melindungi data sensitif pengguna</li>
            <li>Meningkatkan kepercayaan pengunjung</li>
            <li>Membantu SEO ranking di Google</li>
            <li>Mencegah warning "Not Secure" di browser</li>
          </ul>

          <h3>Generate CSR di cPanel</h3>
          <p>
            CSR (Certificate Signing Request) diperlukan untuk mendapatkan SSL:
          </p>
          <ol>
            <li>Login ke cPanel</li>
            <li>
              Cari bagian <strong>"Security"</strong>
            </li>
            <li>
              Klik <strong>"SSL/TLS"</strong>
            </li>
            <li>
              Klik{" "}
              <strong>
                "Generate, view, or delete SSL certificate signing requests"
              </strong>
            </li>
            <li>Isi informasi domain dan organisasi</li>
            <li>
              Klik <strong>"Generate"</strong>
            </li>
            <li>Copy CSR yang dihasilkan</li>
          </ol>

          <h3>Install SSL via cPanel</h3>
          <p>Setelah mendapat SSL certificate dari provider:</p>
          <ol>
            <li>
              Kembali ke <strong>SSL/TLS</strong> di cPanel
            </li>
            <li>
              Klik <strong>"Manage SSL sites"</strong>
            </li>
            <li>Pilih domain yang akan diinstall SSL</li>
            <li>
              Paste certificate ke kolom <strong>"Certificate (CRT)"</strong>
            </li>
            <li>
              Paste private key ke kolom <strong>"Private Key (KEY)"</strong>
            </li>
            <li>Paste CA Bundle jika ada</li>
            <li>
              Klik <strong>"Install Certificate"</strong>
            </li>
          </ol>

          <h3>Cek Status SSL</h3>
          <p>Untuk memastikan SSL sudah aktif:</p>
          <ul>
            <li>
              Buka website dengan <code>https://domain.com</code>
            </li>
            <li>Pastikan muncul ikon gembok di browser</li>
            <li>Gunakan SSL checker online untuk validasi</li>
            <li>Pastikan redirect dari HTTP ke HTTPS sudah aktif</li>
          </ul>
        </>
      ),
    },
  };

  const guide = guideMap[slug];

  if (!guide) {
    return (
      <div className="p-10 text-center text-red-500">
        Panduan tidak ditemukan.
      </div>
    );
  }

  return (
    <PanduanDetail
      category={guide.category}
      title={guide.title}
      updated={guide.updated}
      subtopics={guide.subtopics}
      content={guide.content}
    />
  );
}
