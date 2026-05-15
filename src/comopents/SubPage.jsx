import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// 데이터
import { ContactData, LightIcons } from "../data/SubPage";
// redux 상태
import { showMain, startMainReturn } from "../store/uiSlice";
// 프로필 전신 이미지
import ProfileImg from "../assets/img/profile-2.png";
// 프로젝트 썸네일 이미지
import Mute from "../assets/img/mute.png";
import Goreon from "../assets/img/goreon.png";
import Shop from "../assets/img/shop.png";
import Netflix from "../assets/img/netflix.png";
import PortFolio2 from "../assets/img/portfolio-2.png";
import PortFolio from "../assets/img/portfolio.png";
import Kakao from "../assets/img/kakao.png";
// 아이콘
import PDF from "../assets/img/pdf.png";
import Arrow from "../assets/img/arrow.png";
// 컴포넌트
import Card from "./Card";
import { SkillStat } from "./SkillStat";
import { ProjectDetail } from "./ProjectDetail";
import { Contact } from "./Contact";
import { ContactMe, ContactMe2 } from "./ContactMe";
// 스와이퍼 모듈 cSS
import "swiper/css";
import { Pdf } from "./Pdf";
import { personalProjectInfo, teamProjectInfo } from "../data/ProjectData";

const contactClasses = {
  card: " w-full",
  list: "grid grid-cols-2 gap-5.5 ",
};

