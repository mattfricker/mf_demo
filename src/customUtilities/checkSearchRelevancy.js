import throwErrorIfNotArray from './throwErrorIfNotArray.js';

function checkSearchRelevancy(organizations, ...searchOptions) {
    throwErrorIfNotArray('An array of organizations must be provided')(organizations)
    
    /*In a larger-scale app, we would want to consider using Immutable constructs
    instead of creating a copy of the array of organization objects
    which allows us to avoid mutation, but also can be taxing for creation / garbage collection*/
    if (!searchOptions.length) {
        return organizations.map(org => Object.assign({}, org, {relevantToSearch: false}));
    } else {
        searchOptions.forEach(throwErrorIfNotArray('All search options must be an Array'));
    }
    
    return organizations.map(assignSearchRelevancy);
    
    
    //used to build new organization array with appropriate search relevancies
    function assignSearchRelevancy(org) {
        let bool = true;
        searchOptions.forEach(checkOrgRelevancy);
        
        return Object.assign({}, org, {relevantToSearch: bool})
        
        function checkOrgRelevancy(option) {
            if (option[1] !== 'SEARCH ALL' && org[option[0]] !== option[1]) {
                bool = false;
            }
        }
    }
}


export default checkSearchRelevancy;