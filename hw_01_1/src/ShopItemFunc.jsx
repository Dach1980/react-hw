// React-компонент
function ShopItemFunc({ product }) {

    return (
        <div class="main-content">
            <h2>{product.brand}</h2>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <div class="description">
                {product.descriptionFull}
            </div>
            <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div class="divider"></div>
            <div class="purchase-info">
                <div class="price">{product.currency}{product.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default ShopItemFunc