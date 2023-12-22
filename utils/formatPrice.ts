export const formatPrice = (price: number) => {
  console.log(+price.toString().replace('.', '') / 10)
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
  }).format(+price.toString().replace('.', ''))

  return formattedPrice
}
