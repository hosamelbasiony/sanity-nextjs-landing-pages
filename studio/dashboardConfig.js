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
                  buildHookId: '5fdfdf7eaf98383add7e9eaa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1n6k1or1',
                  apiId: '1f2a0ec4-c11f-4d03-8738-3b22cd552cab'
                },
                {
                  buildHookId: '5fdfdf7eab133d2a4839dde9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k43u9qz9',
                  apiId: '2bdb52d4-9396-4ad1-8869-98c83b5a9b68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hosamelbasiony/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k43u9qz9.netlify.app', category: 'apps'}
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
