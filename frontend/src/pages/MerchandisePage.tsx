
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import MerchandiseStore from '../components/merchandise/MerchandiseStore';

const MerchandisePage: React.FC = () => {
  return (
    <MainLayout>
      <MerchandiseStore />
    </MainLayout>
  );
};

export default MerchandisePage;
