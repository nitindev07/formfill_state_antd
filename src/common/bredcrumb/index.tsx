const Breadcrumb = ({ items }: any) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex flex-row gap-[10px]">
        {items.map((item: any, index: number) => (
          <li
            key={index}
            className={`text-gray-600 text-sm breadcrumb-item${
              index === items.length - 1 ? " active" : ""
            }`}
          >
            {index === items.length - 1 ? (
              <a className="text-[blue] text-underline">{item}</a>
            ) : (
              <a href="#">{item} /</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
