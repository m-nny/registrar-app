import { configure } from '@storybook/react';

import 'antd/dist/antd.css';

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
