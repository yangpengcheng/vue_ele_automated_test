import Layout from '@/layout/index.vue'

const TestRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/test',
  name: 'Test',
  meta: {
    title: '测试',
    permissions: []
  },
  children: [
    {
      path: 'test',
      component: () => import('@/views/Test.vue'),
      name: 'Test',
      meta: {
        title: '测试页面',
        permissions: []
      }
    }
  ]
}
export default TestRouter
