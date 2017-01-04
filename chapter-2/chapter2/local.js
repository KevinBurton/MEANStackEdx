var name = 'Ronald Kevin Burton';
var names = name.split(/\s+/);
console.log(names);
console.log(names[0] || '');
console.log(names.slice(-1).pop() || '');
