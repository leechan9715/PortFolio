import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
export const Pdf = ({ isOpen, setIsOpen }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 cursor-pointer "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-2xl border border-[#1F4360] bg-[#071A2A] overflow-hidden shadow-2xl "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1F4360] px-5 py-4">
              <h2 className="text-white font-bold">이력서 미리보기</h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-xl transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div
              className="
                    h-[calc(100%-57px)] overflow-y-auto overflow-x-hidden
                    project-list-scroll
                  "
            >
              <Document
                file="/files/이승찬_이력서.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                  <p className="text-center text-gray-400">
                    PDF를 불러오는 중입니다...
                  </p>
                }
                error={
                  <p className="text-center text-red-400">
                    PDF를 불러오지 못했습니다.
                  </p>
                }
              >
                <div className="flex flex-col items-center gap-6">
                  {Array.from({ length: numPages || 0 }, (_, index) => (
                    <div
                      key={`page_${index + 1}`}
                      className="overflow-hidden rounded-xl bg-white shadow-xl"
                    >
                      <Page
                        pageNumber={index + 1}
                        width={780}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  ))}
                </div>
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
