const filterData = (category, products) => {
    const filteredDatas = products.filter(item => item.category == category)
    return filteredDatas

}
const shortenText = name => {
    const shortName = name.split(' ').slice(0, 4).join(" ")
    return shortName
}
const counterProducts = (products) => {
    const counter = products.reduce((counter, item) => counter + item.quantity, 0)
    return counter
}

const totalProducts = (products) => {
    const total = products.reduce((total, item) => total + item.quantity * item.price, 0)
    return total
}
const getCounter = (products, id) => {
    const index = products.findIndex(product => product.id == id)
    if (index == -1)
        return 1
    return products[index].quantity
}
export { filterData, shortenText, counterProducts, totalProducts, getCounter }