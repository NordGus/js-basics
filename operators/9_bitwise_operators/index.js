// Bitwise Operators

console.log('1 = 00000001');
console.log('2 = 00000010');
console.log('R = 00000011 = 3');
console.log(
    1 | 2, 
    '// Bitwise OR:', 
    'Compares both numbers vertically,', 
    'as seem in the example,', 
    'if each number is 0 then the result is 0 for that position,', 
    'if any is 1 the result is one for that position');

console.log('1 = 00000001');
console.log('2 = 00000010');
console.log('R = 00000000 = 0');
console.log(
    1 & 2, 
    '// Bitwise OR:', 
    'Compares both numbers vertically,', 
    'as seem in the example,', 
    'unless both number are 1 the result is 0,');

console.log('Example:');
console.log('A user can have Read, Write and Execute permissions.');
console.log('Read    = 00000100');
console.log('Write   = 00000010');
console.log('Execute = 00000001');

const readPermission = 4; // Decimal    00000100
const writePermission = 2; // Decimal   00000010
const executePermission = 1; // Decimal 00000001

function addPermission(userPermissions, newPermission) {
    return userPermissions | newPermission;
}

let userPermisson = 0; // Decimal    00000000
userPermisson = addPermission(userPermisson, readPermission);
userPermisson = addPermission(userPermisson, writePermission);

let message = (userPermisson & readPermission) ? 'yes' : 'no'

console.log(message);

console.log('In this example Bitwise OR adds permissions and Bitwise AND read permissions');