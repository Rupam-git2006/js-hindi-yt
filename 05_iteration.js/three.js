const obj= {
    js : 'javascript',
    c : 'c',
    python : 'python',
    java : 'java'
}
for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
    
}