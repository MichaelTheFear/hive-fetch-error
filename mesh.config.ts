import { defineConfig } from '@graphql-mesh/compose-cli'
import { loadOpenAPISubgraph } from '@omnigraph/openapi'
//import {fetch} from '@whatwg-node/fetch'
 import fetch from 'node-fetch'

export const composeConfig = defineConfig({
  output: 'supergraph.js',
  subgraphs: [
    {
      sourceHandler: loadOpenAPISubgraph('Wiki', {
        source: 'https://api.apis.guru/v2/specs/wikimedia.org/1.0.0/swagger.yaml'
      })
    }
  ],
  fetch
})