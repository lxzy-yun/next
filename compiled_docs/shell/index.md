{"meta":"<p>&#x4EC5;&#x652F;&#x6301;IE10+</p>\n<h2 id=\"guide\">Guide<a href=\"#guide\" class=\"anchor\">#</a></h2><p>Shell &#x662F;&#x6574;&#x4E2A;&#x5E94;&#x7528;&#x7684;&#x57FA;&#x7840;&#x7ED3;&#x6784;&#x6846;&#x67B6;&#x3002;&#x5B83;&#x4F53;&#x73B0;&#x5E94;&#x7528;&#x7684;&#x7ED3;&#x6784;&#x5F62;&#x5F0F;&#x548C;&#x627F;&#x8F7D;&#x5E94;&#x7528;&#x7684;&#x57FA;&#x672C;&#x80FD;&#x529B;&#xFF0C;&#x8BA9;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x5728;&#x540C;&#x4E00;&#x5957;&#x6846;&#x67B6;&#x4E0B;&#x5B8C;&#x6210;&#x81EA;&#x5DF1;&#x6240;&#x6709;&#x7684;&#x64CD;&#x4F5C;&#x3002;</p>\n<h3 id=\"&#x4F55;&#x65F6;&#x4F7F;&#x7528;\">&#x4F55;&#x65F6;&#x4F7F;&#x7528;<a href=\"#&#x4F55;&#x65F6;&#x4F7F;&#x7528;\" class=\"anchor\">#</a></h3><ul>\n<li>Shell &#x5E94;&#x8BE5;&#x6839;&#x636E;&#x4E1A;&#x52A1;&#x5B9E;&#x9645;&#x8BC9;&#x6C42;&#x7684;&#x590D;&#x6742;&#x5EA6;&#x8FDB;&#x884C;&#x914D;&#x7F6E;&#xFF1B;</li>\n<li>&#x540C;&#x4E00;&#x4E2A;&#x5E94;&#x7528;&#x7EDF;&#x4E00;&#x4F7F;&#x7528;&#x4E00;&#x5957; Shell &#x6846;&#x67B6;&#xFF0C;&#x907F;&#x514D;&#x51FA;&#x73B0;&#x6DF7;&#x4E71;&#x95EE;&#x9898;&#xFF1B;</li>\n</ul>\n<div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Branding</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Navigation</span></span><span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Action</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.MultiTask</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.LocalNavigation</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.AppBar</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Content</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Footer</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.Ancillary</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.ToolDock</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Shell.ToolDockItem</span></span> <span class=\"token punctuation\">/&gt;</span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Shell.ToolDock</span></span><span class=\"token punctuation\">&gt;</span></span><span class=\"token plain-text\">\n</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Shell</span></span><span class=\"token punctuation\">&gt;</span></span></code></pre></div><p>&#x5176;&#x4E2D; <code>&lt;Shell.Content /&gt;</code> &#x91C7;&#x7528;Grid&#x5E03;&#x5C40;&#xFF0C; &#x5176;&#x4ED6;&#x5747;&#x4E3A; Flex&#x5E03;&#x5C40;</p>\n<h2 id=\"api\">API<a href=\"#api\" class=\"anchor\">#</a></h2>","api":"<h3 id=\"shell\">Shell<a href=\"#shell\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>device</td>\n<td>&#x9884;&#x8BBE;&#x5C4F;&#x5E55;&#x5BBD;&#x5EA6;&#xFF0C;&#x4F1A;&#x5F71;&#x54CD;<code>Navigation</code> <code>LocalNavigation</code> <code>Ancillary</code>&#x7B49;&#x662F;&#x5426;&#x5360;&#x636E;&#x7A7A;&#x95F4;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;phone&apos;, &apos;tablet&apos;, &apos;desktop&apos;</td>\n<td>Enum</td>\n<td>desktop</td>\n</tr>\n<tr>\n<td>type</td>\n<td>&#x6837;&#x5F0F;&#x7C7B;&#x578B;&#xFF0C;&#x5206;&#x6D45;&#x8272;&#x4E3B;&#x9898;&#x3001;&#x6DF1;&#x8272;&#x4E3B;&#x9898;&#x3001;&#x4E3B;&#x9898;&#x8272;&#x4E3B;&#x9898;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;light&apos;, &apos;dark&apos;, &apos;brand&apos;</td>\n<td>Enum</td>\n<td>light</td>\n</tr>\n<tr>\n<td>fixedHeader</td>\n<td>&#x662F;&#x5426;&#x56FA;&#x5B9A;Header&#xFF0C;&#x91C7;&#x7528;sticky&#x5E03;&#x5C40;&#xFF0C;&#x4E0D;&#x652F;&#x6301; IE11</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"shell-navigation\">Shell.Navigation<a href=\"#shell-navigation\" class=\"anchor\">#</a></h3><p>&#x5411;&#x5B50;&#x7EC4;&#x4EF6;&#x900F;&#x4F20; isCollapse &#x7684;Context&#xFF0C;&#x8868;&#x793A;&#x5F53;&#x524D;&#x662F;&#x5426;&#x5904;&#x4E8E;&#x6298;&#x53E0;&#x72B6;&#x6001;</p>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>direction</td>\n<td>&#x65B9;&#x5411;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;hoz&apos;, &apos;ver&apos;</td>\n<td>Enum</td>\n<td>hoz</td>\n</tr>\n<tr>\n<td>collapse</td>\n<td>&#x662F;&#x5426;&#x6298;&#x53E0;(&#x6298;&#x53E0;&#x6210;&#x53EA;&#x6709;icon&#x72B6;&#x6001;)</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>align</td>\n<td>&#x6A2A;&#x5411;&#x6A21;&#x5F0F;&#x4E0B;&#xFF0C;&#x5BFC;&#x822A;&#x6392;&#x5E03;&#x7684;&#x4F4D;&#x7F6E;<br><br><strong>&#x53EF;&#x9009;&#x503C;</strong>:<br>&apos;left&apos;, &apos;right&apos;, &apos;center&apos;</td>\n<td>Enum</td>\n<td>right</td>\n</tr>\n<tr>\n<td>onCollapseChange</td>\n<td>&#x9ED8;&#x8BA4;&#x6309;&#x94AE;&#x89E6;&#x53D1;&#x7684;&#x5C55;&#x5F00;&#x6536;&#x8D77;&#x72B6;&#x6001;</td>\n<td>Function</td>\n<td>() =&gt; {}</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>&#x83DC;&#x5355;&#x5C55;&#x5F00;&#x3001;&#x6536;&#x8D77;&#x7684;&#x89E6;&#x53D1;&#x5143;&#x7D20;&#xFF0C;&#x9ED8;&#x8BA4;&#x5728;&#x5DE6;&#x4E0A;&#x89D2;&#xFF0C;&#x4E0D;&#x60F3;&#x8981;&#x53EF;&#x4EE5;&#x8BBE;&#x7F6E; <code>null</code> &#x6765;&#x53BB;&#x6389;</td>\n<td>ReactNode</td>\n<td></td>\n</tr>\n<tr>\n<td>fixed</td>\n<td>&#x662F;&#x5426;&#x56FA;&#x5B9A;&#xFF0C;&#x4E14;&#x9700;&#x8981;&#x5728;&#x5728; Shell fixedHeader&#x65F6;&#x751F;&#x6548;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"shell-localnavigation\">Shell.LocalNavigation<a href=\"#shell-localnavigation\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>collapse</td>\n<td>&#x662F;&#x5426;&#x6298;&#x53E0;&#xFF08;&#x5B8C;&#x5168;&#x6536;&#x8D77;&#xFF09;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onCollapseChange</td>\n<td>&#x9ED8;&#x8BA4;&#x6309;&#x94AE;&#x89E6;&#x53D1;&#x7684;&#x5C55;&#x5F00;&#x6536;&#x8D77;&#x72B6;&#x6001;</td>\n<td>Function</td>\n<td>() =&gt; {}</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"shell-tooldock\">Shell.ToolDock<a href=\"#shell-tooldock\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>collapse</td>\n<td>&#x662F;&#x5426;&#x6298;&#x53E0;&#xFF08;&#x5B8C;&#x5168;&#x6536;&#x8D77;&#xFF09;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onCollapseChange</td>\n<td>&#x9ED8;&#x8BA4;&#x6309;&#x94AE;&#x89E6;&#x53D1;&#x7684;&#x5C55;&#x5F00;&#x6536;&#x8D77;&#x72B6;&#x6001;</td>\n<td>Function</td>\n<td>() =&gt; {}</td>\n</tr>\n<tr>\n<td>fixed</td>\n<td>&#x662F;&#x5426;&#x56FA;&#x5B9A;&#xFF0C;&#x4E14;&#x9700;&#x8981;&#x5728;&#x5728; Shell fixedHeader&#x65F6;&#x751F;&#x6548;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"shell-ancillary\">Shell.Ancillary<a href=\"#shell-ancillary\" class=\"anchor\">#</a></h3><table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>collapse</td>\n<td>&#x662F;&#x5426;&#x6298;&#x53E0;&#xFF08;&#x5B8C;&#x5168;&#x6536;&#x8D77;&#xFF09;</td>\n<td>Boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>onCollapseChange</td>\n<td>&#x9ED8;&#x8BA4;&#x6309;&#x94AE;&#x89E6;&#x53D1;&#x7684;&#x5C55;&#x5F00;&#x6536;&#x8D77;&#x72B6;&#x6001;</td>\n<td>Function</td>\n<td>() =&gt; {}</td>\n</tr>\n</tbody>\n</table>\n"}