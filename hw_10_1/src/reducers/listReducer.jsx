import { nanoid } from 'nanoid';
import {
    ADD_SERVICE,
    ADD_SERVICE_CHANGES,
    REMOVE_SERVICE,
} from '../actions/actionTypes';

const initialState = [
    {
        id: 'ZOmZm2CofE8V5wLuUntl',
        name: 'Установка React',
        price: 10000,
    },
    {
        id: 'JNCfVbh6cH1pjn1oZOBm',
        name: 'Настройка React',
        price: 5000,
    },
    {
        id: 'km77qWV5QTlllpf3Mp4D',
        name: 'Сайт на React',
        price: 30000,
    },
];

export default function listReducer(state = initialState, action) {
    const { index, id, name, price } = { ...action.payload };

    switch (action.type) {
        case ADD_SERVICE:
            return [...state, { id: nanoid(), name, price: Number(price) }];
        case ADD_SERVICE_CHANGES:
            const updatedState = [
                ...state.slice(0, index),
                {
                    id: state[index].id,
                    name: name,
                    price: Number(price),
                },
                ...state.slice(index + 1),
            ];
            return updatedState;
        case REMOVE_SERVICE:
            return state.filter((service) => service.id !== id);
        default:
            return state;
    }
}