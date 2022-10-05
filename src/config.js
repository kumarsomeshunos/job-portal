module.exports = global.config = {

    jobTypeOptions: [
        { value: '', label: 'Any' },
        { value: 'academic', label: 'Academics' },
        { value: 'non_academic', label: 'Non Academic' },
        { value: 'administration', label: 'Administration' }
    ],

    statusOptions: [
        { value: '', label: 'Any' },
        { value: 'draft', label: 'Draft' },
        { value: 'submitted', label: 'Submitted' },
        { value: 'approved', label: 'Approved' },
        { value: 'rejected', label: 'Rejected' }
    ]
    // other global config variables you wish
};