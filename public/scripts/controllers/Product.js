function Product() {
    var me = this;
    Product.prototype.listItems = [
        "Never miss an update from your clients",
        "Make your dreams come true",
        "The haters gonna hate hate hate",
        "I'm just gonna shake it off"
    ];
}

function ListItem(text) {
    var me = this;
    ListItem.prototype.text = text;
}