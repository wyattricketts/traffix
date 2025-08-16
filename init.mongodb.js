use('app')
db.dropDatabase()

db.createCollection('portfolio')
db.animals.insertMany([
  {
    title: 'Project 1',
    description: 'This is a description for project and I worked very hard on this',
    date: 'this is the date that this project occurred',
    type: 'project',
    image: '/logo.png'
  },
  {
    title: 'Project 2',
    description: 'This is a description for project and I worked very hard on this',
    date: 'this is the date that this project occurred',
    type: 'project',
    image: '/logo.png'
  },
  {
    title: 'Project 3',
    description: 'This is a description for project and I worked very hard on this',
    date: 'this is the date that this project occurred',
    type: 'project',
    image: '/logo.png'
  },
  {
    title: 'Job 1',
    description: 'This is a description for a job and I worked very hard on this',
    date: 'this is the date that this job occurred',
    type: 'job',
    image: '/logo.png'
  },
  {
    title: 'Job 2',
    description: 'This is a description for a job and I worked very hard on this',
    date: 'this is the date that this job occurred',
    type: 'job',
    image: '/logo.png'
  }
])


