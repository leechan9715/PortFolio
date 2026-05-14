import { useEffect, useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Card, { CardTitleBlue, CardTitleGreen, Circle } from "./Card";
import { OperationProcessIcon } from "./OperationProcessIcon";
import { ProjectList } from "./ProjectList";
import { ContactMe } from "./ContactMe";
import Porfile from "../assets/img/profile.png";
import GithubDark from "../assets/img/Github-dark.png";
import HtmlDark from "../assets/img/html-dark.png";
import CssDark from "../assets/img/css-dark.png";
import FigmaDark from "../assets/img/Figma-Dark.png";
import JavascriptDark from "../assets/img/javascript-dark.png";
import JqueryDark from "../assets/img/jquery-dark.png";
import BootstrapDark from "../assets/img/Bootstrap-dark.png";
import MongodbDark from "../assets/img/mongodb-dark.png";
import NextJsDark from "../assets/img/NextJS-Dark.png";
import NodeJsDark from "../assets/img/NodeJS-Dark.png";
import PhpDark from "../assets/img/PHP-Dark.png";
import ReactDark from "../assets/img/React-Dark.png";
import SassDark from "../assets/img/sass-dark.png";
import TailwindCssDark from "../assets/img/TailwindCSS-Dark.png";
import VueDark from "../assets/img/Vue-Dark.png";
import Icon1 from "../assets/img/icon_1.png";
import Icon2 from "../assets/img/icon_2.png";
import Icon3 from "../assets/img/icon_3.png";
import Icon4 from "../assets/img/icon_4.png";
import Email from "../assets/img/email.png";

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

const layoutClasses = {
  section:
    "flex flex-wrap items-center justify-between relative z-10 w-full rounded-2xl border border-(--border) px-10 py-6.25 gap-3.5 max-sm:py-3.25 max-sm:px-5",
  topRow: "flex w-full max-lg:flex-col max-lg:gap-2.5 max-md:gap-2.5",
  bottomRow:
    "w-full flex justify-between max-md:flex-col max-md:gap-2.5 max-lg:gap-2.5",
};

const profileClasses = {
  card: "max-w-83 w-full max-lg:order-2 max-lg:max-w-none",
  body: "flex flex-col items-center text-center",
  image: "max-w-1/3 mb-6.5",
  role: "text-sm bg-clip-text text-transparent bg-(image:--text-color) bac mb-6.5",
  desc: "text-sm font-light mb-6.5",
  tags: "flex gap-1.5 items-center",
  tag: "text-sm bg-clip-text text-transparent bg-(image:--text-color) px-2 py-1 rounded-lg border border-(--border)",
};

const heroClasses = {
  wrap: "flex items-center justify-center flex-col gap-3 flex-1 text-center tracking-widest max-lg:order-1 max-lg:w-full",
  meta: "flex items-center gap-5 mb-8  max-xl:grid max-xl:grid-cols-2 max-md:mb-2 max-xl:justify-items-center max-lg:flex max-md:grid max-md:grid-cols-2 ",
  metaItem: "flex items-center max-lg:gap-2.5 min-xl:gap-5",
  circle: "max-md:hidden min-lg:hidden min-xl:block",
  metaText: "font-extralight text-gray-300 text-sm ",
  name: "text-center text-7xl bg-clip-text text-transparent bg-(image:--main-title-color) font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl",
  line: "text-4xl font-semibold max-xl:text-3xl max-md:text-2xl",
  accent:
    "text-5xl bg-clip-text text-transparent bg-(image:--text-color) max-xl:text-4xl max-md:text-3xl",
  button:
    "text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border) max-md:px-8 max-md:py-1",
  buttonText: "font-bold text-2xl max-xl:text-xl max-md:text-lg",
};

const projectClasses = {
  card: "max-w-83 w-full flex flex-col max-lg:order-3 max-lg:max-w-none",
  list: "flex flex-col gap-3 justify-center item",
};

const contactClasses = {
  card: "max-w-83 w-full max-md:max-w-full",
  list: "flex flex-col gap-5.5",
};

const processClasses = {
  card: "max-w-83 w-full flex flex-col max-md:max-w-full max-sm:hidden ",
  layout: "flex gap-3.5 ",
  rail: "flex flex-col items-center justify-center",
  step: "w-8 h-8 border border-(--border) text-sm rounded-full flex justify-center items-center before",
  line: "h-5 w-0.5 bg-(--border)",
  content: "flex flex-col justify-between items-start",
};

const skillClasses = {
  wrap: "w-full min-w-0",
  panel: "w-full min-w-0 overflow-hidden bg-(--dark-gradient)",
  tile: "bg-(--deepdark-gradient) flex flex-col gap-1.5",
  icon: "skill-icon-image cursor-pointer",
  floatingIcon: "pointer-events-none fixed z-50 w-12",
};

export const Main = ({ onClickChange }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isWrapVisible, setIsWrapVisible] = useState(true);
  const [floatingIcon, setFloatingIcon] = useState(null);
  const [floatingIconPosition, setFloatingIconPosition] = useState({
    x: 0,
    y: 0,
  });
  const floatingIconTarget = useRef({ x: 0, y: 0 });
  const floatingIconCurrent = useRef({ x: 0, y: 0 });
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const content4 = useRef(null);
  const content5 = useRef(null);
  const content6 = useRef(null);
  const wrap = useRef(null);

  // 프로젝트 둘러보기 버튼 눌럿을때 함수
  const handleClick = () => {
    if (isClicked) {
      setIsWrapVisible(true);
    }

    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    onClickChange(isClicked);
  }, [isClicked, onClickChange]);

  useEffect(() => {
    document.body.classList.toggle("bg-2-active", isClicked);

    return () => {
      document.body.classList.remove("bg-2-active");
    };
  }, [isClicked]);

  useEffect(() => {
    if (!floatingIcon) return;

    const handlePointerMove = (event) => {
      floatingIconTarget.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    let animationFrameId;

    const followPointer = () => {
      const current = floatingIconCurrent.current;
      const target = floatingIconTarget.current;

      const nextPosition = {
        x: current.x + (target.x - current.x) * 0.16,
        y: current.y + (target.y - current.y) * 0.16,
      };

      floatingIconCurrent.current = nextPosition;
      setFloatingIconPosition(nextPosition);
      animationFrameId = requestAnimationFrame(followPointer);
    };

    window.addEventListener("pointermove", handlePointerMove);
    animationFrameId = requestAnimationFrame(followPointer);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [floatingIcon]);

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
    animateWrapBorder(wrap.current);

    return () => {
      hideTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClicked]);
  return (
    <>
      {isWrapVisible && (
        <section
          className={layoutClasses.section}
          ref={wrap}
          style={{ borderColor: "var(--border)" }}
        >
          <div className={layoutClasses.topRow}>
            <Card
              ref={content1}
              className={profileClasses.card}
              style={{ transform: "translateX(-120%)", opacity: 0 }}
            >
              <CardTitleGreen>프로필</CardTitleGreen>
              <div className={profileClasses.body}>
                <img
                  src={Porfile}
                  alt="profile"
                  className={profileClasses.image}
                />
                <h3 className="text-2xl font-semibold">이승찬</h3>
                <p className={profileClasses.role}>Frontend Developer</p>
                <p className={profileClasses.desc}>
                  사용자 흐름을 이해하고,
                  <br />
                  직관적인 UI로 구현하는프론트엔드
                  <br />
                  개발자입니다.
                </p>
                <div className={profileClasses.tags}>
                  <p className={profileClasses.tag}>React</p>
                  <p className={profileClasses.tag}>Next.js</p>
                  <p className={profileClasses.tag}>TypeScript</p>
                </div>
              </div>
            </Card>
            <div
              className={heroClasses.wrap}
              ref={content6}
              style={{ transform: "translateY(-120%)", opacity: 0 }}
            >
              <div className={heroClasses.meta}>
                <div className={heroClasses.metaItem}>
                  <span className={heroClasses.metaText}>
                    Frontend Developer
                  </span>
                  <Circle className={heroClasses.circle} />
                </div>
                <div className={heroClasses.metaItem}>
                  <span className={heroClasses.metaText}>React</span>
                  <Circle className={heroClasses.circle} />
                </div>
                <div className={heroClasses.metaItem}>
                  <span className={heroClasses.metaText}>Next.js</span>
                  <Circle className={heroClasses.circle} />
                </div>
                <div className={heroClasses.metaItem}>
                  <span className={heroClasses.metaText}>TypeScript</span>
                </div>
              </div>
              <h1 className={heroClasses.name}>이승찬</h1>
              <h2 className={heroClasses.line}>
                사용자의 시선에서 흐름을
                <span className={heroClasses.accent}>바라</span>
                보고
              </h2>
              <h2 className={`${heroClasses.line} mb-8`}>
                아이디어를 실제
                <span className={heroClasses.accent}>경험</span>
                으로 연결하는사람
              </h2>
              <div>
                <button className={heroClasses.button} onClick={handleClick}>
                  <p className={heroClasses.buttonText}>프로젝트 둘러보기</p>
                </button>
              </div>
            </div>
            <Card
              className={projectClasses.card}
              ref={content2}
              style={{ transform: "translateX(120%)", opacity: 0 }}
            >
              <CardTitleGreen>프로젝트</CardTitleGreen>
              <div className={projectClasses.list}>
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
          <div className={layoutClasses.bottomRow}>
            <Card
              className={contactClasses.card}
              ref={content3}
              style={{ transform: "translateX(-120%)", opacity: 0 }}
            >
              <CardTitleGreen>CONTACT ME</CardTitleGreen>
              <div className={contactClasses.list}>
                <ContactMe
                  src={GithubDark}
                  title="GitHub"
                  url="github.com/leechan9715"
                />
                <ContactMe
                  src={Email}
                  title="Email"
                  url="iseung809@gmail.com"
                />
              </div>
            </Card>
            <Card
              className={processClasses.card}
              ref={content4}
              style={{ transform: "translateX(120%)", opacity: 0 }}
            >
              <CardTitleBlue>운영프로세스</CardTitleBlue>
              <div className={processClasses.layout}>
                <div className={processClasses.rail}>
                  <p className={processClasses.step}>01</p>
                  <div className={processClasses.line} />
                  <p className={processClasses.step}>02</p>
                  <div className={processClasses.line} />
                  <p className={processClasses.step}>03</p>
                  <div className={processClasses.line} />
                  <p className={processClasses.step}>04</p>
                </div>
                <div className={processClasses.content}>
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
            className={skillClasses.wrap}
            ref={content5}
            style={{ transform: "translateY(120%)", opacity: 0 }}
          >
            <Card className={skillClasses.panel}>
              <Swiper
                className="skill-icon-swiper"
                modules={[FreeMode]}
                freeMode
                grabCursor
                slidesPerView="auto"
                spaceBetween={39}
              >
                {darkIcons.map((icon, index) => (
                  <SwiperSlide
                    className="skill-icon-slide"
                    key={index}
                    style={{ width: "80px" }}
                  >
                    <Card
                      className={skillClasses.tile}
                      style={{
                        padding: "15px",
                      }}
                    >
                      <img
                        className={skillClasses.icon}
                        onClick={(event) => {
                          event.stopPropagation();
                          const startPosition = {
                            x: event.clientX,
                            y: event.clientY,
                          };

                          floatingIconTarget.current = startPosition;
                          floatingIconCurrent.current = startPosition;
                          setFloatingIconPosition(startPosition);
                          setFloatingIcon((currentIcon) =>
                            currentIcon === icon ? null : icon,
                          );
                        }}
                        src={icon}
                        alt="skill icon"
                      />
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Card>
          </div>
        </section>
      )}
      {floatingIcon && (
        <img
          className={skillClasses.floatingIcon}
          src={floatingIcon}
          alt="selected skill icon"
          style={{
            left: floatingIconPosition.x,
            top: floatingIconPosition.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </>
  );
};
