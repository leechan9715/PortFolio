export const Card = ({ children, className, style }) => {
  return (
    <div
      className={`border border-[#1F4360] [background:var(--dark-gradient)] px-7.5 py-4 rounded-[10px] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export const CardTitleBlue = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#78D6FF]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};
export const CardTitleGreen = ({ children = "프로필", style }) => {
  return (
    <div className="flex items-center gap-2 mb-4.25" style={style}>
      <div className="h-2 w-2 rounded-full bg-[#18c688]" />
      <h3 className="text-lg font-semibold ">{children}</h3>
    </div>
  );
};
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

export default Card;
