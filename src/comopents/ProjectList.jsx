import ProjectImg from "../../public/img/projectImg.png";

export const ProjectList = ({ title, desc, skills }) => {
  return (
    <div className="flex items-center gap-5">
      <img className="max-w-28 w-full" src={ProjectImg} alt="ProjectImg" />
      <div className="flex flex-col items-start gap-0.5">
        <h3 className="font-bold">{title}</h3>
        <h4 className="text-sm text-[#a4a4a4]">{desc}</h4>
        <div className="flex-wrap flex gap-1.5">
          {skills.map((item) => (
            <span className="border border-[#1F4360] p-1 text-xs text-[#a4a4a4]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
