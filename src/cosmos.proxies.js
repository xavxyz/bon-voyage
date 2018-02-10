import createStateProxy from 'react-cosmos-state-proxy';
import createContextProxy from 'react-cosmos-context-proxy';
import createFetchProxy from 'react-cosmos-fetch-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';
import PropTypes from 'prop-types';

const StateProxy = createStateProxy({
  updateInterval: 50,
});

const ContextProxy = createContextProxy({
  childContextTypes: {
    theme: PropTypes.object,
  },
});

const proxies = [ContextProxy, createFetchProxy(), createRouterProxy()];

// the state proxy is not bundled by default in react-cosmos-test
if (process.env.NODE_ENV === 'test') {
  proxies.unshift(StateProxy);
}

export default proxies;
