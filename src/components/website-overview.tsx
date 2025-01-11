export default function WebsiteOverview() {
  return (
    <section id="tentang-kami" className="w-full min-h-screen bg-black py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-[51px] font-bold font-fontJakarta tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
            A Glance At Our Website
          </h1>
          <p className="text-lg text-zinc-300 font-fontJakarta">
            Has the aim of being useful for users
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-[16px] font-fontJakarta space-y-6 text-zinc-300 text-justify leading-relaxed">
            <p>
              Logo kami melambangkan tiga pilar utama yang menjadi fondasi Event
              Fundly: transparansi, kemudahan, dan keberlanjutan finansial.
              Event Fundly adalah platform yang dirancang khusus untuk membantu
              Anda mengelola, menabung, dan mencapai target keuangan dalam
              perencanaan berbagai acara penting, seperti pernikahan, ulang
              tahun, atau liburan keluarga, dengan cara yang lebih efisien dan
              menyenangkan.
            </p>

            <p>
              Kami percaya bahwa setiap orang memiliki impian finansial yang
              unik — entah itu menabung untuk liburan, pendidikan, atau acara
              spesial lainnya. Dari keyakinan ini, Event Fundly hadir untuk
              mendukung setiap langkah perencanaan keuangan Anda. Misi kami
              adalah menyediakan solusi yang mudah diakses dan terjangkau, agar
              Anda dapat menabung dengan cara yang lebih terarah dan mencapai
              tujuan finansial dengan percaya diri.
            </p>

            <p>
              Platform ini dikembangkan oleh tim profesional di bidang
              teknologi, keuangan, dan desain, yang bekerja keras untuk
              menghadirkan pengalaman terbaik bagi Anda. Kami terus berinovasi
              dan mengembangkan fitur-fitur terbaru, dengan fokus pada
              kenyamanan, keamanan, dan transparansi bagi pengguna. Setiap
              elemen di platform ini dirancang untuk mendukung Anda dalam
              menjalani perjalanan finansial dengan penuh semangat dan
              keyakinan.
            </p>

            <p>
              Event Fundly berkomitmen untuk menjadi solusi keuangan andal yang
              membantu Anda menabung dan mengelola pengeluaran dengan lebih
              terstruktur. Kami ingin membangun masa depan finansial yang lebih
              cerah bersama pengguna kami, yang menjadi inspirasi utama di balik
              pengembangan platform ini. Terima kasih atas kepercayaan Anda pada
              Event Fundly sebagai mitra dalam mencapai tujuan finansial Anda.
              Mari wujudkan impian finansial Anda bersama kami!
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[411px] h-[394px] md:w-[700px] md:h-[700px] bg-black overflow-hidden">
              <img
                src="../assets/keluar.png"
                alt="Event Fundly Logo - Representing transparency, ease, and financial sustainability"
                className="object-contain p-8 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
