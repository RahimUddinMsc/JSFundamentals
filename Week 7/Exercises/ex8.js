// Using the indexDb manager code provided in the root of this file create a function that 1.Creates DB, 2. Creates object store, the following are the args requirte for the function
// The name of the DB = 'SDLDatabase'
// The objectStore name = 'SDLStore'
// The keyPath = 'id' (value should auto increment)
// Once the function is called with these args passed there should be DB with and objecStore of SDL in the console


const createDBWithObjectStore = (dbName, objStore, keyPath) => {
    let db;
    const openOrCreateDB = window.indexedDB.open(dbName, 1);

    openOrCreateDB.addEventListener('error', () => console.error('Error opening DB'));

    openOrCreateDB.addEventListener('success', () => {
        console.log('Successfully opened DB');
        db = openOrCreateDB.result;
    });

    openOrCreateDB.addEventListener('upgradeneeded', init => {
        db = init.target.result;

        db.onerror = () => {
            console.error('Error loading database.');
        };

        db.createObjectStore(objStore, { keyPath: keyPath, autoIncrement:true });        
    });
}


createDBWithObjectStore("SDLDatabase", "SDLStore", "id")