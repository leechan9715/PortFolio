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
  return (
    <div className="relative min-h-screen flex items-center px-6.25">
      <div className="absolute inset-0 z-0 [background:var(--full-absolute-bg)]" />
      <section className="flex flex-wrap items-center justify-between relative z-10 h-full w-full rounded-2xl border border-(--border) px-10 py-6.25 gap-3.5">
        <div className="flex w-full">
          <Card className="max-w-83  w-full ">
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
          <div className="flex items-center justify-center  flex-col  gap-3 flex-1 text-center tracking-widest">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5">
                <span className="font-extralight text-gray-300 text-sm">
                  Frontend Developer
                </span>
                <Circle />
              </div>
              <div className="flex items-center gap-5">
                <span>React</span>
                <Circle />
              </div>
              <div className="flex items-center gap-5">
                <span>Next.js</span>
                <Circle />
              </div>
              <div className="flex items-center gap-5">
                <span>TypeScript</span>
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
              <button className="text-gray-500 [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border)">
                <p className="font-bold text-2xl ">프로젝트 둘러보기</p>
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
          <Card className="max-w-83 w-full">
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
          <Card className="max-w-83 w-full flex flex-col">
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
        <div className=" w-full ">
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
    </div>
  );
}

export default App;
