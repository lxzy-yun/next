{"title":"Controlled Component","meta":{"title":"Controlled Component","description":"\n"},"codes":{"jsx":"import { Radio } from '@alifd/next';\n\nconst RadioGroup = Radio.Group;\n\nconst list = [\n    {\n        value: 'appale',\n        label: 'Appale'\n    }, {\n        value: 'pear',\n        label: 'Pear'\n    }, {\n        value: 'orange',\n        label: 'Orange'\n    }\n];\n\nclass ControlApp extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            value: 'orange'\n        };\n\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(value) {\n        this.setState({\n            value: value\n        });\n        console.log('onChange', value);\n    }\n\n    onClick(e) {\n        console.log('onClick', e);\n    }\n\n    render() {\n        return (\n            <div>\n                normal:   <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />\n                <br />\n                <br />\n                <br />\n                disabled:  <RadioGroup disabled dataSource={list} value={this.state.value} onChange={this.onChange} />\n            </div>\n        );\n    }\n}\n\nReactDOM.render(<ControlApp />, mountNode);\n"},"body":"\n````jsx\nimport { Radio } from '@alifd/next';\n\nconst RadioGroup = Radio.Group;\n\nconst list = [\n    {\n        value: 'appale',\n        label: 'Appale'\n    }, {\n        value: 'pear',\n        label: 'Pear'\n    }, {\n        value: 'orange',\n        label: 'Orange'\n    }\n];\n\nclass ControlApp extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            value: 'orange'\n        };\n\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(value) {\n        this.setState({\n            value: value\n        });\n        console.log('onChange', value);\n    }\n\n    onClick(e) {\n        console.log('onClick', e);\n    }\n\n    render() {\n        return (\n            <div>\n                normal:   <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />\n                <br />\n                <br />\n                <br />\n                disabled:  <RadioGroup disabled dataSource={list} value={this.state.value} onChange={this.onChange} />\n            </div>\n        );\n    }\n}\n\nReactDOM.render(<ControlApp />, mountNode);\n````","html":"<script>(function(){'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _next = require('@alifd/next');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RadioGroup = _next.Radio.Group;\n\nvar list = [{\n    value: 'appale',\n    label: 'Appale'\n}, {\n    value: 'pear',\n    label: 'Pear'\n}, {\n    value: 'orange',\n    label: 'Orange'\n}];\n\nvar ControlApp = function (_React$Component) {\n    _inherits(ControlApp, _React$Component);\n\n    function ControlApp(props) {\n        _classCallCheck(this, ControlApp);\n\n        var _this = _possibleConstructorReturn(this, (ControlApp.__proto__ || Object.getPrototypeOf(ControlApp)).call(this, props));\n\n        _this.state = {\n            value: 'orange'\n        };\n\n        _this.onChange = _this.onChange.bind(_this);\n        return _this;\n    }\n\n    _createClass(ControlApp, [{\n        key: 'onChange',\n        value: function onChange(value) {\n            this.setState({\n                value: value\n            });\n            console.log('onChange', value);\n        }\n    }, {\n        key: 'onClick',\n        value: function onClick(e) {\n            console.log('onClick', e);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                'normal:   ',\n                React.createElement(RadioGroup, { dataSource: list, value: this.state.value, onChange: this.onChange }),\n                React.createElement('br', null),\n                React.createElement('br', null),\n                React.createElement('br', null),\n                'disabled:  ',\n                React.createElement(RadioGroup, { disabled: true, dataSource: list, value: this.state.value, onChange: this.onChange })\n            );\n        }\n    }]);\n\n    return ControlApp;\n}(React.Component);\n\nReactDOM.render(React.createElement(ControlApp, null), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> list <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'appale'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Appale'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'pear'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Pear'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'orange'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Orange'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">ControlApp</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'orange'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">.</span><span class=\"token function\">bind</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> value\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onChange'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function\">onClick</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onClick'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                normal:   </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">RadioGroup</span></span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                disabled:  </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">RadioGroup</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">ControlApp</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div>"}