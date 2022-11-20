type User = {
    name: string,
    age: string | number
};

const userA = {
    name: 'User A',
    age: 'thirty'
} satisfies User;

const userB = {
    name: 'User B',
    age: 28
} satisfies User;

userA.age.toUpperCase();
userB.age++;
