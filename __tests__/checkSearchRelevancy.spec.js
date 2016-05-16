import checkSearchRelevancy from '../src/customUtilities/checkSearchRelevancy.js';
import orgData from './testData/orgData.json!';

describe('checkSearchRelevancy function', function() {
    describe('if organizations argument is not an array, throw an error', function() {
        it('should throw an error if no data argument is provided', () => {
            expect(function() {
                checkSearchRelevancy()
            }).toThrow(new Error('An array of organizations must be provided'))
        });
        
        it('should throw an error if no data argument is a string', () => {
            expect(function() {
                checkSearchRelevancy('hello')
            }).toThrow(new Error('An array of organizations must be provided'))
        });
        
        it('should throw an error if no data argument is a number', () => {
            expect(function() {
                checkSearchRelevancy(25)
            }).toThrow(new Error('An array of organizations must be provided'))
        });
        
        it('should throw an error if no data argument is an object', () => {
            expect(function() {
                checkSearchRelevancy({key: 'val'})
            }).toThrow(new Error('An array of organizations must be provided'))
        });
        
        it('should throw an error if no data argument is a function (non-array) object', () => {
            expect(function() {
                checkSearchRelevancy(function(){})
            }).toThrow(new Error('An array of organizations must be provided'))
        });
    });
    
    describe('Passing no search options arguments', function() {
        it('should set relevantToSearch to false', function() {
            expect(checkSearchRelevancy(orgData))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
    });
    
    
    describe('Passing one search options argument', function() {
        it('should set relevantToSearch to true for educationLevel: Kindergarten', function() {
            expect(checkSearchRelevancy(orgData, ['educationLevel', 'Kindergarten']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for educationLevel: High School',  function() {
            expect(checkSearchRelevancy(orgData, ['educationLevel', 'High School']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for all educationLevel values',  function() {
            expect(checkSearchRelevancy(orgData, ['educationLevel', 'ALL']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for programType: Scholarship', function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'Scholarship']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for programType: Loan',  function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'Loan']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for all programType values',  function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'ALL']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
    });
    
    describe('Passing two search options arguments', function() {
        it('should set relevantToSearch to true if educationLevel: Kindergarten and programType: Loan', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'Kindergarten'], 
                ['programType', 'Loan'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: Kindergarten and programType: Scholarship', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'Kindergarten'], 
                ['programType', 'Scholarship'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: Kindergarten and all programType values', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'Kindergarten'], 
                ['programType', 'ALL'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: High School and programType: Loan', function() {
            expect(checkSearchRelevancy(
                orgData.concat([
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        'educationLevel': 'High School',
                    }
                ]), 
                ['educationLevel', 'High School'], 
                ['programType', 'Loan'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "educationLevel": "High School",
                        "relevantToSearch": true
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: High School and programType: Scholarship', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'High School'], 
                ['programType', 'Scholarship'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });

        it('should set relevantToSearch to true if educationLevel: High School and all programType values', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'High School'], 
                ['programType', 'ALL'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
    });
        
    describe('if any search option argument is not an array, throw an error', function() {
        it('should throw an error if no data argument is a string', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    'hello'
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a number', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    25
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is an object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    {key: 'val'}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a function (non-array) object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    function(){}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a string', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan'],
                    'hello'
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a number', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan'],
                    25
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is an object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan'],
                    {key: 'val'}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a function (non-array) object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan'],
                    function(){}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
    });
        
    
});