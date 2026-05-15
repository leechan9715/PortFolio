import Card from "./Card";

export const ProjectDetail = ({
  className,
  itemsClassName,
  thumbnail,
  title,
  desc,
  items,
}) => {
  return (
    <Card
      className={`flex min-w-0 items-stretch gap-6 overflow-hidden ${className}`}
      style={{ padding: 0, border: "none" }}
    >
      <div className={`max-w-1/3 overflow-y-auto ${itemsClassName}`}>
        <img
          className="w-full h-full  rounded-2xl border-2 border-(--border) bg-white/95 "
          src={thumbnail}
          alt={thumbnail}
        />
      </div>
      <div
        className={`project-list-scroll flex max-h-[65vh] max-w-2/3 w-full flex-1 flex-col overflow-y-auto  p-8  ${itemsClassName} `}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-wide text-white">
          {title}
        </h2>
        <p className="mb-5 text-lg leading-8 text-gray-200">{desc}</p>
        <ul className="mb-5 grid gap-2 text-sm text-gray-300">
          {items.map((item, index) => (
            <li key={index}>
              <p className="flex gap-2">
                <span className="min-w-20 text-[#4EA8FF]">{item.label}</span>
                <span>{item.value}</span>
              </p>
            </li>
          ))}
        </ul>
        <p className="text-base leading-7 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eum
          ea asperiores pariatur. Iure quisquam provident, excepturi ipsam
          dolorum omnis ut consequuntur, magni nemo dolore, quo hic!
          Voluptatibus, consequuntur iure. Sint quisquam explicabo dignissimos
          cumque optio, tempora, asperiores voluptate reiciendis mollitia
          commodi iure? Possimus, cumque molestiae. Quia nobis molestiae
          nesciunt aspernatur quos corporis, molestias at unde, eius dicta,
          error possimus. Consequuntur, dolore hic! Perferendis, nisi quisquam
          similique doloremque sapiente provident adipisci asperiores inventore
          numquam magni, officia fuga laborum. Quibusdam veniam quidem sit quia
          a neque, voluptatum consequatur non provident ducimus.
        </p>
      </div>
    </Card>
  );
};
