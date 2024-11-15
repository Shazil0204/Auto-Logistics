import React from "react";

type TableProps = {
  headers: string[]; // Array of header nodes
  children: React.ReactNode; // Table rows passed as children
};

const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-6 py-3 bg-[#008080] border-2 text-white font-bold text-sm max-w-full ${
                  header === "id" ? "hidden md:table-cell" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
