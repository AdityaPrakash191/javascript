class User {
    constructor(email, password ){
        this.email = email;
        this.password = password
        
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
    get name(){
        return `${this._first} ${this._last}`
    }
    set name(value){
        [this._first , this._last] = value.split(" ");
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email)
hitesh.name = "aditya prakash"
console.log(hitesh.name);
console.log(hitesh.first);
console.log(hitesh._last);



