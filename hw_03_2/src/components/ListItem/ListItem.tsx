type listItemProps = {
    key: string | number,
    item: Item
}

export type Item = {
    url: string,
    MainImage: MainImage,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    listing_id: number,
    state: string,
}

type MainImage = {
    url_570xN: string
}
export const ListItem = ({ item }: listItemProps) => {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;

    if (state !== 'active') {
        return null;
    }

    let priceTag;
    let colorClass;

    if (currency_code === 'USD') {
        priceTag = `$${price}`
    } else if (currency_code === 'EUR') {
        priceTag = `€${price}`
    } else {
        priceTag = `${price} ${currency_code}`
    }

    if (quantity <= 10) {
        colorClass = 'level-low'
    } else if (quantity <= 20) {
        colorClass = 'level-medium'
    } else {
        colorClass = 'level-high'
    }

    const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;

    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title}></img>
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{name}</p>
                <p className='item-price'>{priceTag}</p>
                <p className={`item-quantity ${colorClass}`}>{quantity} left</p>
            </div>
        </div>
    )
}

export default ListItem