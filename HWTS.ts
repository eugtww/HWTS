// Создайте тип Status с возможными значениями: "pending", "in-progress", "completed".
// Создайте тип User с полями: name: string, age: number, status: Status.
// Создайте функцию updateStatus, которая принимает объект User и новый status: Status и возвращает обновленный объект User.

type Status = "pending" | "in-progress" | "completed";

type User = {
    name: string;
    age: number;
    status: Status;
};

function updateStatus (user: User, newStatus: Status): User {
    return { ...user, status: newStatus };
};

// Создайте тип HttpMethod с возможными значениями: "GET", "POST", "PUT", "DELETE".
// Создайте тип Request с полями: method: HttpMethod, url: string, body?: any.
// Создайте функцию makeRequest, которая принимает объект Request и возвращает строку с описанием запроса.

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Request = {
    method: HttpMethod;
    url: string;
    body?: any;
};

function makeRequest(request: Request): string {
    return `Request: ${Request.method} ${Request.url}`;
  };


// Создайте функцию logValue, которая принимает значение любого типа T и выводит его в консоль.
// Используйте эту функцию для вывода разных типов данных.

function logValue<T>(value: T): void {
    console.log(value);
}

logValue<string>("Hello");
logValue<number>(42);
logValue<boolean>(true);


// Partial и Required:
// Создайте объект типа User c полями name, age и email.
// Используйте Partial<User> для создания нового объекта, который может содержать только часть свойств объекта User.
// Используйте Required<User> для создания нового объекта, который обязательно должен содержать все свойства объекта User.

type UserA = {
    name: string;
    age: number;
    email: string;
};

const user1: Partial<UserA> = {
    name: "Mark",
};

const user2: Required<UserA> = {
    name: "Bob",
    age: 19,
    email: "bob@example.com",
};

// Pick и Omit
//  Используйте `Pick<User, 'name' | 'age'>` для создания нового объекта, содержащего только свойства `name` и `age` объекта `User`.
//  Используйте `Omit<User, 'email'>` для создания нового объекта, который не содержит свойство `email`.

const user3: Pick<UserA, 'name' | 'age'> = {
    name: "Bob",
    age: 32,
}


const user4: Omit<UserA, 'email'> = {
    name: "Steve",
    age: 22
}

// Readonly:
// Создайте объект `user` типа `User`.
// Используйте `Readonly<User>` для создания нового объекта, который будет только для чтения. Попробуйте изменить значение одного из свойств этого объекта и посмотрите, что произойдет.

// type UserG = {
//     name: string,
// };

// const userG: Readonly<UserG> = {
//     name: "Maria",  
// }

// userG.name = 'Bob' // Cannot assign to 'age' because it is a read-only property.

// Record: Создайте тип UserRecord как Record<string, User>, в котором ключ - это идентификатор пользователя, а значение - объект User. Используйте этот тип для создания коллекции пользователей.



type UserRecord = Record<string, UserA>;
const users: UserRecord = {
    user1: {
        name: "Add",
        age: 36
    },

    user2: {
        name: "Masha",
        age: 39},
}



// typeof: Используйте оператор typeof для определения типа переменной и вывода его в консоль.

console.log(typeof user1);




