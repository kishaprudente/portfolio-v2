export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f8e4b0aa596d3646857a17d',
                  title: 'Sanity Studio',
                  name: 'portfolio-v-2-studio-ay29tpgz',
                  apiId: 'e94af768-010c-4466-a93f-0cc2dd0de9e5'
                },
                {
                  buildHookId: '5f8e4b0a6b7e616882fb4945',
                  title: 'Portfolio Website',
                  name: 'portfolio-v-2-web',
                  apiId: 'ff7f52f0-4eb7-4a5c-8c38-543619cd21a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kishaprudente/portfolio-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-v-2-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
