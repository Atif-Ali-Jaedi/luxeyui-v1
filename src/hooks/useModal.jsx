import { create } from "zustand";

export const useModal = create(set => ({
	isOpen: false,
	toggleModal: () => set(state => ({ isOpen: !state.isOpen })),
	closeModal: () => set({ isOpen: false }),
	openModal: () => set({ isOpen: true }),
	setValue: newValue => set({ isOpen: newValue }),
}));
