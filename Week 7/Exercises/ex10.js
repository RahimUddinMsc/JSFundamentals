// Following on from the previous exercise there should be atleast one record in the 'SDLStore', create a function that deletes the record from the store, args for function should be as followsm 
// The name of the DB = 'sdlDatabase'
// The objectStore name = 'sdl'
// The key = 1 (is autoincrementing delete first record)
// Once the function is called with these args passed the record with the passed id should be removed from the store

const deletRecordFromStore = (dbName, objStore, key) => {

    const request = window.indexedDB.open(dbName, 1);

    request.onerror = (event) => {
        console.error('Error opening DB:', event.target.error);
        reject(event.target.error);
    };

    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction([objStore], 'readwrite');
        const objectStore = transaction.objectStore(objStore);    
        const deleteRequest = objectStore.delete(key);

        deleteRequest.onsuccess = () => {
            console.log('Record deleted successfully');            
        };

        deleteRequest.onerror = (event) => {
            console.error('Error deleting record:', event.target.error);            
        };
    };    
};

deletRecordFromStore("SDLDatabase", "SDLStore", 2)

