import 'tdesign-web-components/slider';
import 'tdesign-web-components/space';

import { Component, signal } from 'omi';

export default class Demo extends Component {
  value1 = signal(12);

  value2 = signal([12, 20]);

  min = signal(10);

  max = signal(30);

  marks = signal({
    10: 'min:10',
    30: 'max:30',
  });

  render() {
    return (
      <t-space direction="vertical" size="60px" style={{ width: '100%' }}>
        <t-slider value={this.value1.value} min={this.min.value} max={this.max.value} marks={this.marks.value} />
        <t-slider range value={this.value2.value} min={this.min.value} max={this.max.value} marks={this.marks.value} />
      </t-space>
    );
  }
}
