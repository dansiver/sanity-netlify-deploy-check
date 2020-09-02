export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f4f8e6cb91b3c014b76772f',
                  title: 'Sanity Studio',
                  name: 'sanity-netlify-deploy-check-studio',
                  apiId: '83763c34-8eb1-40a9-87e2-f82d652f17b3'
                },
                {
                  buildHookId: '5f4f8e6c26aa8e0100003736',
                  title: 'Landing pages Website',
                  name: 'sanity-netlify-deploy-check',
                  apiId: '4b875980-8388-466a-8b1d-a656e796c1ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dansiver/sanity-netlify-deploy-check',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-netlify-deploy-check.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
