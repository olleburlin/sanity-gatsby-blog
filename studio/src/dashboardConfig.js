export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea82e7919036799a3216b6c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-onbswq5b',
                  apiId: 'b565b52a-110a-4b41-bebd-fd2c371e2c3e'
                },
                {
                  buildHookId: '5ea82e791903677e53216b63',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8435z5gs',
                  apiId: 'f48499fe-9c61-46c3-9b4b-d7d818f9d3b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olleburlin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8435z5gs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
