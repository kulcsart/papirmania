import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? { kind: 'local' }
        : {
            kind: 'github',
            repo: {
                owner: 'kulcsart',
                name: 'papirmania'
            }
        },
    collections: {
        workshops: collection({
            label: 'Workshops',
            slugField: 'title',
            path: 'src/content/workshops/*',
            format: { contentField: 'description' },
            schema: {
                title: fields.slug({ name: { label: 'Cím' } }),
                coverImage: fields.image({
                    label: 'Borítókép',
                    directory: 'public/images/workshops',
                    publicPath: '/images/workshops/',
                }),
                price: fields.text({ label: 'Ár (pl. 15.000 Ft)' }),
                description: fields.document({
                    label: 'Leírás',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/workshops/content',
                        publicPath: '/images/workshops/content/',
                    },
                }),
                features: fields.array(
                    fields.text({ label: 'Jellemző' }),
                    {
                        label: 'Jellemzők (pl. Cartonnage technika)',
                        itemLabel: (props) => props.value || 'Új jellemző'
                    }
                ),
            },
        }),
    },
});
