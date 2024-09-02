const SortOptions = {
  MOST_POPULAR: {
    id: 'popularity_orders_default',
    direction: 'desc',
  },
  NEWEST: {
    id: 'id',
    direction: 'desc',
    url: 'sort-iddesc',
  },
  PRICE_ASC: {
    id: 'price',
    direction: 'asc',
    url: 'sort-priceasc',
  },
  PRICE_DESC: {
    id: 'price',
    direction: 'desc',
    url: 'sort-pricedesc',
  },
  REVIEW_NUMBER: {
    id: 'reviews',
    direction: 'desc',
    url: 'sort-reviewsdesc',
  },
  DISCOUNT: {
    id: 'discount',
    direction: 'desc',
    url: 'sort-discountdesc',
  },
}
export default SortOptions
