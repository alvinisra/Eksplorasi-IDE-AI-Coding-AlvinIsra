** EVALUASI HASIL AI **
Bagian Yang Diperbaiki:
1. Deprecated code pada SafeAreaView diganti dengan library react-native-safe-area-context
2. set loading state untuk User Experience (UX) dan Keamanan Aplikasi.
3. Saya melakukan perbaikan dengan membagi kode menjadi tiga bagian terpisah: LoginScreen.tsx (UI), useLogin.ts(Logika/Hook), dan LoginScreen.styles.ts(Styling) untuk            menerapkan prinsip best practice arsitektur.
4. bug typing pada website

** CATATAN REFLEKSI **
1. FITUR IDE/AI YANG PALING MEMBANTU:  
    - Fitur AI yang paling membantu di Antigravity adalah fitur Agent AI. 
      Agent AI di Antigravity tidak menjadi mesin penjawab satu arah saja. 
      Ia memiliki kemampuan untuk memahami keseluruhan konteks dalam project, 
      sehingga saran kode yang diberikan kontekstual dan nyambung dengan kodingan 
      yang sudah ditulis sebelumnya. instalasi dependencies juga bisa 
      dilakukan dari agent AI dengan sekali klik.
    - Fitur Artifacts dari antigravity juga sangat membantu untuk memahami implementation plan,
      task list dari Agent AI serta walkthrough untuk melihat hasilny tanpa harus 
      menjalankan simulator yang berat terlebih dahulu.

2. Bagian yang Tidak Bisa Diserahkan ke AI:
   - Hasil awal AI memberikan kode dalam satu file tunggal yang besar.
   - keamanan, library yang digunakan, integrasi alur bisnis 
     yang spesifik sesuai standart perusahaan tetap harus ditentukan secara 
     manual oleh developer.
   - AI mungkin tidak tahu standart design brand perusahaan.
   - AI bisa memberikan hasil, tapi fungsionalitasnya wajib dipastikan melalui 
     review manual oleh tim.
   - user experience seperti rasa nyaman saat menyentuh tombol atau kelancaran 
     transisi layar adalah hal subjektif yang hanya bisa divalidasi oleh pengalaman manusia.

4. Risiko Tanpa Review: 
   - Ada risiko AI memberikan solusi atau library yang terlalu umum yang mungkin 
     tidak kompatibel dengan library tertentu yang digunakan oleh developer.
   - Ada risiko AI memberikan code atau syntax yang berasal dari luar framework yang 
     digunakan developer
   - AI bisa memberikan kode yang deprecated atau usang menyebabkan 
     resiko keamanan dan bug
   - AI cenderung memberikan solusi cepat dalam satu file besar agar kode langsung jalan. Jika langsung dipakai tanpa review, proyek akan sulit dikelola (maintenance) dan sulit             dikembangkan.
   - bug pada UI di perangkat asli.