export const SubPage = () => {
  const dispatch = useDispatch();
  const { isMainHidden } = useSelector((state) => state.ui);
  const [shouldFillSkills, setShouldFillSkills] = useState(false);
  const [isActive, setIsActive] = useState("projects");
  const [isSelectProject, setIsSelectProject] = useState("all");
  const [isLeaving, setIsLeaving] = useState(false);
  const [isOepn, setIsOpen] = useState(false);

  function tabButton(tabName) {
    setIsActive(tabName);
  }

  function handleBackClick() {
    setIsLeaving(true);
    setShouldFillSkills(false);
    dispatch(startMainReturn());
  }

  return (
    <section className="relative z-10 w-full text-white flex gap-5">
      <Pdf isOpen={isOepn} setIsOpen={setIsOpen} />
      {/* 프로필  */}
      <div
        className={`${isLeaving ? "section-profile-leave" : "section-profile-enter"} max-w-1/3 w-full flex items-center justify-center `}
      >
        <div className="flex justify-center flex-col items-center  ">
          <img src={ProfileImg} className="text-center " alt="profile" />
          <Card className={`${contactClasses.card} relative -bottom-10`}>
            <div className={contactClasses.list}>
              {ContactData.map((item, index) => (
                <ContactMe
                  src={item.src}
                  key={index}
                  title={item.title}
                  url={item.url}
                  href={item.href}
                />
              ))}
              <ContactMe2
                src={PDF}
                title="이력서"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </Card>
        </div>
      </div>
      {/* SKILLS,PROJECT,CONTACT  */}
      <div
        className={`${isLeaving ? "section-content-leave" : "section-content-enter"} max-w-2/3 w-full flex justify-center overflow-hidden`}
        onAnimationEnd={(event) => {
          if (event.animationName === "sectionContentEnter") {
            setShouldFillSkills(true);
          }

          if (event.animationName === "sectionContentLeave") {
            setTimeout(() => {
              dispatch(showMain());
            }, 700);
          }
        }}
      >
        <div className="w-full max-h-12">
          <Card
            style={{ border: "none", padding: 0 }}
            className="flex gap-3 flex-col rounded-t-none"
          >
            {/* 탭버튼 */}
            <div className="flex justify-between">
              <div className="flex h-full w-full ">
                <Card
                  className="flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none rounded-br-none"
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
                <Card
                  className="
                  flex items-center justify-center h-full w-1/6 border-t-0 rounded-t-none border-l-0 rounded-b-none hover:border-l
                  "
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
                  onClick={() => tabButton("contact")}
                >
                  <h2
                    className={
                      isActive === "contact" ? "text-white" : "text-gray-400"
                    }
                  >
                    CONTACT
                  </h2>
                </Card>
              </div>
              <button className="cursor-pointer" onClick={handleBackClick}>
                <img className="max-w-8" src={Arrow} alt="arrow" />
              </button>
            </div>
            {/* 스킬목록 */}
            {isActive === "skills" && (
              <Card
                className="grid grid-cols-2 gap-12 h-screen"
                style={{ padding: 40 }}
              >
                <div className=" flex flex-col gap-5">
                  {LightIcons.slice(0, 8).map((icon, index) => (
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
                  {LightIcons.slice(8, 15).map((icon, index) => (
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
            {/* 프로젝트 목록 */}
            {isActive === "projects" && (
              <Card
                style={{ padding: 40 }}
                className={`flex flex-col gap-5 h-screen `}
              >
                {/* 프로젝트 탭 버튼 */}
                <ul className="flex gap-5">
                  <li>
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("all")}
                    >
                      <p>전체</p>
                    </Card>
                  </li>
                  <li>
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("personal")}
                    >
                      <p>개인프로젝트</p>
                    </Card>
                  </li>
                  <li>
                    <Card
                      style={{ padding: "8px 60px", borderRadius: "20px" }}
                      onClick={() => setIsSelectProject("team")}
                    >
                      <p>팀 프로젝트</p>
                    </Card>
                  </li>
                </ul>
                {/* 프로젝트 목록 슬라이드 */}
                <div className="w-full min-w-0 overflow-hidden ">
                  <Swiper
                    className="w-full"
                    slidesPerView={1}
                    spaceBetween={24}
                    grabCursor
                  >
                    {(isSelectProject === "all" ||
                      isSelectProject === "team") && (
                      <React.Fragment key="team-projects">
                        <SwiperSlide key="team-mute">
                          <ProjectDetail
                            thumbnail={Mute}
                            title="MUTE"
                            desc="Vue 3 기반 음악 서비스 팀 프로젝트입니다. 온보딩, 로컬/소셜 로그인, 메인/검색/차트, 플레이어, 라이브러리, 마이페이지, AI 페이지를 포함합니다."
                            items={teamProjectInfo[0].info}
                          />
                        </SwiperSlide>
                        <SwiperSlide key="team-goreon">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Goreon}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="GOREON"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={teamProjectInfo[1].info}
                            />
                          </div>
                        </SwiperSlide>
                      </React.Fragment>
                    )}
                    {(isSelectProject === "all" ||
                      isSelectProject === "personal") && (
                      <React.Fragment key="personal">
                        <SwiperSlide key="personal-kakao">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Kakao}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="Kakao Renewal"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[0].info}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-netflix">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Netflix}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="Netflix Clone"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[1].info}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide key="personal-shop">
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={Shop}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="쇼핑몰 플랫폼"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[2].info}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={PortFolio2}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="PORTFOLIO"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[3].info}
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="project-list-scroll w-full min-w-0 overflow-y-auto max-h-[80vh] ">
                            <ProjectDetail
                              className="flex-col min-h-[90vh]"
                              thumbnail={PortFolio}
                              itemsClassName="max-w-full overflow-y-hidden"
                              title="PORTFOLIO"
                              desc="AI 기반 전자기기 쇼핑 플랫폼 프로젝트입니다. 상품 탐색, 추천 흐름, 상세 페이지, 사용자 경험 중심의 UI를 포함합니다."
                              items={personalProjectInfo[4].info}
                            />
                          </div>
                        </SwiperSlide>
                      </React.Fragment>
                    )}
                  </Swiper>
                </div>
              </Card>
            )}
            {/* CONTACT 이메일 전송 폼 */}
            {isActive === "contact" && <Contact />}
          </Card>
        </div>
      </div>
    </section>
  );
};
