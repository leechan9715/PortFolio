import Card from "./Card";

export const ProjectList = ({ title, desc, skills, src }) => {
  return (
    <Card
      className="flex  gap-2 flex-col max-md:flex-col"
      style={{ padding: 15 }}
    >
      <img className=" w-full" src={src} alt="ProjectImg" />
      <div className="flex flex-col items-start gap-1.5 max-md:items-center">
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
