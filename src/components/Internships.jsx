import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function Internships() {
  const [openCertificate, setOpenCertificate] = useState(null);
  const [internships] = useState([
    { id: 1, title: "Google AI-ML Virtual Internship", certificateUrl: "/internship/google.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 2, title: "Zscaler Cloud Security Virtual Internship", certificateUrl: "/internship/zcaler.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 3, title: "AWS Data Engineering Virtual Internship", certificateUrl: "/internship/data eng.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 4, title: "Palo Alto Cybersecurity Virtual Internship", certificateUrl: "/internship/palalto.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 5, title: "Juniper Networks Virtual Internship", certificateUrl: "/internship/juniper.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 6, title: "UiPath RPA Developer Virtual Internship", certificateUrl: "/internship/uipath.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
    { id: 7, title: "AWS Gen-AI Virtual Internship", certificateUrl: "/internship/gen ai.jpg", icon: <MdOutlineWorkOutline size={28} color="white" /> },
  ]);

  return (
    <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16" id="internships">
      <motion.h2
        className="text-2xl lg:text-4xl text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Internships</span>
      </motion.h2>

      <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.id}
            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                {internship.icon}
                <h2 className="font-semibold text-white text-lg lg:text-xl">
                  {internship.title}
                </h2>
              </div>
              <button
                type="button"
                className="text-[#D4D4D8] text-sm lg:text-base font-semibold hover:underline mt-4 lg:mt-0 bg-transparent border-0 p-0 cursor-pointer text-left"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenCertificate({
                    title: internship.title,
                    imageUrl: internship.certificateUrl,
                  });
                }}
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {openCertificate?.imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5"
          onClick={() => setOpenCertificate(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-black border border-[#71717A] rounded-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
              <h3 className="text-white font-semibold text-lg lg:text-xl">
                {openCertificate.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpenCertificate(null)}
                className="text-[#D4D4D8] text-sm lg:text-base font-semibold hover:underline"
              >
                Close
              </button>
            </div>
            <div className="min-h-0 overflow-auto flex justify-center rounded-md border border-[#71717A] bg-[#0a0a0a]">
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
