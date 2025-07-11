import React from "react";
import PanduanDetail from "@/components/PanduanDetail";

interface GuideContent {
  category: string;
  title: string;
  updated: string;
  subtopics: Array<{ title: string; href: string; children?: Array<{ title: string; href: string }> }>;
  content: React.ReactElement;
}

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 

  const guideMap: Record<string, GuideContent> = {
    "hosting-cpanel": {
      category: "Panduan Lengkap Hosting",
      title: "Cara Mengelola Hosting dengan cPanel",
      updated: "Mei 10, 2024",
      subtopics: [
        { title: "Pengenalan cPanel", href: "#intro" },
        { 
          title: "Login ke cPanel", href: "#login",
          children: [
            { title: "Login via URL", href: "#login-url" },
            { title: "Login via Provider", href: "#login-provider" }
          ]
        },
        { 
          title: "Upload File Website", href: "#upload",
          children: [
            { title: "Upload via File Manager", href: "#upload-file-manager" },
            { title: "Upload via FTP", href: "#upload-ftp" }
          ]
        },
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
              Cari dan klik <strong>&quot;File Manager&quot;</strong>
            </li>
            <li>
              Masuk ke folder <code>public_html</code>
            </li>
            <li>
              Klik tombol <strong>&quot;Upload&quot;</strong>
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
              Di cPanel, klik <strong>&quot;Email Accounts&quot;</strong>
            </li>
            <li>
              Klik <strong>&quot;Create Email Account&quot;</strong>
            </li>
            <li>Masukkan username email yang diinginkan</li>
            <li>Buat password yang kuat</li>
            <li>
              Klik <strong>&quot;Create Account&quot;</strong>
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
        { 
          title: "Arahkan Domain ke Hosting", href: "#arahkan",
          children: [
            { title: "Arahkan via Nameserver", href: "#arahkan-ns" },
            { title: "Arahkan via A Record", href: "#arahkan-a-record" }
          ]
        },
        { title: "Ubah Nameserver", href: "#nameserver" },
        { 
          title: "Kelola DNS Record", href: "#dns-record",
          children: [
            { title: "A Record", href: "#dns-a" },
            { title: "CNAME Record", href: "#dns-cname" },
            { title: "MX Record", href: "#dns-mx" }
          ]
        },
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
              Cari menu <strong>&quot;DNS Management&quot;</strong> atau{" "}
              <strong>&quot;Nameserver&quot;</strong>
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
        { 
          title: "Akses via SSH", href: "#ssh",
          children: [
            { title: "SSH dari Windows", href: "#ssh-windows" },
            { title: "SSH dari Linux/Mac", href: "#ssh-linux" }
          ]
        },
        { title: "Update Sistem", href: "#update" },
        { 
          title: "Install LAMP Stack", href: "#lamp",
          children: [
            { title: "Install Apache", href: "#lamp-apache" },
            { title: "Install MySQL", href: "#lamp-mysql" },
            { title: "Install PHP", href: "#lamp-php" }
          ]
        },
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
        { 
          title: "Install NFS Role", href: "#install",
          children: [
            { title: "Install via Server Manager", href: "#install-server-manager" },
            { title: "Install via PowerShell", href: "#install-powershell" }
          ]
        },
        { 
          title: "Konfigurasi NFS", href: "#config",
          children: [
            { title: "Konfigurasi Shared Folder", href: "#config-shared" },
            { title: "Konfigurasi Permission", href: "#config-permission" }
          ]
        },
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
              Centang <strong>&quot;Server for NFS&quot;</strong>
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
              Centang <strong>&quot;Share this folder&quot;</strong>
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
        { 
          title: "Buat Akun Email", href: "#create",
          children: [
            { title: "Setting Password", href: "#create-password" },
            { title: "Atur Kuota", href: "#create-quota" }
          ]
        },
        { title: "Akses Webmail", href: "#webmail" },
        { 
          title: "Konfigurasi Outlook", href: "#outlook",
          children: [
            { title: "IMAP", href: "#outlook-imap" },
            { title: "SMTP", href: "#outlook-smtp" }
          ]
        },
        { title: "Setting Mobile", href: "#mobile" },
      ],
      content: (
        <>
          <h2>Buat Email Baru</h2>
          <p>Untuk membuat email bisnis dengan domain sendiri:</p>
          <ol>
            <li>Login ke cPanel hosting</li>
            <li>
              Cari dan klik <strong>&quot;Email Accounts&quot;</strong>
            </li>
            <li>
              Klik <strong>&quot;Create Email Account&quot;</strong>
            </li>
            <li>
              Masukkan nama email (misal: <code>info@domain.com</code>)
            </li>
            <li>Buat password yang kuat</li>
            <li>Atur kuota mailbox (opsional)</li>
            <li>
              Klik <strong>&quot;Create Account&quot;</strong>
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
              Pilih <strong>&quot;Manual setup&quot;</strong>
            </li>
            <li>
              Pilih <strong>&quot;POP or IMAP&quot;</strong>
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
        { 
          title: "Generate CSR", href: "#csr",
          children: [
            { title: "Generate via cPanel", href: "#csr-cpanel" },
            { title: "Generate via CLI", href: "#csr-cli" }
          ]
        },
        { 
          title: "Install SSL via cPanel", href: "#install",
          children: [
            { title: "Install Manual", href: "#install-manual" },
            { title: "Install Otomatis", href: "#install-auto" }
          ]
        },
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
            <li>Mencegah warning &quot;Not Secure&quot; di browser</li>
          </ul>

          <h3>Generate CSR di cPanel</h3>
          <p>
            CSR (Certificate Signing Request) diperlukan untuk mendapatkan SSL:
          </p>
          <ol>
            <li>Login ke cPanel</li>
            <li>
              Cari bagian <strong>&quot;Security&quot;</strong>
            </li>
            <li>
              Klik <strong>&quot;SSL/TLS&quot;</strong>
            </li>
            <li>
              Klik{" "}
              <strong>
                &quot;Generate, view, or delete SSL certificate signing requests&quot;
              </strong>
            </li>
            <li>Isi informasi domain dan organisasi</li>
            <li>
              Klik <strong>&quot;Generate&quot;</strong>
            </li>
            <li>Copy CSR yang dihasilkan</li>
          </ol>

          <h3>Install SSL via cPanel</h3>
          <p>Setelah mendapat SSL certificate dari provider:</p>
          <ol>
            <li>
              Kembali ke <strong>&quot;SSL/TLS&quot;</strong> di cPanel
            </li>
            <li>
              Klik <strong>&quot;Manage SSL sites&quot;</strong>
            </li>
            <li>Pilih domain yang akan diinstall SSL</li>
            <li>
              Paste certificate ke kolom <strong>&quot;Certificate (CRT)&quot;</strong>
            </li>
            <li>
              Paste private key ke kolom <strong>&quot;Private Key (KEY)&quot;</strong>
            </li>
            <li>Paste CA Bundle jika ada</li>
            <li>
              Klik <strong>&quot;Install Certificate&quot;</strong>
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
