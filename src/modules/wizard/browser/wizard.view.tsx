import React from 'react';
import { useState, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

export const WizardDialogComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   useImperativeHandle(ref, () => ({
  //     open() {
  //       setIsModalOpen(true);
  //     },
  //   }));

  return (
    <Modal title='Wizard' open={isModalOpen}>
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </Modal>
  );
};
