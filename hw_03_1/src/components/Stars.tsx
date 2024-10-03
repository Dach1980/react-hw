import Star from './Star/Star';
import './stars.css';
import { nanoid } from 'nanoid'

type starCount = {
    count: number
}
export const Stars = ({ count = 0 }: starCount) => {
    if (Number.isNaN(count)) return null;
    if (count < 1 || count > 5) return null;

    const starsListItems = [];

    for (let i = 1; i <= count; i += 1) {
        starsListItems.push(<li key={nanoid()}><Star /></li>);
    }

    return (
        <ul className="card-body-stars">
            {[starsListItems]}
        </ul>
    )
}


export default Stars;