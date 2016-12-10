const sharedMemoryObject = {};

class SharedService {
    constructor() {}

    setProperty(property, value){
        sharedMemoryObject[property] = value;
    }

    getProperty(property){
        return sharedMemoryObject[property];
    }
}

export default SharedService;