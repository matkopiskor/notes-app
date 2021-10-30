import { useState } from 'react';


export const useModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return {
        openModal,
        closeModal,
        isModalOpen,
    };
};
