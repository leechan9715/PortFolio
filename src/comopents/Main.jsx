import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMain, startMainTransition } from "../store/uiSlice";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
/* 컴포넌트 */
import Card, { CardTitleBlue, CardTitleGreen, Circle } from "./Card";
import { ContactMe } from "./ContactMe";
import { OperationProcessIcon } from "./OperationProcessIcon";
import { ProjectList } from "./ProjectList";
/* 이미지 , 아이콘 */
import Porfile from "../assets/img/profile.png";
import Call from "../assets/img/call.png";
import Email from "../assets/img/email.png";

/* 데이터 목록 */
import {
  contactClasses,
  heroClasses,
  layoutClasses,
  processClasses,
  profileClasses,
  projectClasses,
  skillClasses,
} from "../data/MainClass";
import { darkIcons, ProcessList, projects } from "../data/Main";

export const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [floatingIcon, setFloatingIcon] = useState(null);
  const [floatingIconPosition, setFloatingIconPosition] = useState({
    x: 0,
    y: 0,
  });
  const dispatch = useDispatch();

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
    dispatch(startMainTransition());
    setIsClicked(true);
  };

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
          dispatch(hideMain());
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
  }, [isClicked, dispatch]);
  return (
    <>
      <section
        className={layoutClasses.section}
        ref={wrap}
        style={{ borderColor: "var(--border)" }}
      >
        {/* 프로필 , 프로젝트리스트 , Hero */}
        <div className={layoutClasses.topRow}>
          {/* 프로필 */}
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
                <p className={profileClasses.tag}>Vue</p>
              </div>
            </div>
          </Card>
          {/* Hero Section */}
          <div
            className={heroClasses.wrap}
            ref={content6}
            style={{ transform: "translateY(-120%)", opacity: 0 }}
          >
            <div className={heroClasses.meta}>
              <div className={heroClasses.metaItem}>
                <span className={heroClasses.metaText}>Frontend Developer</span>
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
          {/* 프로젝트 리스트 */}
          <Card
            className={projectClasses.card}
            ref={content2}
            style={{ transform: "translateX(120%)", opacity: 0 }}
          >
            <CardTitleGreen>프로젝트</CardTitleGreen>
            <div
              className={`${projectClasses.list} project-list-scroll max-h-70 overflow-y-auto overflow-x-hidden overscroll-contain pr-2`}
            >
              {projects.map((item, index) => (
                <ProjectList
                  key={index}
                  src={item.src}
                  title={item.title}
                  desc={item.desc}
                  skills={item.skils}
                />
              ))}
            </div>
          </Card>
        </div>
        {/* Contact me , 운영 프로세스  */}
        <div className={layoutClasses.bottomRow}>
          {/* contact me card */}
          <Card
            className={contactClasses.card}
            ref={content3}
            style={{ transform: "translateX(-120%)", opacity: 0 }}
          >
            <CardTitleGreen>CONTACT ME</CardTitleGreen>
            <div className={contactClasses.list}>
              <ContactMe src={Call} title="Phone" url="010-8686-9869" />
              <ContactMe
                src={Email}
                title="Email"
                url="iseungchan809@gmail.com"
              />
            </div>
          </Card>
          {/* 운영 프로세스 card */}
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
                {ProcessList.map((item, index) => (
                  <OperationProcessIcon
                    key={index}
                    src={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
        {/* Skill Icons 목록 */}
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
