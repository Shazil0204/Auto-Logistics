import React from "react";

type TableProps = {
  headers: React.ReactNode[]; // Array of header nodes
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
                className="px-6 py-3 text-gray-700 font-medium text-sm border-b max-w-full"
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
