export default function Footer() {
  return (
    <section id="contact" className="bg-[#0d243d] w-full py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-white text-right">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <div className="flex justify-end">
            <div className="w-auto h-[1px] bg-black mt-2"></div>
          </div>
          <p className="text-base">
            <a
              href="https://share.google/z6C4pNfjFSEVFhREW"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              118-B, Street 2, NFC Society, LAHORE
            </a>
          </p>
          <p className="text-base">
            <a href="tel:+923124038728" className="hover:underline">
              +92-312-4038728
            </a>
          </p>
          <p className="text-base">
            <a href="mailto:info@prisec.pk" className="hover:underline">
              info@prisec.pk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}