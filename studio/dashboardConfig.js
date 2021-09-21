export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6149735445700e6253e4fb66',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jkifejon',
                  apiId: 'd5ef3237-ea64-4187-b386-8d7ced20b415'
                },
                {
                  buildHookId: '61497353aa4e2b68996d0af7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jv3sg4wf',
                  apiId: '07789c62-f95a-4b9d-8288-301cdc369643'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yerArias/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jv3sg4wf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
