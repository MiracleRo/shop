/**
 * Created by miracle on 16-10-19.
 */
(function () {
    var Person = function (name,age) {
        this.name = name;
        this.age = age;
    }
     var per1 = new Person('jack',18);
    console.log(per1.age);
})();