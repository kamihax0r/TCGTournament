//A module to create TCG Person objects
//A person is all of the data associated to the person as well as identifiers to tie them to game playing organizations by IDs provided from those organizations

function Person() {
    this.firstName = "";
    this.lastName = "";
    this.shippingAddress = new Address();
    this.billingAddress = new Address();
    this.ID = new IDNumbers();
}