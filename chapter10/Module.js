window.MyModule = window.MyModule || (function(){
    console.log("Module Loaded");
    function privateMethod(){
        console.log("Private Method");
    }

    function api(){
        console.log("API");
        privateMethod();
    }

    return {
        api
    }
})();

// IIFE = Immediately Invoking Function Expression