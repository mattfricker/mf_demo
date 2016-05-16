import organizationData from '../../data/organizationData.json!';

function searchController() {
    const vm = this;
    vm.orgData = organizationData;
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
}

export default searchController;