db.pizzaOrders.find(
    {"credit_card_type": "mastercard",
    "quantity": {$lt: 3}
    }
);

db.pizzaOrders.find({
    "size": "small",
    $and: [
        {"quantity": {$gt: 1}},
        {"quantity": {$lt: 5}}
    ]
});