export const columnsDataNews = [
  {
    accessorKey: "title",
    header: "TITLE",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "content",
    header: "DESCRIPTION",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "imageUrl",
    header: "IMAGE",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "views",
    header: "VIEWS",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "likesCount",
    header: "LIKES",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "unlikesCount",
    header: "UNLIKES",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

export const columnsDataCheck = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
