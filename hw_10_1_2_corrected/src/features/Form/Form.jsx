import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeServiceField, endServiceEditing, editService } from '../../store/formSlice';
import {
    addService,
} from '../../actions/actionCreators';

function Form() {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);

    function handleInputChange({ target }) {
        const { name, value } = target;
        // Используем dispatch для обновления состояния через Redux
        dispatch(changeServiceField({ name, value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, price } = form;

        if (form.editingMode.state) {
            const { index } = form.editingMode;
            dispatch(editService(index, name, price));
            dispatch(endServiceEditing());
        } else {
            dispatch(addService(name, price));
        }
    };

    return (
        <form
            className="Form"
            onSubmit={handleSubmit}
            onReset={(event) => {
                event.preventDefault();
                dispatch(endServiceEditing());
            }}
        >
            <div className="Form-control">
                <label htmlFor="name">Услуга</label>
                <input
                    className="Form-control__name"
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Название услуги"
                    autoComplete="off"
                />
            </div>
            <div className="Form-control">
                <label htmlFor="price">Стоимость (руб.)</label>
                <input
                    className="Form-control__price"
                    type="number"
                    id="price"
                    name="price"
                    min="1"
                    max="999999"
                    required
                    value={form.price}
                    onChange={handleInputChange}
                    onFocus={({ target }) => target.select()}
                />
            </div>
            <input
                className="Form-control__button-save"
                type="submit"
                value="Сохранить"
            />
            {
                form.editingMode.state
                && <input
                    className="Form-control__button-reset"
                    type="button" // Изменено на "button"
                    value="Отменить"
                    onClick={() => dispatch(endServiceEditing())} // Обработчик сброса
                />
            }
        </form>
    );
}

export default Form;