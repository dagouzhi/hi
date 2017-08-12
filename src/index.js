import dva from 'dva';
import router from './router';
import { browserHistory, createMemoryHistory } from 'dva/router';

import './index.css';

// 1. Initialize
let app;
try {
  if (window) {
    app = dva({
      history: browserHistory,
    });
  } else {
    app = dva({
      history: createMemoryHistory(),
    });
  }
} catch (e) {
  app = dva({
    history: createMemoryHistory(),
  });
}

app.model(require('./models/init'));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(router);
// 5. Start
try {
  if (window) {
    app.start('#root');
  }
} catch (e) {

}

export default { app, router };

