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
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
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
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
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
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for all educationLevel values',  function() {
            expect(checkSearchRelevancy(orgData, ['educationLevel', 'SEARCH ALL']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for programType: Scholarship Program', function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'Scholarship Program']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for programType: Loan Program',  function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'Loan Program']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": false
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
        it('should set relevantToSearch to true for all programType values',  function() {
            expect(checkSearchRelevancy(orgData, ['programType', 'SEARCH ALL']))
                .toEqual(
                    [
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Scholarship Program",
                            "educationLevel": "High School",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "educationLevel": "Kindergarten",
                            "imagePath": "acec",
                            "relevantToSearch": true
                        },
                        {
                            "programType": "Loan Program",
                            "imagePath": "aci",
                            "relevantToSearch": true
                        }
                    ]
                );
        });
        
    });
    
    describe('Passing two search options arguments', function() {
        it('should set relevantToSearch to true if educationLevel: Kindergarten and programType: Loan Program', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'Kindergarten'], 
                ['programType', 'Loan Program'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan Program",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: Kindergarten and programType: Scholarship Program', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'Kindergarten'], 
                ['programType', 'Scholarship Program'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
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
                ['programType', 'SEARCH ALL'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan Program",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: High School and programType: Loan Program', function() {
            expect(checkSearchRelevancy(
                orgData.concat([
                    {
                        "programType": "Loan Program",
                        "imagePath": "aci",
                        'educationLevel': 'High School',
                    }
                ]), 
                ['educationLevel', 'High School'], 
                ['programType', 'Loan Program'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "imagePath": "aci",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
                        "imagePath": "aci",
                        "educationLevel": "High School",
                        "relevantToSearch": true
                    }
                ]
            );
        });
        
        it('should set relevantToSearch to true if educationLevel: High School and programType: Scholarship Program', function() {
            expect(checkSearchRelevancy(
                orgData, 
                ['educationLevel', 'High School'], 
                ['programType', 'Scholarship Program'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
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
                ['programType', 'SEARCH ALL'])
            ).toEqual(
                [
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Scholarship Program",
                        "educationLevel": "High School",
                        "imagePath": "aci",
                        "relevantToSearch": true
                    },
                    {
                        "programType": "Loan Program",
                        "educationLevel": "Kindergarten",
                        "imagePath": "acec",
                        "relevantToSearch": false
                    },
                    {
                        "programType": "Loan Program",
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
                    ['programType', 'Loan Program'],
                    'hello'
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a number', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan Program'],
                    25
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is an object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan Program'],
                    {key: 'val'}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
        
        it('should throw an error if no data argument is a function (non-array) object', () => {
            expect(function() {
                checkSearchRelevancy(
                    orgData,
                    ['programType', 'Loan Program'],
                    function(){}
                )
            }).toThrow(new Error('All search options must be an Array'))
        });
    });
        
    
});