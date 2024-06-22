/** @format */

import { useNavigate } from 'react-router-dom';

import { Button } from 'antd';

export const ButtonGoBack = ({ pathTo }) => {
  const navigateTo = useNavigate();

  const navigateToPath = (path) => {
    navigateTo(`/${path}`);
  };

  return (
    <div className="button-navigate">
      <Button onClick={() => navigateToPath(pathTo)}>Go back</Button>
    </div>
  );
};
