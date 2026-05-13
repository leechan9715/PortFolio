import Card from "./Card";

export const OperationProcessIcon = ({ desc, src }) => {
  return (
    <div className="flex flex-col gap-3">
      <Card style={{ padding: "21px" }}>
        <img className="max-w-15.25 h-9 w-full" src={src} alt="Icon1" />
      </Card>
      <p className="text-center">{desc}</p>
    </div>
  );
};
