import { parse } from 'graphql'
import { getExecutorForUnifiedGraph } from '@graphql-hive/gateway'
 
const executor = getExecutorForUnifiedGraph({
  getUnifiedGraph: () => import('./supergraph.js').then(m => m.default)
})
 
const exampleDocument = parse(/* GraphQL */ `
query MyQuery {
  feed_availability {
    ... on availability {
      __typename
      in_the_news
    }
  }
}
`)
 
 
const result = await executor({
  document: exampleDocument
})
 
console.log(result)