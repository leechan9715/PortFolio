import { useEffect, useRef, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Card, { CardTitleBlue, CardTitleGreen, Circle } from "./Card";
import { OperationProcessIcon } from "./OperationProcessIcon";
import { ProjectList } from "./ProjectList";
import { ContactMe } from "./ContactMe";
const skills = ["HTML5", "CSS3"];
const Porfile = "/img/profile.png";
const GithubDark = "/img/Github-dark.png";
const HtmlDark = "/img/html-dark.png";
const CssDark = "/img/css-dark.png";
const FigmaDark = "/img/Figma-Dark.png";
const JavascriptDark = "/img/javascript-dark.png";
const JqueryDark = "/img/jquery-dark.png";
const BootstrapDark = "/img/Bootstrap-dark.png";
const MongodbDark = "/img/mongodb-dark.png";
const NextJsDark = "/img/NextJS-Dark.png";
const NodeJsDark = "/img/NodeJS-Dark.png";
const PhpDark = "/img/PHP-Dark.png";
const ReactDark = "/img/React-Dark.png";
const SassDark = "/img/sass-dark.png";
const TailwindCssDark = "/img/TailwindCSS-Dark.png";
const VueDark = "/img/Vue-Dark.png";
const Icon1 = "/img/icon_1.png";
const Icon2 = "/img/icon_2.png";
const Icon3 = "/img/icon_3.png";
const Icon4 = "/img/icon_4.png";
const Email = "/img/email.png";
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
    if (!isWrapVisible) return;

    const draggableItems = [
      { id: "content1", element: content1.current },
      { id: "content2", element: content2.current },
      { id: "content3", element: content3.current },
      { id: "content4", element: content4.current },
    ].filter(({ element }) => element);

    const swapElements = (firstElement, secondElement) => {
      const firstPlaceholder = document.createComment("drag-first");
      const secondPlaceholder = document.createComment("drag-second");
      const firstParent = firstElement.parentNode;
      const secondParent = secondElement.parentNode;

      firstParent.insertBefore(firstPlaceholder, firstElement);
      secondParent.insertBefore(secondPlaceholder, secondElement);
      firstParent.insertBefore(secondElement, firstPlaceholder);
      secondParent.insertBefore(firstElement, secondPlaceholder);
      firstPlaceholder.remove();
      secondPlaceholder.remove();
    };

    const findDropTarget = (draggedId, pointerX, pointerY) => {
      const swapGroups = [
        ["content1", "content2"],
        ["content3", "content4"],
      ];
      const currentGroup = swapGroups.find((group) =>
        group.includes(draggedId),
      );

      return draggableItems.find(({ id, element }) => {
        if (id === draggedId) return false;
        if (!currentGroup?.includes(id)) return false;

        const rect = element.getBoundingClientRect();
        return (
          pointerX >= rect.left &&
          pointerX <= rect.right &&
          pointerY >= rect.top &&
          pointerY <= rect.bottom
        );
      });
    };

    const cleanups = draggableItems.map(({ id, element }) => {
      element.style.position = "relative";
      element.style.cursor = "grab";
      element.style.touchAction = "none";

      const handlePointerDown = (event) => {
        if (isClicked) return;

        event.preventDefault();

        const startX = event.clientX;
        const startY = event.clientY;

        element.setPointerCapture(event.pointerId);
        element.style.cursor = "grabbing";
        element.style.zIndex = "20";

        const handlePointerMove = (moveEvent) => {
          const nextX = moveEvent.clientX - startX;
          const nextY = moveEvent.clientY - startY;

          element.style.translate = `${nextX}px ${nextY}px`;
        };

        const handlePointerEnd = (endEvent) => {
          if (element.hasPointerCapture(endEvent.pointerId)) {
            element.releasePointerCapture(endEvent.pointerId);
          }

          element.style.cursor = "grab";
          element.style.zIndex = "";
          element.style.translate = "";

          const dropTarget = findDropTarget(
            id,
            endEvent.clientX,
            endEvent.clientY,
          );

          if (dropTarget) {
            swapElements(element, dropTarget.element);
          }

          element.removeEventListener("pointermove", handlePointerMove);
          element.removeEventListener("pointerup", handlePointerEnd);
          element.removeEventListener("pointercancel", handlePointerEnd);
        };

        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerup", handlePointerEnd);
        element.addEventListener("pointercancel", handlePointerEnd);
      };

      element.addEventListener("pointerdown", handlePointerDown);

      return () => {
        element.removeEventListener("pointerdown", handlePointerDown);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [isClicked, isWrapVisible]);

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
          className="flex flex-wrap items-center justify-between relative z-10 w-full rounded-2xl border border-(--border) px-10 py-6.25 gap-3.5"
          ref={wrap}
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex w-full max-lg:flex-col max-lg:gap-2.5 max-md:gap-2.5">
            <Card
              ref={content1}
              className="max-w-83 w-full max-lg:order-2 max-lg:max-w-none"
              style={{ transform: "translateX(-120%)", opacity: 0 }}
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
              className="flex items-center justify-center flex-col gap-3 flex-1 text-center tracking-widest max-lg:order-1 max-lg:w-full"
              ref={content6}
              style={{ transform: "translateY(-120%)", opacity: 0 }}
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
              <h1 className="text-center text-7xl bg-clip-text text-transparent bg-(image:--main-title-color) font-bold max-md:text-5xl">
                이승찬
              </h1>
              <h2 className="text-4xl font-semibold max-md:text-2xl ">
                사용자의 시선에서 흐름을
                <span className="text-5xl bg-clip-text text-transparent bg-(image:--text-color) max-md:text-3xl">
                  바라
                </span>
                보고
              </h2>
              <h2 className="text-4xl font-semibold mb-8 max-md:text-2xl">
                아이디어를 실제
                <span className="text-5xl bg-clip-text text-transparent bg-(image:--text-color) max-md:text-3xl">
                  경험
                </span>
                으로 연결하는사람
              </h2>
              <div>
                <button
                  className="project-button-split text-gray-500 cursor-pointer px-14 py-2.5 rounded-lg duration-300 hover:text-white max-md:px-8 max-md:py-1"
                  onClick={handleClick}
                >
                  <span className="project-button-hit-area" />
                  <p className="project-button-label font-bold text-2xl max-md:text-lg">
                    <span className="project-button-part project-button-part-left">
                      프로젝트
                    </span>
                    <span className="project-button-part project-button-part-right">
                      둘러보기
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <Card
              className="max-w-83 w-full flex flex-col max-lg:order-3 max-lg:max-w-none"
              ref={content2}
              style={{ transform: "translateX(120%)", opacity: 0 }}
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
          <div className="w-full flex justify-between max-md:flex-col max-md:gap-2.5 max-lg:gap-2.5">
            <Card
              className="max-w-83 w-full max-md:max-w-full"
              ref={content3}
              style={{ transform: "translateX(-120%)", opacity: 0 }}
            >
              <CardTitleGreen>CONTACT ME</CardTitleGreen>
              <div className="flex flex-col gap-5.5">
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
              className="max-w-83 w-full flex flex-col max-md:max-w-full"
              ref={content4}
              style={{ transform: "translateX(120%)", opacity: 0 }}
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
            className="w-full min-w-0"
            ref={content5}
            style={{ transform: "translateY(120%)", opacity: 0 }}
          >
            <Card className="w-full min-w-0 overflow-hidden bg-(--dark-gradient)">
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
                      className="bg-(--deepdark-gradient) flex flex-col gap-1.5"
                      style={{
                        padding: "15px",
                      }}
                    >
                      <img
                        className="skill-icon-image cursor-pointer"
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
          className="pointer-events-none fixed z-50 w-12"
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
