const SortOptions = {
  MostPopular: {
    id: 'popularity_orders_default',
    dir: 'desc',
  },
  Newest: {
    id: 'id',
    dir: 'desc',
    url: 'sort-iddesc',
  },
  PriceAsc: {
    id: 'price',
    dir: 'asc',
    url: 'sort-priceasc',
  },
  PriceDesc: {
    id: 'price',
    dir: 'desc',
    url: 'sort-pricedesc',
  },
  ReviewNumber: {
    id: 'reviews',
    dir: 'desc',
    url: 'sort-reviewsdesc',
  },
  Discount: {
    id: 'discount',
    dir: 'desc',
    url: 'sort-discountdesc',
  },
}
export default SortOptions
