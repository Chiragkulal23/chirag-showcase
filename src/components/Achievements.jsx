import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaNewspaper, FaIdCard, FaMusic, FaBasketballBall, FaPalette, FaHeart } from "react-icons/fa";

export default function Achievements() {
  const [openCertificateId, setOpenCertificateId] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "Leadership",
      description: "Active member of ASCEE; helped in planning and organization of college-level technical and cultural events.",
      icon: <FaUsers size={28} color="white" />,
      // Replace this demo filename with your original Leadership certificate image.
      certificateDemoImageSrc: "/achievements/Leadership.jpeg",
    },
    {
      id: 2,
      title: "Publication",
      description:
        "Video-to-Notes Generation – Published in International Journal of Emerging Technologies and Innovative Research (JETIR), Vol.12, Issue 7, July 2025 (pages 270–274).",
      icon: <FaNewspaper size={28} color="white" />,
      publicationUrl: "https://www.jetir.org/view?paper=JETIRGX06049",
      certificateDemoImageSrc: "/achievements/jetir-publication-certificate.jpeg",
      certificateModalTitle: "Publication — JETIR certificate",
    },
    {
      id: 3,
      title: "ALTIUS 25 – Certificate of Excellence",
      description: "Secured II place in the WebWave event during ALTIUS 25, a college-level Technical & Non-Technical fest.Recognized for outstanding performance in the WebWave competition.",
      icon: <FaIdCard size={28} color="white" />,
      // Replace this demo filename with your original ALTIUS 25 certificate image.
      certificateDemoImageSrc: "/achievements/ALTIUS 25.jpeg",
    },
    {
      id: 4,
      title: "Interests",
      description:
        "Outside of building software, I recharge through music, movement outdoors, and hands-on creativity — they keep ideas fresh and perspective balanced.",
      icon: <FaHeart size={28} color="white" />,
      interestTags: [
        { label: "Music", Icon: FaMusic },
        { label: "Outdoor Games", Icon: FaBasketballBall },
        { label: "Drawing", Icon: FaPalette },
      ],
    },
  ];

  const openCertificate = achievements.find((item) => item.id === openCertificateId);

  return (
    <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16" id="achievements">
      <motion.h2
        className="text-2xl lg:text-4xl text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Achievements & Activities</span>
      </motion.h2>

      <div className="px-5 lg:px-28 my-8 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-black p-6 lg:p-8 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-black border border-[#71717A] rounded-full flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h3 className="font-semibold text-white text-xl lg:text-2xl">
              {item.title}
            </h3>
            <div className="text-[#D4D4D8] text-sm/7 lg:text-base/7 font-light space-y-3">
              <p>{item.description}</p>
              {item.certificateContext && <p>{item.certificateContext}</p>}
            </div>
            {item.interestTags && (
              <ul className="flex flex-wrap gap-2 mt-1" aria-label="Personal interests">
                {item.interestTags.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#3F3F46] text-xs sm:text-sm font-medium text-[#D4D4D8] bg-[#18181B]"
                  >
                    <Icon className="w-4 h-4 text-white shrink-0" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
              {item.publicationUrl && (
                <a
                  href={item.publicationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D4D4D8] text-sm/7 lg:text-base/7 font-semibold hover:underline w-fit"
                >
                  View Publication
                </a>
              )}
              {item.certificateDemoImageSrc && (
                <button
                  type="button"
                  onClick={() =>
                    setOpenCertificateId((prev) => (prev === item.id ? null : item.id))
                  }
                  className="text-[#D4D4D8] text-sm/7 lg:text-base/7 font-semibold hover:underline text-left w-fit bg-transparent border-0 p-0 cursor-pointer"
                >
                  View Certificate
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {openCertificate?.certificateDemoImageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5"
          onClick={() => setOpenCertificateId(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-black border border-[#71717A] rounded-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
              <h3 className="text-white font-semibold text-lg lg:text-xl">
                {openCertificate.certificateModalTitle ?? openCertificate.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpenCertificateId(null)}
                className="text-[#D4D4D8] text-sm lg:text-base font-semibold hover:underline"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 overflow-auto flex justify-center rounded-md border border-[#71717A] bg-[#0a0a0a]">
              <img
                src={openCertificate.certificateDemoImageSrc}
                alt={`${openCertificate.title} certificate`}
                className="max-h-[min(75vh,720px)] w-auto max-w-full object-contain"
                onError={(e) => {
                  // Fallback so the user still sees an image until you replace the demo filename.
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/assets/preview.png";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
