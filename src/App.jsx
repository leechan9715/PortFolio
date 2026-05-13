import { useEffect, useRef, useState } from "react";
import Card, { CardTitleBlue, CardTitleGreen, Circle } from "./comopents/Card";
import Porfile from "../public/img/profile.png";
import GithubDark from "../public/img/Github-Dark.png";
import HtmlDark from "../public/img/html-dark.png";
import CssDark from "../public/img/css-dark.png";
import FigmaDark from "../public/img/Figma-Dark.png";
import JavascriptDark from "../public/img/javascript-dark.png";
import JqueryDark from "../public/img/jquery-dark.png";
import BootstrapDark from "../public/img/Bootstrap-dark.png";
import MongodbDark from "../public/img/mongodb-dark.png";
import NextJsDark from "../public/img/NextJS-Dark.png";
import NodeJsDark from "../public/img/NodeJS-Dark.png";
import PhpDark from "../public/img/PHP-Dark.png";
import ReactDark from "../public/img/React-Dark.png";
import SassDark from "../public/img/sass-dark.png";
import TailwindCssDark from "../public/img/TailwindCSS-Dark.png";
import VueDark from "../public/img/Vue-Dark.png";
import Icon1 from "../public/img/icon_1.png";
import Icon2 from "../public/img/icon_2.png";
import Icon3 from "../public/img/icon_3.png";
import Icon4 from "../public/img/icon_4.png";
import Email from "../public/img/email.png";
import { OperationProcessIcon } from "./comopents/OperationProcessIcon";
import { ProjectList } from "./comopents/ProjectList";
import { ContactMe } from "./comopents/ContactMe";
const skills = ["HTML5", "CSS3"];
const darkIcons = [
  GithubDark,
  HtmlDark,
  CssDark,
  FigmaDark,
  JavascriptDark,
  JqueryDark,
  BootstrapDark,
  MongodbDark,
  NextJsDark,
  NodeJsDark,
  PhpDark,
  ReactDark,
  SassDark,
  TailwindCssDark,
  VueDark,
];

