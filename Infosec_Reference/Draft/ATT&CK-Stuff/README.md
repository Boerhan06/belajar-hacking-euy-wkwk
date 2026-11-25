# Pemetaan ATT&CK

## Pemetaan MITRE Pre-ATT&CK
---------------------------
* Kerangka Kerja MITRE Pre-ATT&CK ([MITRE ATT&CK Framework](https://attack.mitre.org/pre-attack/index.php/Main_Page)) untuk pihak penyerang (*adversary*).
* Ini merupakan salinan pemetaan taktik dengan tautan ke teknik dan informasi latar belakang.
- [Keamanan Operasi Penyerang (Adversary Opsec)](Pre-ATT%26CK/Adversary_OPSEC.md)
- [Membangun Kapabilitas (Build Capabilities)](Pre-ATT%26CK/Build_Capabilities.md)
- [Pengumpulan Informasi Organisasi (Organization Informational Gathering)](Pre-ATT%26CK/Organizationa_%20Information_Gathering.md)
- [Kelemahan Organisasi (Organizational Weakness)](Pre-ATT%26CK/Organizational_Weakness.md)
- [Pengumpulan Informasi Individu (People Information Gathering)](Pre-ATT%26CK/People_Information_Gathering.md)
- [Identifikasi Kelemahan Individu (People Weakness Identification)](Pre-ATT%26CK/People_Weakness_Identification.md)
- [Pengembangan Persona (Persona Development)](Pre-ATT%26CK/Persona_Development.md)
- [Perencanaan Definisi Prioritas (Priority Definition Planning)](Pre-ATT%26CK/Priority_Definition%20_lanning.md)
- [Petunjuk Definisi Prioritas (Priority Definition Directive)](Pre-ATT%26CK/Priority_Definition_Directive.md)
- [Penyusunan Kapabilitas (Stage Capabilities)](Pre-ATT%26CK/Stage_Capabilities.md)
- [Pemilihan Target (Target Selection)](Pre-ATT%26CK/Target_Selection.md)
- [Pengumpulan Informasi Teknis (Technical Information Gathering)](Pre-ATT%26CK/Technical_Information_Gathering.md)
- [Pengujian Kapabilitas (Test Capabilities)](Pre-ATT%26CK/Test_Capabilities.md)


## Pemetaan Kerangka Kerja MITRE ATT&CK 
---------------------------
* Kerangka Kerja MITRE ATT&CK ([MITRE ATT&CK Framework](https://attack.mitre.org/wiki/Main_Page)) untuk pemahaman taktik penyerang.
* Ini merupakan salinan pemetaan dengan tautan langsung ke teknik dan referensi latar belakang, bukan sekadar laporan ancaman APT.
	* Jika Anda ingin menguji pertahanan sistem terhadap teknik-teknik ini:
		* [Atomic Red Team - Pengujian deteksi portabel dan ringkas yang dipetakan ke MITRE ATT&CK.](https://github.com/redcanaryco/atomic-red-team)
* [Pengumpulan Data (Collection)](ATT%26CK/Collection.md)
* [Komando dan Kendali (Command and Control)](ATT%26CK/Command_and_Control.md)
* [Akses Kredensial (Credential Access)](ATT%26CK/Credential_Access.md)
* [Penghindaran Pertahanan (Defense Evasion)](ATT%26CK/Defense_Evasion.md)
* [Penemuan Sistem (Discovery)](ATT%26CK/Discovery.md)
* [Eksekusi (Execution)](ATT%26CK/Execution.md)
* [Eksfiltrasi Data (Exfiltration)](ATT%26CK/Exfiltration.md)
* [Akses Awal (Initial Access)](ATT%26CK/Initial_Access.md)
* [Pergerakan Lateral (Lateral Movement)](ATT%26CK/Lateral%20Movement.md)
* [Persistensi (Persistence)](ATT%26CK/Persistence.md)
* [Eskalasi Hak Istimewa (Privilege Escalation)](ATT%26CK/Privilege_Escalation.md)
* Perangkat lunak pengujian simulasi serangan:
	* [Atomic Red Team - Pengujian deteksi portabel dan ringkas yang dipetakan ke MITRE ATT&CK.](https://github.com/redcanaryco/atomic-red-team)
	* [Caldera](https://github.com/mitre/caldera)
		* CALDERA adalah sistem emulasi penyerang otomatis yang mengeksekusi perilaku serangan pasca-kompromi dalam jaringan perusahaan. Sistem ini membuat rencana operasi secara dinamis berdasarkan taktik dan teknik MITRE ATT&CK™, meniru tindakan penyerang sungguhan.
	* [Metta](https://github.com/uber-common/metta)
		* Alat kesiapsiagaan keamanan informasi untuk simulasi penyerang. Menggunakan Redis/Celery, Python, dan Vagrant/VirtualBox untuk menjalankan skenario serangan guna menguji instrumentasi deteksi berbasis host maupun jaringan.
