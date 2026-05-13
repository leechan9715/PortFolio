import { useEffect, useRef, useState } from "react";
import { Main } from "./comopents/Main";

function App() {
  const [isMainClicked, setIsMainClicked] = useState(false);
  const absoluteBg = useRef(null);
  // 프로젝트 둘러보기 버튼 눌럿을때 상태

  // 프로젝트 둘러보기 버튼 눌럿을때 함수

  useEffect(() => {
    const element = absoluteBg.current;
    if (!element) return;

    element.style.transition = "opacity 0.5s ease";

    if (isMainClicked) {
      element.style.opacity = "0";

      const timer = setTimeout(() => {
        element.style.display = "none";
      }, 500);

      return () => clearTimeout(timer);
    }

    element.style.display = "";
    void element.offsetWidth;
    element.style.opacity = "1";
  }, [isMainClicked]);

  return (
    <div className="relative min-h-screen flex items-center px-6.25">
      <div
        className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]"
        ref={absoluteBg}
        style={{ opacity: 1 }}
      />
      <Main onClickChange={setIsMainClicked} />
    </div>
  );
}

export default App;
