import { CollectionConfig } from 'payload/types';

const Accounts: CollectionConfig = {
    slug: 'accounts',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'nama',
            type: 'text',
            required: true,
            label: 'Full Name',
        },
        {
            name: 'email',
            type: 'email',
            required: true,
            unique: true,
            label: 'Email',
        },
        {
            name: 'asalSekolah',
            type: 'text',
            required: true,
            label: 'School',
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            label: 'Registration Check',
            options: [
                {
                    label: 'Waiting',
                    value: 'waiting',
                },
                {
                    label: 'Rejected',
                    value: 'rejected',
                },
                {
                    label: 'Accepted',
                    value: 'accepted',
                },
            ],
        },
        {
            name: 'tanggalDaftar',
            type: 'date',
            label: 'Registration Date',
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                    displayFormat: 'd MMM yyy h:mm:ss a',
                },
            },
        },
    ],
};

export default Accounts;