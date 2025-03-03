import 'tdesign-web-components/button';

export default function Button() {
  return (
    <div style={{ gap: 16, display: 'inline-flex', flexDirection: 'column' }}>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button size="small" variant="base">
          填充按钮
        </t-button>
        <t-button size="small" variant="outline">
          描边按钮
        </t-button>
        <t-button size="small" variant="dashed">
          虚框按钮
        </t-button>
        <t-button size="small" variant="text">
          文字按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button size="medium" variant="base">
          填充按钮
        </t-button>
        <t-button size="medium" variant="outline">
          描边按钮
        </t-button>
        <t-button size="medium" variant="dashed">
          虚框按钮
        </t-button>
        <t-button size="medium" variant="text">
          文字按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button size="large" variant="base">
          填充按钮
        </t-button>
        <t-button size="large" variant="outline">
          描边按钮
        </t-button>
        <t-button size="large" variant="dashed">
          虚框按钮
        </t-button>
        <t-button size="large" variant="text">
          文字按钮
        </t-button>
      </div>
    </div>
  );
}
