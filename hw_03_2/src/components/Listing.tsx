import ListItem, {Item} from "./ListItem/ListItem.tsx";

type listingProps = {
    items: any
}

export const Listing = ({ items }: listingProps) => {
    return (
        <ul className='item-list'>
            {items.map((item: Item) => <ListItem key={item.listing_id} item={item} />)}
        </ul>
    )
}

export default Listing