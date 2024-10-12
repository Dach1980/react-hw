import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({ post, onSubmit, onClose, isEdit }) {
    const [form, setForm] = useState({ text: post.content });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form.text, post.id);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__close" onClick={onClose}>X</div>
            <textarea className="form__textarea" name="text" value={form.text} onChange={handleChange} />
            <button className="form__button">{isEdit ? 'Сохранить' : 'Опубликовать'}</button>
        </form>
    );
}

Form.propTypes = {
    post: PropTypes.shape({
        content: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
}

Form.defaultProps = {
    post: { content: '' },
};