function App() {
  // 프로젝트 둘러보기 버튼 눌럿을때 상태
  const [isClicked, setIsClicked] = useState(false);
  const [isWrapVisible, setIsWrapVisible] = useState(true);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);
  const content6 = useRef(null);
  const absoluteBg = useRef(null);
  const wrap = useRef(null);

  // 프로젝트 둘러보기 버튼 눌럿을때 함수
  const handleClick = () => {
    if (isClicked) {
      setIsWrapVisible(true);
    }

    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("bg-2-active", isClicked);

    return () => {
      document.body.classList.remove("bg-2-active");
    };
  }, [isClicked]);

  useEffect(() => {
    const hideTimers = [];

    const animateContent = (element, transformValue) => {
      if (!element) return;

      element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      element.style.willChange = "transform, opacity";

      if (isClicked) {
        element.style.transform = transformValue;
        element.style.opacity = "0";
        element.style.pointerEvents = "none";

        const timer = setTimeout(() => {
          element.style.display = "none";
        }, 500);

        hideTimers.push(timer);
        return;
      }

      element.style.display = "";
      element.style.pointerEvents = "auto";
      void element.offsetWidth;
      element.style.transform = "translate(0, 0)";
      element.style.opacity = "1";
    };

    const animateAbsoluteBg = (element) => {
      if (!element) return;

      element.style.transition = "opacity 0.5s ease";

      if (isClicked) {
        element.style.opacity = "0";

        const timer = setTimeout(() => {
          element.style.display = "none";
        }, 500);

        hideTimers.push(timer);
        return;
      }

      element.style.display = "";
      void element.offsetWidth;
      element.style.opacity = "1";
    };

    const animateWrapBorder = (element) => {
      if (!element) return;

      element.style.transition = "border-color 1s ease";
      element.style.borderColor = isClicked ? "transparent" : "var(--border)";

      if (isClicked) {
        const timer = setTimeout(() => {
          setIsWrapVisible(false);
        }, 1000);

        hideTimers.push(timer);
      }
    };

    animateContent(content1.current, "translateX(-120%)");
    animateContent(content2.current, "translateX(120%)");
    animateContent(content3.current, "translateX(-120%)");
    animateContent(content4.current, "translateX(120%)");
    animateContent(content5.current, "translateY(120%)");
    animateContent(content6.current, "translateY(-120%)");
    animateAbsoluteBg(absoluteBg.current);
    animateWrapBorder(wrap.current);

    return () => {
      hideTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClicked]);
  return (
    <div className="relative min-h-screen flex items-center px-6.25">
      <div
        className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]"
        ref={absoluteBg}
        style={{ opacity: 1 }}
      />
      {isWrapVisible && (
        <section
          className="flex flex-wrap items-center justify-between relative z-10 w-full rounded-2xl border border-(--border) px-10 py-6.25 gap-3.5"
          ref={wrap}
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex w-full">
          <Card
            ref={content1}
            className="max-w-83  w-full "
            style={{ transform: "translateX(0)", opacity: 1 }}
          >
            <CardTitleGreen>프로필</CardTitleGreen>
            <div className="flex flex-col items-center text-center ">
              <img src={Porfile} alt="profile" className="max-w-1/3 mb-6.5" />
              <h3 className="text-2xl font-semibold">이승찬</h3>
              <p className="text-sm bg-clip-text text-transparent bg-(image:--text-color) bac mb-6.5">
                Frontend Developer
              </p>
              <p className="text-sm font-light mb-6.5">
                사용자 흐름을 이해하고,
                <br />
                직관적인 UI로 구현하는프론트엔드
                <br />
                개발자입니다.
              </p>
              <div className="flex gap-1.5 items-center ">
                <p className="text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)">
                  React
                </p>
                <p className="text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)">
                  Next.js
                </p>
                <p className="text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)">
                  TypeScript
                </p>
              </div>
            </div>
          </Card>
          <div
            className="flex items-center justify-center  flex-col  gap-3 flex-1 text-center tracking-widest"
            ref={content6}
            style={{ transform: "translate(0, 0)", opacity: 1 }}
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="flex items-center gap-5">
                <span className="font-extralight text-gray-300 text-sm">
                  Frontend Developer
                </span>
                <Circle />
              </div>
              <div className="flex items-center gap-5 ">
                <span className="font-extralight text-gray-300 text-sm">
                  React
                </span>
                <Circle />
              </div>
              <div className="flex items-center gap-5">
                <span className="font-extralight text-gray-300 text-sm">
                  Next.js
                </span>
                <Circle />
              </div>
              <div className="flex items-center gap-5">
                <span className="font-extralight text-gray-300 text-sm">
                  TypeScript
                </span>
              </div>
            </div>
            <h1 className="text-center text-7xl bg-clip-text text-transparent bg-(image:--main-title-color) font-bold">
              이승찬
            </h1>
            <h2 className="text-4xl font-semibold ">
              사용자의 시선에서 흐름을
              <span className="text-5xl bg-clip-text text-transparent bg-(image:--text-color)">
                바라
              </span>
              보고
            </h2>
            <h2 className="text-4xl font-semibold mb-8">
              아이디어를 실제
              <span className="text-5xl bg-clip-text text-transparent bg-(image:--text-color)">
                경험
              </span>
              으로 연결하는사람
            </h2>
            <div>
              <button
                className="text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border)"
                onClick={handleClick}
              >
                <p className="font-bold text-2xl ">프로젝트 둘러보기</p>
              </button>
            </div>
          </div>

          <Card
            className="max-w-83  w-full flex flex-col"
            ref={content2}
            style={{ transform: "translateX(0)", opacity: 1 }}
          >
            <CardTitleGreen>프로젝트</CardTitleGreen>
            <div className="flex flex-col gap-3 justify-center item ">
              <ProjectList
                title="GOREON"
                desc="AI 전자기기 쇼핑 플랫폼"
                skills={skills}
              />
              <ProjectList
                title="GOREON"
                desc="AI 전자기기 쇼핑 플랫폼"
                skills={skills}
              />
              <ProjectList
                title="GOREON"
                desc="AI 전자기기 쇼핑 플랫폼"
                skills={skills}
              />
            </div>
          </Card>
        </div>
        <div className="w-full flex justify-between">
          <Card
            className="max-w-83 w-full"
            ref={content3}
            style={{ transform: "translateX(0)", opacity: 1 }}
          >
            <CardTitleGreen>CONTACT ME</CardTitleGreen>
            <div className="flex flex-col gap-5.5">
              <ContactMe
                src={GithubDark}
                title="GitHub"
                url="github.com/leechan9715"
              />
              <ContactMe src={Email} title="Email" url="iseung809@gmail.com" />
            </div>
          </Card>
          <Card
            className="max-w-83 w-full flex flex-col"
            ref={content4}
            style={{ transform: "translateX(0)", opacity: 1 }}
          >
            <CardTitleBlue>운영프로세스</CardTitleBlue>
            <div className="flex gap-3.5">
              <div className="flex flex-col items-center justify-center">
                <p className="w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before">
                  01
                </p>
                <div className="h-5 w-0.5 bg-(--border)" />
                <p className="w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before">
                  02
                </p>
                <div className="h-5 w-0.5 bg-(--border)" />
                <p className="w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before">
                  03
                </p>
                <div className="h-5 w-0.5 bg-(--border)" />
                <p className="w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before">
                  04
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <OperationProcessIcon
                  src={Icon1}
                  title="기획분석"
                  desc="요구사항 분석 및 사용자 흐름 정의"
                />
                <OperationProcessIcon
                  src={Icon2}
                  title="UI/UX 설계"
                  desc="와이어프레임 및 UI 설계"
                />
                <OperationProcessIcon
                  src={Icon3}
                  title="개발 구현"
                  desc="재사용 검증한 컴포넌트 개발"
                />
                <OperationProcessIcon
                  src={Icon4}
                  title="배포 & 운영"
                  desc="안정적인 운영 및 지속적 모니터링"
                />
              </div>
            </div>
          </Card>
        </div>
        <div
          className=" w-full"
          ref={content5}
          style={{ transform: "translate(0, 0)", opacity: 1 }}
        >
          <Card className=" flex justify-between items-center gap-5.5 bg-(--dark-gradient)">
            {darkIcons.map((icon, index) => (
              <Card
                className="bg-(--deepdark-gradient) flex flex-col gap-1.5 "
                style={{
                  padding: "15px",
                }}
                key={index}
              >
                <img
                  key={index}
                  className="w-12 "
                  src={icon}
                  alt="skill icon"
                />
              </Card>
            ))}
          </Card>
          </div>
        </section>
      )}
      <section></section>
    </div>
  );
}

export default App;
