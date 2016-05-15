import organizationData from '../../data/organizationData.json!';

function searchController() {
    const vm = this;
    vm.orgData = organizationData;
    vm.images = {
        path: '/src/images/',
        ext: '.png'
    };
}

export default searchController;