import Card from "./Card";
import ProjectImg from "../assets/img/projectImg.png";

export const ProjectList = ({ title, desc, skills }) => {
  return (
    <Card
      className="flex items-center gap-5 max-md:flex-col"
      style={{ padding: 15 }}
    >
      <img className="max-w-23 w-full" src={ProjectImg} alt="ProjectImg" />
      <div className="flex flex-col items-start gap-0.5 max-md:items-center">
        <h3 className="font-bold text-xs">{title}</h3>
        <h4 className="text-xs text-[#a4a4a4]">{desc}</h4>
        <div className="flex-wrap flex gap-1.5">
          {skills.map((item) => (
            <span className="border border-[#1F4360] p-1 text-xs text-[#a4a4a4]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
