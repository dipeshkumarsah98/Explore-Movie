import React from "react";
import { Table } from "flowbite-react";

const CustomTable = (props) => {
  const { data } = props;
  return (
    <Table striped={true}>
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Rank</Table.HeadCell>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Year</Table.HeadCell>
        <Table.HeadCell>Rating</Table.HeadCell>
        <Table.HeadCell>Rating Count</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data?.map((movie) => (
          <Table.Row
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
            key={movie.id}
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {movie.id}
            </Table.Cell>
            <Table.Cell>{movie.rank}</Table.Cell>
            <Table.Cell>{movie.title}</Table.Cell>
            <Table.Cell>{movie.year}</Table.Cell>
            <Table.Cell>{movie.rating || "-"}</Table.Cell>
            <Table.Cell>{movie.ratingCount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
