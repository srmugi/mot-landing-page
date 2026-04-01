/* eslint-disable @next/next/no-img-element */
export default function PageContent({ content }) {
  const paragraphComponent = (block) => {
    const alignment = block.tunes?.anyTuneName.alignment;
    return (
      <div
        dangerouslySetInnerHTML={{ __html: block.data.text }}
        className={`text-${alignment} mb-3`}
      />
    );
  };

  const headerComponent = (block) => {
    const alignment = block.tunes?.anyTuneName.alignment;
    let classes = "";

    if (block.data.level === 1) classes = "text-3xl";
    else if (block.data.level === 2) classes = "text-2xl";
    else if (block.data.level === 3) classes = "text-xl";
    else if (block.data.level === 4) classes = "text-lg";
    else if (block.data.level === 5) classes = "text-base";
    else classes = "text-sm";

    return (
      <div className={`${classes} text-${alignment} mb-3`}>
        {block.data.text}
      </div>
    );
  };

  const imageComponent = (block) => {
    return (
      <img
        src={block.data.file.url}
        alt={block.data.caption}
        width="100%"
        className="mb-3"
      />
    );
  };

  const quoteComponent = (block) => {
    return (
      <div className="bg-[#eeeeee] p-2 mb-3">
        <div className="border-l-4 border-gray-700 p-2">{block.data.text}</div>
      </div>
    );
  };

  const embedComponent = (block) => {
    return (
      <div className="mb-3">
        <iframe width="100%" height="400px" src={block.data.embed}></iframe>
      </div>
    );
  };

  const listComponent = (block) => {
    if (block.data.style === "unordered")
      return (
        <ul className="list-disc ml-10 mb-3">{listItems(block.data.items)}</ul>
      );
    else
      return (
        <ol className="list-decimal ml-10 mb-3">
          {listItems(block.data.items)}
        </ol>
      );
  };

  const listItems = (items) => {
    return items.map((item, idx) => (
      <li key={`list-item-${idx}-${item}`}>{item.replace("<br>", "")}</li>
    ));
  };

  const delimiterComponent = () => {
    return <div className="p-5" />;
  };

  const rawComponent = (block) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: block.data.html }}
        className="mb-3"
      />
    );
  };

  const warningComponent = (block) => {
    return (
      <div className="bg-[#eeeeee] p-2 mb-3">
        <div className="border-y border-gray-700 p-3">{block.data.message}</div>
      </div>
    );
  };

  const tableComponent = (block) => {
    return (
      <table className="table-fixed mb-3">
        <tbody>{tableRows(block.data.content)}</tbody>
      </table>
    );
  };

  const tableRows = (rows) => {
    return rows.map((row, idx) => (
      <tr
        key={`table-row-${idx}`}
        className={idx % 2 === 0 ? `bg-white` : "bg-[#eeeeee]"}
      >
        {tableCells(row)}
      </tr>
    ));
  };

  const tableCells = (cells) => {
    return cells.map((cell, idx) => (
      <td
        key={`table-cell-${idx}-${cell}`}
        className="border border-gray-500 p-1"
      >
        {cell}
      </td>
    ));
  };

  return (
    <div>
      {JSON.parse(content)?.blocks.map((block, idx) => {
        return (
          <div key={idx}>
            {block.type === "paragraph" && paragraphComponent(block)}
            {block.type === "header" && headerComponent(block)}
            {block.type === "image" && imageComponent(block)}
            {block.type === "quote" && quoteComponent(block)}
            {block.type === "embed" && embedComponent(block)}
            {block.type === "list" && listComponent(block)}
            {block.type === "delimiter" && delimiterComponent()}
            {block.type === "raw" && rawComponent(block)}
            {block.type === "warning" && warningComponent(block)}
            {block.type === "table" && tableComponent(block)}
          </div>
        );
      })}
    </div>
  );
}
