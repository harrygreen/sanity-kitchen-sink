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
                  buildHookId: '5fafe8c45a29024e0432e2c4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ncupk4e9',
                  apiId: 'ce8ebbdc-71e4-498b-99a5-de427397c8d5'
                },
                {
                  buildHookId: '5fafe8c4c40d475404572652',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6mione2r',
                  apiId: 'ff1e45f6-8c30-4511-b96d-97667a917cb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harrygreen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6mione2r.netlify.app', category: 'apps'}
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
