/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import qs from 'qs';
import Table from './Table/src';
import Pagination from './Pagination/src/Pagination';
// import Dropdown from './Dropdown/src';

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: any;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, any>;
}

const renderStatus = (gender) => {
  const style = {
    padding: '4px',
    borderRadius: '8px',
    minWidth: '50px',
    alignText: 'center',
    display: 'inline-block',
    background: `${gender === 'male' ? '#ECFCCB' : '#DBEAFE'}`,
    color: '#1E3A8A',
    fontFamily: 'SF Pro Display',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0.1px',
  };

  return <span style={style}>{gender}</span>;
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name: { first: any; last: any }) => `${name.first} ${name.last}`,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    render: (value) => renderStatus(value),
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const { current, pageSize, total } = tableParams.pagination;

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    if (!loading) {
      fetchData();
    }
  }, [JSON.stringify(tableParams)]);

  const handleChange = (page: any) => {
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        current: page,
      },
    });
  };

  return (
    <div>
      <Table columns={columns} data={data} />
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
