let product = {
    name: "headphones",
    price: "120",
    doesItWork: false,
    previusOwner: "bob",
}

for (const prop in product) {
    console.log(`product.${prop} = ${product[prop]}`);
}


delete product.previusOwner


product.doesItWork = true


if (product.price> 100) {
    discountPercentage  = ((product.price / 100) * 10);
    product.price = (product.price - discountPercentage);
    console.log(product.price);
}


