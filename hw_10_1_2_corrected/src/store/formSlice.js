import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    price: 0,
    editingMode: {
        state: false,
        index: null,
    }
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeServiceField: (state, action) => {
            const { name, value } = action.payload; // Извлекаем name и value из action.payload
            state[name] = value; // Устанавливаем значение для поля
            console.log('name:', name);
            console.log('value:', value);
        },
        editService: (state, action) => {
            const { name, price, index } = action.payload; // Извлечение полей из payload
            state.name = name; // Устанавливаем имя
            state.price = price; // Устанавливаем цену
            state.editingMode = {
                state: true,
                index
            }; // Устанавливаем режим редактирования
        },
        /*
        addService: (state, action) => {
            const { name, price, index } = action.payload; // Извлечение полей из payload
            state.name = name; // Устанавливаем имя
            state.price = price; // Устанавливаем цену
            state.editingMode = {
                state: true,
                index
            }; // Устанавливаем режим редактирования
        },
        */
        endServiceEditing: () => initialState,
    },
});

export const { changeServiceField, editService, endServiceEditing } = formSlice.actions;
export default formSlice.reducer;
