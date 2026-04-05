import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";

export default function Certifications() {
  const [openCertificate, setOpenCertificate] = useState(null);
  const [certsByCategory] = useState([
    {
      title: "AICTE / Ethnotech",
      certifications: [
        { name: "HTML5 Application Development", certificateUrl: "/certificates/html.jpg" },
        { name: "Node.js", certificateUrl: "/certificates/nodejs.jpg" },
        { name: "DBMS using SQL", certificateUrl: "/certificates/dbms.jpg" },
        { name: "Data Analytics with Excel", certificateUrl: "/certificates/excel.jpg" },
        { name: "Data Structures in C", certificateUrl: "/certificates/ds-c.jpg" },
      ],
    },
    {
      title: "IBM",
      certifications: [
        { name: "NodeJS", certificateUrl: "/certificates/ibm-nodejs.jpg" },
        { name: "DevOps Fundamentals", certificateUrl: "/certificates/ibm-devops.jpg" },
      ],
    },
    {
      title: "Infosys|Springboard",
      certifications: [
        { name: "Demystifying Generative AI for Leaders", certificateUrl: "/certificates/infosys-genai-leaders.jpg" },
        { name: "Fundamentals of Information Security", certificateUrl: "/certificates/infosys-information-security.jpg" },
      ],
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="certifications">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12 pb-16">
          {(() => {
            const items = [];
            let cardIndex = 0;

            certsByCategory.forEach((group) => {
              items.push({
                type: "title",
                key: group.title,
                title: group.title,
              });

              group.certifications.forEach((cert) => {
                items.push({
                  type: "cert",
                  key: `${group.title}-${cert.name}`,
                  certName: cert.name,
                  certificateUrl: cert.certificateUrl,
                  index: cardIndex,
                });
                cardIndex += 1;
              });
            });

            return items.map((item) => {
              if (item.type === "title") {
                return (
                  <div
                    key={item.key}
                    className="w-full col-span-1 md:col-span-2 lg:col-span-3 text-center"
                  >
                    {item.title}
                  </div>
                );
              }

              return (
                <motion.div
                  key={item.key}
                  className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-5 w-full lg:w-72 flex flex-col items-center justify-center gap-5 text-center min-h-[140px]"
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: item.index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <TbCertificate size={40} />
                  <p className="text-sm lg:text-base">{item.certName}</p>
                  <button
                    type="button"
                    className="text-sm lg:text-base font-semibold hover:underline text-current bg-transparent border-0 p-0 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCertificate({
                        title: item.certName,
                        imageUrl: item.certificateUrl,
                      });
                    }}
                  >
                    View Certificate
                  </button>
                </motion.div>
              );
            });
          })()}
        </div>
      </div>

      {openCertificate?.imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5"
          onClick={() => setOpenCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-white border border-black rounded-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
              <h3 className="text-black font-semibold text-lg lg:text-xl">
                {openCertificate.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="text-[#71717A] text-sm lg:text-base font-semibold hover:underline"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 overflow-auto flex justify-center rounded-md border border-[#D4D4D8] bg-[#f9fafb]">
              <img
                src={openCertificate.imageUrl}
                alt={openCertificate.title}
                className="max-h-[min(75vh,720px)] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
