

//  get card

const getAllCard = () => {
    const all = localStorage.getItem('card')
    if (all) {
        const card = JSON.parse(all)
        return card;
    }
    else {
        return [];
    }
}
const getAllWish = () => {
    const all = localStorage.getItem('wish')
    if (all) {
        const wish = JSON.parse(all)
        return wish;
    }
    else {
        return [];
    }
}

// add card

const addCard = (product) => {
    const card = getAllCard()
    const isExit = card.find(item => item.product_id == product.product_id)
    if (isExit) return toast.error('This card already exit !')
    card.push(product)
    localStorage.setItem('card', JSON.stringify(card))
    toast.success('Card is successfuly added')
}

const addWish = (product) => {
    const wish = getAllCard()
    const isExit = wish.find(item => item.product_id == product.product_id)
    if (isExit) return toast.error('This card already exit !')
    wish.push(product)
    localStorage.setItem('wish', JSON.stringify(wish))
    toast.success('wish is successfuly added')
}

// remove card
const removeCard = (product_id) => {
    const card = getAllCard()
    const remaining = card.filter(item => item.product_id !== product_id)
    localStorage.setItem('card', JSON.stringify(remaining))
    toast.success('successfully deleted')
}


export { addCard, getAllCard, getAllWish, addWish };