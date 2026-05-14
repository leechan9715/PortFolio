import { useSelector } from "react-redux";

import Mute from "../assets/img/mute.png";
import Goreon from "../assets/img/goreon.png";

import ProfileImg from "../assets/img/profile-2.png";
import Card from "./Card";
import IconBootstrap from "../assets/img/light/Bootstrap-Light.png";
import IconCss from "../assets/img/light/CSS-Light.png";
import IconFigma from "../assets/img/light/Figma-Light.png";
import IconGithub from "../assets/img/light/Github-Light.png";
import IconHtml from "../assets/img/light/HTML-Light.png";
import IconJavaScript from "../assets/img/light/JavaScript-Light.png";
import IconJQuery from "../assets/img/light/JQuery-Light.png";
import IconMongoDB from "../assets/img/light/mongodb-light.png";
import IconNextJS from "../assets/img/light/NextJS-Light.png";
import IconNodeJS from "../assets/img/light/NodeJS-Light.png";
import IconPhp from "../assets/img/light/PHP-Light.png";
import IconReact from "../assets/img/light/React-Light.png";
import IconSass from "../assets/img/light/Sass-Light.png";
import IconTailwindCSS from "../assets/img/light/TailwindCSS-Light.png";
import IconVueJS from "../assets/img/light/VueJS-Light.png";
import { SkillStat } from "./SkillStat";
import { useState } from "react";
import { ProjectDetail } from "./ProjectDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const lightIcons = [
  { icon: IconGithub, title: "Github", percent: "90" },
  { icon: IconHtml, title: "HTML", percent: "95" },
  { icon: IconCss, title: "CSS", percent: "95" },
  { icon: IconJavaScript, title: "JavaScript", percent: "85" },
  { icon: IconJQuery, title: "JQuery", percent: "90" },
  { icon: IconSass, title: "Sass", percent: "85" },
  { icon: IconTailwindCSS, title: "TailwindCSS", percent: "90" },
  { icon: IconReact, title: "React", percent: "90" },
  { icon: IconNextJS, title: "NextJS", percent: "83" },
  { icon: IconVueJS, title: "VueJS", percent: "80" },
  { icon: IconNodeJS, title: "NodeJS", percent: "80" },
  { icon: IconMongoDB, title: "MongoDB", percent: "83" },
  { icon: IconPhp, title: "PHP", percent: "75" },
  { icon: IconFigma, title: "Figma", percent: "83" },
  { icon: IconBootstrap, title: "Bootstrap", percent: "85" },
];

export const SubPage = () => {
  const { isMainHidden } = useSelector((state) => state.ui);
  const [shouldFillSkills, setShouldFillSkills] = useState(false);
  const [isActive, setIsActive] = useState("skills");

  function tabButton(tabName) {
    setIsActive(tabName);
  }

  return (
    <section className="relative z-10 w-full text-white flex ">
      <div className="section-profile-enter max-w-1/3 w-full flex items-center justify-center">
        <img src={ProfileImg} className="text-center" alt="profile" />
      </div>
      <div
        className="section-content-enter max-w-2/3 w-full flex justify-center overflow-hidden"
        onAnimationEnd={(event) => {
          if (event.animationName === "sectionContentEnter") {
            setShouldFillSkills(true);
          }
        }}
      >
        <div className="w-full max-h-12 h-full">
          <Card
            style={{ borderTop: "none", paddingTop: 0 }}
            className="flex gap-3 flex-col rounded-t-none"
          >
            <div className="flex h-full w-full ">
              <Card
                className="flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none rounded-br-none"
                onClick={() => tabButton("skills")}
              >
                <h2
                  className={
                    isActive === "skills" ? "text-white" : "text-gray-400"
                  }
                >
                  SKILLS
                </h2>
              </Card>
              <Card
                className="flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none border-l-0 rounded-bl-none hover:border-l"
                onClick={() => tabButton("projects")}
              >
                <h2
                  className={
                    isActive === "projects" ? "text-white" : "text-gray-400"
                  }
                >
                  PROJECTS
                </h2>
              </Card>
            </div>
            {isActive === "skills" && (
              <Card className="grid grid-cols-2 gap-12" style={{ padding: 40 }}>
                <div className=" flex flex-col gap-5">
                  {lightIcons.slice(0, 8).map((icon, index) => (
                    <SkillStat
                      key={`${isMainHidden}-${index}`}
                      percent={icon.percent}
                      title={icon.title}
                      icon={icon.icon}
                      shouldFill={shouldFillSkills}
                    />
                  ))}
                </div>
                <div className=" flex flex-col gap-5">
                  {lightIcons.slice(8, 15).map((icon, index) => (
                    <SkillStat
                      key={`${isMainHidden}-${index + 8}`}
                      percent={icon.percent}
                      title={icon.title}
                      icon={icon.icon}
                      shouldFill={shouldFillSkills}
                    />
                  ))}
                </div>
              </Card>
            )}
            {isActive === "projects" && (
              <Card style={{ padding: 40 }} className={`flex flex-col gap-5 `}>
                <ul className="flex gap-5">
                  <li>
                    <Card style={{ padding: "8px 60px", borderRadius: "20px" }}>
                      <p>전체</p>
                    </Card>
                  </li>
                  <li>
                    <Card style={{ padding: "8px 60px", borderRadius: "20px" }}>
                      <p>개인프로젝트</p>
                    </Card>
                  </li>
                  <li>
                    <Card style={{ padding: "8px 60px", borderRadius: "20px" }}>
                      <p>팀 프로젝트</p>
                    </Card>
                  </li>
                </ul>
                <div className="w-full min-w-0 overflow-hidden">
                  <Swiper
                    className="w-full"
                    slidesPerView={1}
                    spaceBetween={24}
                    grabCursor
                  >
                    <SwiperSlide>
                      <ProjectDetail
                        thumbnail={Mute}
                        title="MUTE"
                        desc="Vue 3 기반 음악 서비스 팀 프로젝트입니다. 온보딩, 로컬/소셜 로그인, 메인/검색/차트, 플레이어, 라이브러리, 마이페이지, AI 페이지를 포함합니다."
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                        <ProjectDetail
                          className="flex-col min-h-[90vh]"
                          thumbnail={Goreon}
                          itemsClassName="max-w-full overflow-y-hidden"
                          title="GOREON"
                          desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Card>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
