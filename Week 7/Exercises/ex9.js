// Following on from the previou exercise the db/store should be created simply create a function that adds a record to the store, args for function should be as followsm 
// The name of the DB = 'sdlDatabase'
// The objectStore name = 'sdl'
// The record = 'caseIndexObj' (object provided below)
// Once the function is called with these args passed there should be record against the sdl object store

const caseIndexObj = {
    firstName:"Tom",
    lastName: "Wright"
}


const addRecordToStore = (dbName, objStore, record) => {

    const request = window.indexedDB.open(dbName, 1);

    request.onerror = (event) => {
        console.error('Error opening DB:', event.target.error);
        reject(event.target.error);
    };

    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction([objStore], 'readwrite');
        const objectStore = transaction.objectStore(objStore);
        const addRequest = objectStore.add(record);

        addRequest.onsuccess = () => {
            console.log('Record added successfully');            
        };

        addRequest.onerror = (event) => {
            console.error('Error adding record:', event.target.error);            
        };
    };
    
};

// addRecordToStore("SDLDatabase", "SDLStore", caseIndexObj)

