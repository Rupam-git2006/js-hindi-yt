const user = {
    username: "rupam",
    price: 90,
    welcomeMsg: function() {
        console.log(`${this.username} ,wecome to website`);
    }
}
user.welcomeMsg();
console.log(this);
