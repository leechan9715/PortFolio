import Card, { CardTitleBlue, CardTitleGreen } from "./comopents/Card";
import Porfile from "../public/img/profile.png";
import GithubDark from "../public/img/Github-dark.png";
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
import ArrowBlue from "../public/img/arrow-blue.png";
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
  return (
    <div className="relative min-h-screen p-6.25">
      <div className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]" />
      <section className="flex flex-wrap items-center justify-between relative z-10 h-full w-full rounded-2xl border border-[#1F4360] px-10 py-6.25 gap-3.5">
        <div className="flex w-full">
          <Card className="max-w-83  w-full ">
            <CardTitleGreen>프로필</CardTitleGreen>
            <div className="flex flex-col items-center text-center ">
              <img src={Porfile} alt="profile" className="max-w-1/3 mb-6.5" />
              <h3 className="text-2xl font-semibold">이승찬</h3>
              <p className="text-sm">Frontend Developer</p>
              <p className="mb-6.5">1997 . 01 . 05</p>
              <p className="text-sm font-semibold">
                사용자 흐름을 이해하고,
                <br />
                직관적인 UI로 구현하는프론트엔드
                <br />
                개발자입니다.
              </p>
            </div>
          </Card>
          <div className="flex items-center justify-center  flex-col  gap-3 flex-1 text-center tracking-widest">
            <h2 className="text-4xl font-semibold ">
              사용자의 시선에서 흐름을
              <span className="text-5xl bg-clip-text text-transparent bg-(image:--main-title-color)">
                바라
              </span>
              보고
            </h2>
            <h2 className="text-4xl font-semibold mb-8">
              아이디어를 실제
              <span className="text-5xl bg-clip-text text-transparent bg-(image:--main-title-color)">
                경험
              </span>
              으로 연결하는사람
            </h2>
            <div>
              <button className="[background:var(--button-bg)] border border-[#1f8cff] px-14 py-2.5 rounded-lg">
                <p className="font-bold text-2xl">프로젝트 둘러보기</p>
              </button>
            </div>
          </div>
          <Card className="max-w-83  w-full flex flex-col">
            <CardTitleGreen>프로젝트</CardTitleGreen>
            <div className="flex flex-col gap-5 justify-center item ">
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
              <ProjectList
                title="GOREON"
                desc="AI 전자기기 쇼핑 플랫폼"
                skills={skills}
              />
            </div>
          </Card>
        </div>
        <div className="w-full flex justify-between">
          <Card className="max-w-104.5 w-full">
            <CardTitleGreen>CONTACT ME</CardTitleGreen>
            <div className="flex flex-col gap-2.5">
              <ContactMe
                src={GithubDark}
                title="GitHub"
                url="github.com/leechan9715"
              />
              <ContactMe src={Email} title="Email" url="iseung809@gmail.com" />
            </div>
          </Card>
          <Card className="max-w-104.5 w-full flex flex-col">
            <CardTitleBlue style={{ margin: 0 }}>운영프로세스</CardTitleBlue>
            <div className="w-full h-full flex justify-center items-center">
              <OperationProcessIcon desc="기획" src={Icon1} />
              <img
                className="flex self-center max-w-6 h-6 w-full mb-5.5"
                src={ArrowBlue}
                alt="arrow"
              />
              <OperationProcessIcon desc="UI 설계" src={Icon2} />
              <img
                className="flex self-center max-w-6 h-6 w-full mb-5.5"
                src={ArrowBlue}
                alt="arrow"
              />
              <OperationProcessIcon desc="구현" src={Icon3} />
              <img
                className="flex self-center max-w-6 h-6 w-full mb-5.5"
                src={ArrowBlue}
                alt="arrow"
              />
              <OperationProcessIcon desc="운영" src={Icon4} />
            </div>
          </Card>
        </div>
        <div className="w-full flex justify-center ">
          <Card className=" flex justify-center  items-center gap-5.5">
            {darkIcons.map((icon, index) => (
              <img key={index} className="w-12.5" src={icon} alt="skill icon" />
            ))}
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;
