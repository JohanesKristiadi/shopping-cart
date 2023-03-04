const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if (qty > 1) {
        return qty - 1;
    }
    return 0;
};


const calculateSubtotal = (price, qty, discount = 0) => {
    if (discount > 0) {
        return (1 - parseFloat(discount) / 100) *  price * qty ;
    }
    return price * qty
};

module.exports = { incrementQty, decrementQty, calculateSubtotal };
