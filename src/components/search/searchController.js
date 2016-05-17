import organizationData from '../../data/organizationData.json!';
import searchUtil from '../../customUtilities/checkSearchRelevancy.js';

function searchController() {
    const vm = this;
    vm.orgData = organizationData;
    vm.programType, vm.educationLevel;
    vm.images = {
        path: '/src/images/',
        ext: '.png'
    };
    vm.selectOptions = {
      programTypes: [
          'ALL',
          'Scholarship',
          'Loan'
      ],
      educationLevels: [
          'ALL',
          'Kindergarten',
          'High School'
      ]
    };
    
    vm.processAndSearch = function processAndSearch() {
        const searchOptions = [];
        if (!!vm.programType) searchOptions.push(['programType', vm.programType])
        if (!!vm.educationLevel) searchOptions.push(['educationLevel', vm.educationLevel])
        vm.orgData = searchUtil(organizationData, ...searchOptions);
    };
}

export default searchController;