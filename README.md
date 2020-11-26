# [riot](https://riot.js.org/) implementation of [Material Design](https://material.io/)
## Installation
You can install it via nodejs
```sh
npm install riot-material
```
or download one of the bundled file
```js
/**
 * `dist/index.amd.js`,
 * `dist/index.amd+libs.js`
 * `dist/index.umd.js`,
 * `dist/index.umd+libs.js`
 */
requirejs.config({
  paths: {
      "riot-material": "path/to/riot-material",
   },
});

require(['riot-material'], function (riotMaterial) {
    // ...
});

/**
 * `dist/index.js`,
 * `dist/index.es.js`,
 * npm installation
 */
import * as riotMaterial from "riot-material";
```
otherwise you can include the script in your project html
```html
<script src="riot-material/index.umd.js" />
<!-- or -->
<script src="riot-material/index.umd+libs.js" />
```
and access it via
```js
window.riotMaterial;
```
*Note: all the bundled file having `+libs` contain also the dependencies needed by the component, which, in this case, are:  
`riot`  
Be sure to have them when installing manually or including via html the non-`+libs` files*
## Documentation
Importing this package will occur in `register`ing all the components globally in riot

Refer to each sub-package documentation:
- `components.appBar` **rm-app-bar** tag - *Not yet available*
- [`components.button` **rm-button** tag](https://github.com/riot-material/rm-button#properties)
- [`components.checkbox` **rm-checkbox** tag](https://github.com/riot-material/rm-checkbox#properties)
- `components.dialog` **rm-dialog** tag - *Not yet available*
- `components.divider` **rm-divider** tag - *Not yet available*
- [`components.icon` **rm-icon** tag](https://github.com/riot-material/rm-icon#documentation)
- `components.menuItem` **rm-menu-item** tag - *Not yet available*
- `components.menu` **rm-menu** tag - *Not yet available*
- `components.radio` **rm-radio** tag - *Not yet available*
- `components.select` **rm-select** tag - *Not yet available*
- [`components.tabbedPages` **rm-tabbed-pages** tag](https://github.com/riot-material/rm-tabbed-pages#properties)
- [`components.textfieldContainer` **rm-textfield-container** tag](https://github.com/riot-material/rm-textfield-container#properties)
- [`components.textfield` **rm-textfield** tag](https://github.com/riot-material/rm-textfield#properties)
<!--  -->
- [`appBarUtils` **app-bar-utils** sub-package](https://github.com/riot-material/app-bar-utils#documentation)
- `background` **background** sub-package - *Not yet available*
- `elevation` **elevation** sub-package - *Not yet available*
- [`positionController` **position-controller** sub-package](https://github.com/riot-material/position-controller#methods)
- `beforeFocusListener` **before-focus-listener** sub-package - *Not yet available*
- `ripple` **ripple** sub-package - *Not yet available*
- `surfaces` **surfaces** sub-package - *Not yet available*