(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        'css': "test,[is=\"test\"]{ display: block; height: 100vh; } test > div,[is=\"test\"] > div{ margin: .5em; }",
        'exports': null,
        'template': function (template, expressionTypes, bindingTypes, getComponent) {
            return template('<rm-app-bar expr41="expr41"></rm-app-bar><rm-app-bar expr42="expr42" fixed surface="dark" scroll-target="window"></rm-app-bar><rm-app-bar expr47="expr47" clamped fixed bottom scroll-target="window"></rm-app-bar><div><p>Textfield</p><rm-textfield expr56="expr56" label="Flat" variant="flat"></rm-textfield><rm-textfield expr57="expr57" label="Filled" variant="filled"></rm-textfield><rm-textfield expr58="expr58" label="Outlined" variant="outlined"></rm-textfield><rm-textfield expr59="expr59" placeholder="Outlined" variant="outlined"></rm-textfield><rm-divider expr60="expr60"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><rm-textfield expr61="expr61" label="Flat" variant="flat"></rm-textfield><rm-textfield expr62="expr62" label="Filled" variant="filled"></rm-textfield><rm-textfield expr63="expr63" label="Outlined" variant="outlined"></rm-textfield></div><div class="rm-dark-surface" style="padding: 12px;"><rm-textfield expr64="expr64" label="Flat" variant="flat"></rm-textfield><rm-textfield expr65="expr65" label="Filled" variant="filled"></rm-textfield><rm-textfield expr66="expr66" label="Outlined" variant="outlined"></rm-textfield></div><div class="rm-light-surface" style="padding: 12px;"><rm-textfield expr67="expr67" label="Flat" variant="flat"></rm-textfield><rm-textfield expr68="expr68" label="Filled" variant="filled"></rm-textfield><rm-textfield expr69="expr69" label="Outlined" variant="outlined"></rm-textfield></div><div class="rm-white-surface" style="padding: 12px;"><rm-textfield expr70="expr70" label="Flat" variant="flat"></rm-textfield><rm-textfield expr71="expr71" label="Filled" variant="filled"></rm-textfield><rm-textfield expr72="expr72" label="Outlined" variant="outlined"></rm-textfield></div><rm-divider expr73="expr73"></rm-divider><p>Textarea</p><rm-textarea expr74="expr74" label="Flat" variant="flat"></rm-textarea><rm-textarea expr75="expr75" label="Filled" variant="filled"></rm-textarea><rm-textarea expr76="expr76" label="Outlined" variant="outlined"></rm-textarea><rm-divider expr77="expr77"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><rm-textarea expr78="expr78" label="Flat" variant="flat"></rm-textarea><rm-textarea expr79="expr79" label="Filled" variant="filled"></rm-textarea><rm-textarea expr80="expr80" label="Outlined" variant="outlined"></rm-textarea></div><div class="rm-dark-surface" style="padding: 12px;"><rm-textarea expr81="expr81" label="Flat" variant="flat"></rm-textarea><rm-textarea expr82="expr82" label="Filled" variant="filled"></rm-textarea><rm-textarea expr83="expr83" label="Outlined" variant="outlined"></rm-textarea></div><div class="rm-light-surface" style="padding: 12px;"><rm-textarea expr84="expr84" label="Flat" variant="flat"></rm-textarea><rm-textarea expr85="expr85" label="Filled" variant="filled"></rm-textarea><rm-textarea expr86="expr86" label="Outlined" variant="outlined"></rm-textarea></div><div class="rm-white-surface" style="padding: 12px;"><rm-textarea expr87="expr87" label="Flat" variant="flat"></rm-textarea><rm-textarea expr88="expr88" label="Filled" variant="filled"></rm-textarea><rm-textarea expr89="expr89" label="Outlined" variant="outlined"></rm-textarea></div><rm-divider expr90="expr90"></rm-divider><p>Select</p><rm-select expr91="expr91" label="Select" filterable></rm-select><rm-select expr92="expr92" label="Select" variant="filled"></rm-select><rm-select expr93="expr93" label="Select" variant="outlined"></rm-select><rm-divider expr94="expr94"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><rm-select expr95="expr95" label="Select"></rm-select><rm-select expr96="expr96" label="Select" variant="filled"></rm-select><rm-select expr97="expr97" label="Select" variant="outlined"></rm-select></div><div class="rm-dark-surface" style="padding: 12px;"><rm-select expr98="expr98" label="Select"></rm-select><rm-select expr99="expr99" label="Select" variant="filled"></rm-select><rm-select expr100="expr100" label="Select" variant="outlined"></rm-select></div><div class="rm-light-surface" style="padding: 12px;"><rm-select expr101="expr101" label="Select"></rm-select><rm-select expr102="expr102" label="Select" variant="filled"></rm-select><rm-select expr103="expr103" label="Select" variant="outlined"></rm-select></div><div class="rm-white-surface" style="padding: 12px;"><rm-select expr104="expr104" label="Select"></rm-select><rm-select expr105="expr105" label="Select" variant="filled"></rm-select><rm-select expr106="expr106" label="Select" variant="outlined"></rm-select></div><rm-divider expr107="expr107"></rm-divider><p>Button</p><rm-button expr108="expr108" variant="text"></rm-button><rm-button expr109="expr109" variant="text" color="primary"></rm-button><rm-button expr110="expr110" variant="text" color="accent"></rm-button><rm-button expr111="expr111" variant="text" color="warn"></rm-button><rm-button expr112="expr112" variant="text" disabled></rm-button><div style="height: 8px;"></div><rm-button expr113="expr113" variant="raised"></rm-button><rm-button expr114="expr114" variant="raised" color="primary"></rm-button><rm-button expr115="expr115" variant="raised" color="accent"></rm-button><rm-button expr116="expr116" variant="raised" color="warn"></rm-button><rm-button expr117="expr117" variant="raised" disabled></rm-button><div style="height: 8px;"></div><rm-button expr118="expr118" variant="outlined"></rm-button><rm-button expr119="expr119" variant="outlined" color="primary"></rm-button><rm-button expr120="expr120" variant="outlined" color="accent"></rm-button><rm-button expr121="expr121" variant="outlined" color="warn"></rm-button><rm-button expr122="expr122" variant="outlined" disabled></rm-button><div style="height: 8px;"></div><rm-button expr123="expr123" variant="unelevated"></rm-button><rm-button expr124="expr124" variant="unelevated" color="primary"></rm-button><rm-button expr125="expr125" variant="unelevated" color="accent"></rm-button><rm-button expr126="expr126" variant="unelevated" color="warn"></rm-button><rm-button expr127="expr127" variant="unelevated" disabled></rm-button><div style="height: 8px;"></div><rm-button expr128="expr128" variant="icon"></rm-button><rm-button expr129="expr129" variant="icon" color="primary"></rm-button><rm-button expr130="expr130" variant="icon" color="accent"></rm-button><rm-button expr131="expr131" variant="icon" color="warn"></rm-button><rm-button expr132="expr132" variant="icon" disabled></rm-button><div style="height: 8px;"></div><rm-button expr133="expr133" variant="icon" icon-style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .6));"></rm-button><rm-button expr134="expr134" variant="icon" color="primary" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr135="expr135" variant="icon" color="accent" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr136="expr136" variant="icon" color="warn" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr137="expr137" variant="icon" disabled icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-divider expr138="expr138"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><rm-button expr139="expr139" variant="text"></rm-button><rm-button expr140="expr140" variant="text" color="primary"></rm-button><rm-button expr141="expr141" variant="text" color="accent"></rm-button><rm-button expr142="expr142" variant="text" color="warn"></rm-button><rm-button expr143="expr143" variant="text" disabled></rm-button><div style="height: 8px;"></div><rm-button expr144="expr144" variant="raised"></rm-button><rm-button expr145="expr145" variant="raised" color="primary"></rm-button><rm-button expr146="expr146" variant="raised" color="accent"></rm-button><rm-button expr147="expr147" variant="raised" color="warn"></rm-button><rm-button expr148="expr148" variant="raised" disabled></rm-button><div style="height: 8px;"></div><rm-button expr149="expr149" variant="outlined"></rm-button><rm-button expr150="expr150" variant="outlined" color="primary"></rm-button><rm-button expr151="expr151" variant="outlined" color="accent"></rm-button><rm-button expr152="expr152" variant="outlined" color="warn"></rm-button><rm-button expr153="expr153" variant="outlined" disabled></rm-button><div style="height: 8px;"></div><rm-button expr154="expr154" variant="unelevated"></rm-button><rm-button expr155="expr155" variant="unelevated" color="primary"></rm-button><rm-button expr156="expr156" variant="unelevated" color="accent"></rm-button><rm-button expr157="expr157" variant="unelevated" color="warn"></rm-button><rm-button expr158="expr158" variant="unelevated" disabled></rm-button><div style="height: 8px;"></div><rm-button expr159="expr159" variant="icon"></rm-button><rm-button expr160="expr160" variant="icon" color="primary"></rm-button><rm-button expr161="expr161" variant="icon" color="accent"></rm-button><rm-button expr162="expr162" variant="icon" color="warn"></rm-button><rm-button expr163="expr163" variant="icon" disabled></rm-button><div style="height: 8px;"></div><rm-button expr164="expr164" variant="icon" icon-style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .6));"></rm-button><rm-button expr165="expr165" variant="icon" color="primary" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr166="expr166" variant="icon" color="accent" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr167="expr167" variant="icon" color="warn" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr168="expr168" variant="icon" disabled icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button></div><div class="rm-dark-surface" style="padding: 12px;"><rm-button expr169="expr169" variant="text"></rm-button><rm-button expr170="expr170" variant="text" color="primary"></rm-button><rm-button expr171="expr171" variant="text" color="accent"></rm-button><rm-button expr172="expr172" variant="text" color="warn"></rm-button><rm-button expr173="expr173" variant="text" disabled></rm-button><div style="height: 8px;"></div><rm-button expr174="expr174" variant="raised"></rm-button><rm-button expr175="expr175" variant="raised" color="primary"></rm-button><rm-button expr176="expr176" variant="raised" color="accent"></rm-button><rm-button expr177="expr177" variant="raised" color="warn"></rm-button><rm-button expr178="expr178" variant="raised" disabled></rm-button><div style="height: 8px;"></div><rm-button expr179="expr179" variant="outlined"></rm-button><rm-button expr180="expr180" variant="outlined" color="primary"></rm-button><rm-button expr181="expr181" variant="outlined" color="accent"></rm-button><rm-button expr182="expr182" variant="outlined" color="warn"></rm-button><rm-button expr183="expr183" variant="outlined" disabled></rm-button><div style="height: 8px;"></div><rm-button expr184="expr184" variant="unelevated"></rm-button><rm-button expr185="expr185" variant="unelevated" color="primary"></rm-button><rm-button expr186="expr186" variant="unelevated" color="accent"></rm-button><rm-button expr187="expr187" variant="unelevated" color="warn"></rm-button><rm-button expr188="expr188" variant="unelevated" disabled></rm-button><div style="height: 8px;"></div><rm-button expr189="expr189" variant="icon"></rm-button><rm-button expr190="expr190" variant="icon" color="primary"></rm-button><rm-button expr191="expr191" variant="icon" color="accent"></rm-button><rm-button expr192="expr192" variant="icon" color="warn"></rm-button><rm-button expr193="expr193" variant="icon" disabled></rm-button><div style="height: 8px;"></div><rm-button expr194="expr194" variant="icon" icon-style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .6));"></rm-button><rm-button expr195="expr195" variant="icon" color="primary" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr196="expr196" variant="icon" color="accent" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr197="expr197" variant="icon" color="warn" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr198="expr198" variant="icon" disabled icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button></div><div class="rm-light-surface" style="padding: 12px;"><rm-button expr199="expr199" variant="text"></rm-button><rm-button expr200="expr200" variant="text" color="primary"></rm-button><rm-button expr201="expr201" variant="text" color="accent"></rm-button><rm-button expr202="expr202" variant="text" color="warn"></rm-button><rm-button expr203="expr203" variant="text" disabled></rm-button><div style="height: 8px;"></div><rm-button expr204="expr204" variant="raised"></rm-button><rm-button expr205="expr205" variant="raised" color="primary"></rm-button><rm-button expr206="expr206" variant="raised" color="accent"></rm-button><rm-button expr207="expr207" variant="raised" color="warn"></rm-button><rm-button expr208="expr208" variant="raised" disabled></rm-button><div style="height: 8px;"></div><rm-button expr209="expr209" variant="outlined"></rm-button><rm-button expr210="expr210" variant="outlined" color="primary"></rm-button><rm-button expr211="expr211" variant="outlined" color="accent"></rm-button><rm-button expr212="expr212" variant="outlined" color="warn"></rm-button><rm-button expr213="expr213" variant="outlined" disabled></rm-button><div style="height: 8px;"></div><rm-button expr214="expr214" variant="unelevated"></rm-button><rm-button expr215="expr215" variant="unelevated" color="primary"></rm-button><rm-button expr216="expr216" variant="unelevated" color="accent"></rm-button><rm-button expr217="expr217" variant="unelevated" color="warn"></rm-button><rm-button expr218="expr218" variant="unelevated" disabled></rm-button><div style="height: 8px;"></div><rm-button expr219="expr219" variant="icon"></rm-button><rm-button expr220="expr220" variant="icon" color="primary"></rm-button><rm-button expr221="expr221" variant="icon" color="accent"></rm-button><rm-button expr222="expr222" variant="icon" color="warn"></rm-button><rm-button expr223="expr223" variant="icon" disabled></rm-button><div style="height: 8px;"></div><rm-button expr224="expr224" variant="icon" icon-style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .6));"></rm-button><rm-button expr225="expr225" variant="icon" color="primary" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr226="expr226" variant="icon" color="accent" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr227="expr227" variant="icon" color="warn" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr228="expr228" variant="icon" disabled icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button></div><div class="rm-white-surface" style="padding: 12px;"><rm-button expr229="expr229" variant="text"></rm-button><rm-button expr230="expr230" variant="text" color="primary"></rm-button><rm-button expr231="expr231" variant="text" color="accent"></rm-button><rm-button expr232="expr232" variant="text" color="warn"></rm-button><rm-button expr233="expr233" variant="text" disabled></rm-button><div style="height: 8px;"></div><rm-button expr234="expr234" variant="raised"></rm-button><rm-button expr235="expr235" variant="raised" color="primary"></rm-button><rm-button expr236="expr236" variant="raised" color="accent"></rm-button><rm-button expr237="expr237" variant="raised" color="warn"></rm-button><rm-button expr238="expr238" variant="raised" disabled></rm-button><div style="height: 8px;"></div><rm-button expr239="expr239" variant="outlined"></rm-button><rm-button expr240="expr240" variant="outlined" color="primary"></rm-button><rm-button expr241="expr241" variant="outlined" color="accent"></rm-button><rm-button expr242="expr242" variant="outlined" color="warn"></rm-button><rm-button expr243="expr243" variant="outlined" disabled></rm-button><div style="height: 8px;"></div><rm-button expr244="expr244" variant="unelevated"></rm-button><rm-button expr245="expr245" variant="unelevated" color="primary"></rm-button><rm-button expr246="expr246" variant="unelevated" color="accent"></rm-button><rm-button expr247="expr247" variant="unelevated" color="warn"></rm-button><rm-button expr248="expr248" variant="unelevated" disabled></rm-button><div style="height: 8px;"></div><rm-button expr249="expr249" variant="icon"></rm-button><rm-button expr250="expr250" variant="icon" color="primary"></rm-button><rm-button expr251="expr251" variant="icon" color="accent"></rm-button><rm-button expr252="expr252" variant="icon" color="warn"></rm-button><rm-button expr253="expr253" variant="icon" disabled></rm-button><div style="height: 8px;"></div><rm-button expr254="expr254" variant="icon" icon-style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .6));"></rm-button><rm-button expr255="expr255" variant="icon" color="primary" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr256="expr256" variant="icon" color="accent" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr257="expr257" variant="icon" color="warn" icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button><rm-button expr258="expr258" variant="icon" disabled icon-style="filter: drop-shadow(0px 2px 2px #f4a46099);"></rm-button></div><rm-divider expr259="expr259"></rm-divider><rm-checkbox expr260="expr260" label="Label"></rm-checkbox><div style="height: 8px;"></div><rm-checkbox expr261="expr261" checked label="Checked"></rm-checkbox><rm-divider expr262="expr262"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><rm-checkbox expr263="expr263" label="Label"></rm-checkbox><div style="height: 8px;"></div><rm-checkbox expr264="expr264" checked label="Checked"></rm-checkbox></div><div class="rm-dark-surface" style="padding: 12px;"><rm-checkbox expr265="expr265" label="Label"></rm-checkbox><div style="height: 8px;"></div><rm-checkbox expr266="expr266" checked label="Checked"></rm-checkbox></div><div class="rm-light-surface" style="padding: 12px;"><rm-checkbox expr267="expr267" label="Label"></rm-checkbox><div style="height: 8px;"></div><rm-checkbox expr268="expr268" checked label="Checked"></rm-checkbox></div><div class="rm-white-surface" style="padding: 12px;"><rm-checkbox expr269="expr269" label="Label"></rm-checkbox><div style="height: 8px;"></div><rm-checkbox expr270="expr270" checked label="Checked"></rm-checkbox></div><rm-divider expr271="expr271"></rm-divider><form><rm-radio expr272="expr272" name="radio" label="Email" value="email"></rm-radio><rm-radio expr273="expr273" name="radio" label="Phone" value="phone"></rm-radio><rm-radio expr274="expr274" name="radio" label="Letter" value="letter"></rm-radio></form><div><rm-radio expr275="expr275" name="radio" label="Option 1" value="opt1"></rm-radio><rm-radio expr276="expr276" name="radio" label="Option 2" value="opt2"></rm-radio><rm-radio expr277="expr277" name="radio" label="Option 3" value="opt3"></rm-radio></div><rm-divider expr278="expr278"></rm-divider><div class="rm-black-surface" style="padding: 12px;"><form><rm-radio expr279="expr279" name="radio" label="Email" value="email"></rm-radio><rm-radio expr280="expr280" name="radio" label="Phone" value="phone"></rm-radio><rm-radio expr281="expr281" name="radio" label="Letter" value="letter"></rm-radio></form><div><rm-radio expr282="expr282" name="radio" label="Option 1" value="opt1"></rm-radio><rm-radio expr283="expr283" name="radio" label="Option 2" value="opt2"></rm-radio><rm-radio expr284="expr284" name="radio" label="Option 3" value="opt3"></rm-radio></div></div><div class="rm-dark-surface" style="padding: 12px;"><form><rm-radio expr285="expr285" name="radio" label="Email" value="email"></rm-radio><rm-radio expr286="expr286" name="radio" label="Phone" value="phone"></rm-radio><rm-radio expr287="expr287" name="radio" label="Letter" value="letter"></rm-radio></form><div><rm-radio expr288="expr288" name="radio" label="Option 1" value="opt1"></rm-radio><rm-radio expr289="expr289" name="radio" label="Option 2" value="opt2"></rm-radio><rm-radio expr290="expr290" name="radio" label="Option 3" value="opt3"></rm-radio></div></div><div class="rm-light-surface" style="padding: 12px;"><form><rm-radio expr291="expr291" name="radio" label="Email" value="email"></rm-radio><rm-radio expr292="expr292" name="radio" label="Phone" value="phone"></rm-radio><rm-radio expr293="expr293" name="radio" label="Letter" value="letter"></rm-radio></form><div><rm-radio expr294="expr294" name="radio" label="Option 1" value="opt1"></rm-radio><rm-radio expr295="expr295" name="radio" label="Option 2" value="opt2"></rm-radio><rm-radio expr296="expr296" name="radio" label="Option 3" value="opt3"></rm-radio></div></div><div class="rm-white-surface" style="padding: 12px;"><form><rm-radio expr297="expr297" name="radio" label="Email" value="email"></rm-radio><rm-radio expr298="expr298" name="radio" label="Phone" value="phone"></rm-radio><rm-radio expr299="expr299" name="radio" label="Letter" value="letter"></rm-radio></form><div><rm-radio expr300="expr300" name="radio" label="Option 1" value="opt1"></rm-radio><rm-radio expr301="expr301" name="radio" label="Option 2" value="opt2"></rm-radio><rm-radio expr302="expr302" name="radio" label="Option 3" value="opt3"></rm-radio></div></div><rm-divider expr303="expr303"></rm-divider><rm-tabs expr304="expr304"></rm-tabs><rm-divider expr305="expr305"></rm-divider><rm-button expr306="expr306" variant="unelevated"></rm-button><div style="height: 8px;"></div><rm-button expr307="expr307" variant="unelevated" ripple-unbounded></rm-button><div style="height: 8px;"></div><rm-button expr308="expr308" variant="unelevated" ripple-centered></rm-button><div style="height: 8px;"></div><rm-button expr309="expr309" variant="unelevated" ripple-radius="36"></rm-button><div style="height: 8px;"></div><rm-button expr310="expr310" variant="unelevated" ripple-unbounded ripple-centered></rm-button><rm-divider expr311="expr311"></rm-divider><rm-button expr312="expr312" open-overlay="bottomsheet1"></rm-button><rm-bottom-sheet expr313="expr313" id="bottomsheet1"></rm-bottom-sheet><rm-button expr314="expr314" open-overlay="dialog"></rm-button><rm-dialog expr315="expr315" id="dialog"></rm-dialog></div><rm-app-bar expr318="expr318"></rm-app-bar>', [{
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-app-bar';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr41',
                    'selector': '[expr41]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-app-bar';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<div style="height: 100%; width: 100%; position: relative;"><div style="height: 100%; display: table; width: 100%;"><div style="display: table-cell; width: 1px;"><rm-button expr43="expr43" variant="icon"></rm-button></div><div style="display: table-cell; font-size: 0; vertical-align: middle;"><span style="font-size: 20px; vertical-align: middle;">Page title</span></div><div style="display: table-cell; width: 1px; white-space: nowrap;"><rm-button expr44="expr44" variant="icon"></rm-button><rm-button expr45="expr45" variant="icon"></rm-button><rm-button expr46="expr46" variant="icon" style="margin: 0;"></rm-button></div></div></div>',
                            'bindings': [{
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'arrow_back',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr43',
                                    'selector': '[expr43]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'favorite',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr44',
                                    'selector': '[expr44]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'search',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr45',
                                    'selector': '[expr45]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'more_vert',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr46',
                                    'selector': '[expr46]'
                                }]
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr42',
                    'selector': '[expr42]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-app-bar';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<rm-button expr48="expr48" ripple-unbounded ripple-centered ripple-highlight="false" ripple-unbounded-focus style="margin-right: 0; border-radius: 0; height: 100%; width: 25%;"></rm-button><rm-button expr50="expr50" ripple-unbounded ripple-centered ripple-highlight="false" ripple-unbounded-focus style="margin-right: 0; border-radius: 0; height: 100%; width: 25%;"></rm-button><rm-button expr52="expr52" ripple-unbounded ripple-centered ripple-highlight="false" ripple-unbounded-focus style="margin-right: 0; border-radius: 0; height: 100%; width: 25%;"></rm-button><rm-button expr54="expr54" ripple-unbounded ripple-centered ripple-highlight="false" ripple-unbounded-focus style="margin-right: 0; border-radius: 0; height: 100%; width: 25%;"></rm-button>',
                            'bindings': [{
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': '<rm-icon expr49="expr49"></rm-icon><div>Home</div>',
                                            'bindings': [{
                                                    'type': bindingTypes.TAG,
                                                    'getComponent': getComponent,
                                                    'evaluate': function (scope) {
                                                        return 'rm-icon';
                                                    },
                                                    'slots': [{
                                                            'id': 'default',
                                                            'html': 'home',
                                                            'bindings': []
                                                        }],
                                                    'attributes': [],
                                                    'redundantAttribute': 'expr49',
                                                    'selector': '[expr49]'
                                                }]
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr48',
                                    'selector': '[expr48]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': '<rm-icon expr51="expr51"></rm-icon>',
                                            'bindings': [{
                                                    'type': bindingTypes.TAG,
                                                    'getComponent': getComponent,
                                                    'evaluate': function (scope) {
                                                        return 'rm-icon';
                                                    },
                                                    'slots': [{
                                                            'id': 'default',
                                                            'html': 'search',
                                                            'bindings': []
                                                        }],
                                                    'attributes': [],
                                                    'redundantAttribute': 'expr51',
                                                    'selector': '[expr51]'
                                                }]
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr50',
                                    'selector': '[expr50]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': '<rm-icon expr53="expr53"></rm-icon>',
                                            'bindings': [{
                                                    'type': bindingTypes.TAG,
                                                    'getComponent': getComponent,
                                                    'evaluate': function (scope) {
                                                        return 'rm-icon';
                                                    },
                                                    'slots': [{
                                                            'id': 'default',
                                                            'html': 'account_circle',
                                                            'bindings': []
                                                        }],
                                                    'attributes': [],
                                                    'redundantAttribute': 'expr53',
                                                    'selector': '[expr53]'
                                                }]
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr52',
                                    'selector': '[expr52]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': '<rm-icon expr55="expr55"></rm-icon>',
                                            'bindings': [{
                                                    'type': bindingTypes.TAG,
                                                    'getComponent': getComponent,
                                                    'evaluate': function (scope) {
                                                        return 'rm-icon';
                                                    },
                                                    'slots': [{
                                                            'id': 'default',
                                                            'html': 'notifications',
                                                            'bindings': []
                                                        }],
                                                    'attributes': [],
                                                    'redundantAttribute': 'expr55',
                                                    'selector': '[expr55]'
                                                }]
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr54',
                                    'selector': '[expr54]'
                                }]
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr47',
                    'selector': '[expr47]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr56',
                    'selector': '[expr56]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr57',
                    'selector': '[expr57]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr58',
                    'selector': '[expr58]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr59',
                    'selector': '[expr59]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr60',
                    'selector': '[expr60]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr61',
                    'selector': '[expr61]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr62',
                    'selector': '[expr62]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr63',
                    'selector': '[expr63]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr64',
                    'selector': '[expr64]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr65',
                    'selector': '[expr65]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr66',
                    'selector': '[expr66]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr67',
                    'selector': '[expr67]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr68',
                    'selector': '[expr68]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr69',
                    'selector': '[expr69]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr70',
                    'selector': '[expr70]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr71',
                    'selector': '[expr71]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textfield';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr72',
                    'selector': '[expr72]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr73',
                    'selector': '[expr73]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr74',
                    'selector': '[expr74]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr75',
                    'selector': '[expr75]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr76',
                    'selector': '[expr76]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr77',
                    'selector': '[expr77]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr78',
                    'selector': '[expr78]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr79',
                    'selector': '[expr79]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr80',
                    'selector': '[expr80]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr81',
                    'selector': '[expr81]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr82',
                    'selector': '[expr82]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr83',
                    'selector': '[expr83]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr84',
                    'selector': '[expr84]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr85',
                    'selector': '[expr85]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr86',
                    'selector': '[expr86]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr87',
                    'selector': '[expr87]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr88',
                    'selector': '[expr88]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-textarea';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr89',
                    'selector': '[expr89]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr90',
                    'selector': '[expr90]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="0" skip-filter>Crea</option><option value="1"><span>Valore 1</span></option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr91',
                    'selector': '[expr91]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option><option value="4">Valore 4</option><option value="5">Valore 5</option><option value="6">Valore 6</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr92',
                    'selector': '[expr92]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr93',
                    'selector': '[expr93]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr94',
                    'selector': '[expr94]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr95',
                    'selector': '[expr95]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr96',
                    'selector': '[expr96]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr97',
                    'selector': '[expr97]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr98',
                    'selector': '[expr98]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr99',
                    'selector': '[expr99]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr100',
                    'selector': '[expr100]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr101',
                    'selector': '[expr101]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr102',
                    'selector': '[expr102]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr103',
                    'selector': '[expr103]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr104',
                    'selector': '[expr104]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr105',
                    'selector': '[expr105]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-select';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<option value="1">Valore 1</option><option value="2">Valore 2</option><option value="3">Valore 3</option>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr106',
                    'selector': '[expr106]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr107',
                    'selector': '[expr107]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr108',
                    'selector': '[expr108]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr109',
                    'selector': '[expr109]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr110',
                    'selector': '[expr110]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr111',
                    'selector': '[expr111]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr112',
                    'selector': '[expr112]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr113',
                    'selector': '[expr113]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr114',
                    'selector': '[expr114]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr115',
                    'selector': '[expr115]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr116',
                    'selector': '[expr116]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr117',
                    'selector': '[expr117]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr118',
                    'selector': '[expr118]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr119',
                    'selector': '[expr119]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr120',
                    'selector': '[expr120]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr121',
                    'selector': '[expr121]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr122',
                    'selector': '[expr122]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr123',
                    'selector': '[expr123]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr124',
                    'selector': '[expr124]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr125',
                    'selector': '[expr125]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr126',
                    'selector': '[expr126]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr127',
                    'selector': '[expr127]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr128',
                    'selector': '[expr128]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr129',
                    'selector': '[expr129]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr130',
                    'selector': '[expr130]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr131',
                    'selector': '[expr131]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr132',
                    'selector': '[expr132]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr133',
                    'selector': '[expr133]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr134',
                    'selector': '[expr134]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr135',
                    'selector': '[expr135]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr136',
                    'selector': '[expr136]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr137',
                    'selector': '[expr137]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr138',
                    'selector': '[expr138]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr139',
                    'selector': '[expr139]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr140',
                    'selector': '[expr140]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr141',
                    'selector': '[expr141]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr142',
                    'selector': '[expr142]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr143',
                    'selector': '[expr143]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr144',
                    'selector': '[expr144]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr145',
                    'selector': '[expr145]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr146',
                    'selector': '[expr146]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr147',
                    'selector': '[expr147]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr148',
                    'selector': '[expr148]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr149',
                    'selector': '[expr149]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr150',
                    'selector': '[expr150]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr151',
                    'selector': '[expr151]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr152',
                    'selector': '[expr152]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr153',
                    'selector': '[expr153]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr154',
                    'selector': '[expr154]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr155',
                    'selector': '[expr155]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr156',
                    'selector': '[expr156]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr157',
                    'selector': '[expr157]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr158',
                    'selector': '[expr158]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr159',
                    'selector': '[expr159]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr160',
                    'selector': '[expr160]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr161',
                    'selector': '[expr161]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr162',
                    'selector': '[expr162]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr163',
                    'selector': '[expr163]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr164',
                    'selector': '[expr164]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr165',
                    'selector': '[expr165]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr166',
                    'selector': '[expr166]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr167',
                    'selector': '[expr167]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr168',
                    'selector': '[expr168]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr169',
                    'selector': '[expr169]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr170',
                    'selector': '[expr170]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr171',
                    'selector': '[expr171]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr172',
                    'selector': '[expr172]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr173',
                    'selector': '[expr173]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr174',
                    'selector': '[expr174]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr175',
                    'selector': '[expr175]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr176',
                    'selector': '[expr176]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr177',
                    'selector': '[expr177]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr178',
                    'selector': '[expr178]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr179',
                    'selector': '[expr179]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr180',
                    'selector': '[expr180]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr181',
                    'selector': '[expr181]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr182',
                    'selector': '[expr182]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr183',
                    'selector': '[expr183]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr184',
                    'selector': '[expr184]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr185',
                    'selector': '[expr185]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr186',
                    'selector': '[expr186]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr187',
                    'selector': '[expr187]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr188',
                    'selector': '[expr188]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr189',
                    'selector': '[expr189]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr190',
                    'selector': '[expr190]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr191',
                    'selector': '[expr191]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr192',
                    'selector': '[expr192]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr193',
                    'selector': '[expr193]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr194',
                    'selector': '[expr194]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr195',
                    'selector': '[expr195]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr196',
                    'selector': '[expr196]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr197',
                    'selector': '[expr197]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr198',
                    'selector': '[expr198]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr199',
                    'selector': '[expr199]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr200',
                    'selector': '[expr200]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr201',
                    'selector': '[expr201]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr202',
                    'selector': '[expr202]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr203',
                    'selector': '[expr203]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr204',
                    'selector': '[expr204]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr205',
                    'selector': '[expr205]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr206',
                    'selector': '[expr206]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr207',
                    'selector': '[expr207]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr208',
                    'selector': '[expr208]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr209',
                    'selector': '[expr209]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr210',
                    'selector': '[expr210]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr211',
                    'selector': '[expr211]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr212',
                    'selector': '[expr212]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr213',
                    'selector': '[expr213]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr214',
                    'selector': '[expr214]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr215',
                    'selector': '[expr215]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr216',
                    'selector': '[expr216]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr217',
                    'selector': '[expr217]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr218',
                    'selector': '[expr218]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr219',
                    'selector': '[expr219]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr220',
                    'selector': '[expr220]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr221',
                    'selector': '[expr221]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr222',
                    'selector': '[expr222]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr223',
                    'selector': '[expr223]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr224',
                    'selector': '[expr224]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr225',
                    'selector': '[expr225]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr226',
                    'selector': '[expr226]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr227',
                    'selector': '[expr227]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr228',
                    'selector': '[expr228]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr229',
                    'selector': '[expr229]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr230',
                    'selector': '[expr230]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr231',
                    'selector': '[expr231]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr232',
                    'selector': '[expr232]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr233',
                    'selector': '[expr233]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr234',
                    'selector': '[expr234]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr235',
                    'selector': '[expr235]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr236',
                    'selector': '[expr236]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr237',
                    'selector': '[expr237]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr238',
                    'selector': '[expr238]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr239',
                    'selector': '[expr239]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr240',
                    'selector': '[expr240]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr241',
                    'selector': '[expr241]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr242',
                    'selector': '[expr242]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr243',
                    'selector': '[expr243]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'BASIC',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr244',
                    'selector': '[expr244]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'PRIMARY',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr245',
                    'selector': '[expr245]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'ACCENT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr246',
                    'selector': '[expr246]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'WARN',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr247',
                    'selector': '[expr247]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DISABLED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr248',
                    'selector': '[expr248]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr249',
                    'selector': '[expr249]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr250',
                    'selector': '[expr250]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr251',
                    'selector': '[expr251]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr252',
                    'selector': '[expr252]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr253',
                    'selector': '[expr253]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr254',
                    'selector': '[expr254]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr255',
                    'selector': '[expr255]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr256',
                    'selector': '[expr256]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr257',
                    'selector': '[expr257]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'favorite_outline',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr258',
                    'selector': '[expr258]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr259',
                    'selector': '[expr259]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr260',
                    'selector': '[expr260]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr261',
                    'selector': '[expr261]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr262',
                    'selector': '[expr262]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr263',
                    'selector': '[expr263]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr264',
                    'selector': '[expr264]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr265',
                    'selector': '[expr265]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr266',
                    'selector': '[expr266]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr267',
                    'selector': '[expr267]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr268',
                    'selector': '[expr268]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr269',
                    'selector': '[expr269]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-checkbox';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr270',
                    'selector': '[expr270]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr271',
                    'selector': '[expr271]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr272',
                    'selector': '[expr272]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr273',
                    'selector': '[expr273]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr274',
                    'selector': '[expr274]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr275',
                    'selector': '[expr275]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr276',
                    'selector': '[expr276]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr277',
                    'selector': '[expr277]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr278',
                    'selector': '[expr278]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr279',
                    'selector': '[expr279]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr280',
                    'selector': '[expr280]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr281',
                    'selector': '[expr281]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr282',
                    'selector': '[expr282]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr283',
                    'selector': '[expr283]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr284',
                    'selector': '[expr284]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr285',
                    'selector': '[expr285]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr286',
                    'selector': '[expr286]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr287',
                    'selector': '[expr287]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr288',
                    'selector': '[expr288]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr289',
                    'selector': '[expr289]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr290',
                    'selector': '[expr290]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr291',
                    'selector': '[expr291]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr292',
                    'selector': '[expr292]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr293',
                    'selector': '[expr293]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr294',
                    'selector': '[expr294]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr295',
                    'selector': '[expr295]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr296',
                    'selector': '[expr296]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr297',
                    'selector': '[expr297]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr298',
                    'selector': '[expr298]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr299',
                    'selector': '[expr299]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr300',
                    'selector': '[expr300]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr301',
                    'selector': '[expr301]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-radio';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr302',
                    'selector': '[expr302]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr303',
                    'selector': '[expr303]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-tabs';
                    },
                    'slots': [],
                    'attributes': [{
                            'type': expressionTypes.ATTRIBUTE,
                            'name': 'tabs',
                            'evaluate': function (scope) {
                                return [
                                    "TAB 1", "TAB 2", "TAB 3",
                                    "TAB 4", "TAB 5", "TAB 6",
                                    "TAB 7", "TAB 8", "TAB 9",
                                    "TAB 10", "TAB 11", "TAB 12",
                                    "TAB 13", "TAB 14", "TAB 15"
                                ];
                            }
                        }],
                    'redundantAttribute': 'expr304',
                    'selector': '[expr304]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr305',
                    'selector': '[expr305]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'DEFAULT',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr306',
                    'selector': '[expr306]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'UNBOUNDED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr307',
                    'selector': '[expr307]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'CENTERED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr308',
                    'selector': '[expr308]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'RADIUS SET',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr309',
                    'selector': '[expr309]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'UNBOUNDED & CENTERED',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr310',
                    'selector': '[expr310]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-divider';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr311',
                    'selector': '[expr311]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'Open bottom sheet',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr312',
                    'selector': '[expr312]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-bottom-sheet';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': '<p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p><p>Banana</p><p>Fragola</p><p>Arancia</p><p>Uvetta</p><p>Cose a caso</p>',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr313',
                    'selector': '[expr313]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-button';
                    },
                    'slots': [{
                            'id': 'default',
                            'html': 'Open dialog',
                            'bindings': []
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr314',
                    'selector': '[expr314]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-dialog';
                    },
                    'slots': [{
                            'id': 'title',
                            'html': '<div style="padding: 8px;">Titolo</div>',
                            'bindings': []
                        }, {
                            'id': 'content',
                            'html': '<div style="padding: 8px;"><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p><p>Informazioni del dialogo</p></div>',
                            'bindings': []
                        }, {
                            'id': 'actions',
                            'html': '<div style="text-align: right; padding: 8px;"><rm-button expr316="expr316"></rm-button><rm-button expr317="expr317" color="accent"></rm-button></div>',
                            'bindings': [{
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'Annulla',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr316',
                                    'selector': '[expr316]'
                                }, {
                                    'type': bindingTypes.TAG,
                                    'getComponent': getComponent,
                                    'evaluate': function (scope) {
                                        return 'rm-button';
                                    },
                                    'slots': [{
                                            'id': 'default',
                                            'html': 'OK',
                                            'bindings': []
                                        }],
                                    'attributes': [],
                                    'redundantAttribute': 'expr317',
                                    'selector': '[expr317]'
                                }]
                        }],
                    'attributes': [],
                    'redundantAttribute': 'expr315',
                    'selector': '[expr315]'
                }, {
                    'type': bindingTypes.TAG,
                    'getComponent': getComponent,
                    'evaluate': function (scope) {
                        return 'rm-app-bar';
                    },
                    'slots': [],
                    'attributes': [],
                    'redundantAttribute': 'expr318',
                    'selector': '[expr318]'
                }]);
        },
        'name': 'test'
    };
});
