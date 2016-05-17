import organizationData from '../../data/organizationData.json!';
import searchUtil from '../../customUtilities/checkSearchRelevancy.js';
import imageDetails from '../../settings/imageDetails.js';
import selectBoxOptions from  '../../data/selectBoxOptions.js';

function searchController() {
    const vm = this;
    vm.programType, vm.educationLevel;
    
    //Assign imports to view model
    vm.orgData = organizationData;
    vm.images = imageDetails;
    vm.selectOptions = selectBoxOptions;
    
    
    vm.processAndSearch = function processAndSearch() {
        const searchOptions = [];
        if (!!vm.programType) searchOptions.push(['programType', vm.programType])
        if (!!vm.educationLevel) searchOptions.push(['educationLevel', vm.educationLevel])
        vm.orgData = searchUtil(organizationData, ...searchOptions);
    };
    
    //Functions to pass into the select box directives
    vm.onProgramTypeChange = newVal => vm.programType = newVal;
    vm.onEducationLevelChange = newVal => vm.educationLevel = newVal;
  
}

export default searchController;