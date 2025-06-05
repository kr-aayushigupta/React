import React from 'react';

type FetchedData = {
  info: string;
};

type DataFetcherProps = {
  render: (data: FetchedData) => React.ReactNode;
};

const DataFetcher: React.FC<DataFetcherProps> = ({ render }) => {
  const mockData: FetchedData = {
    info: 'This is some fetched data from an API!',
  };

  return <>{render(mockData)}</>;
};

export default DataFetcher;
