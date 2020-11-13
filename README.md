# [riot](https://riot.js.org/) implementation of [Material Design](https://material.io/)

## Installation
```npm install riot-material```

## Usage
index.js
```js
import "riot-material"

// any code here
```

component.riot
```riot
<component>
    <rm-button onclick={ log }>Click me!</rm-button>

    <script>
        export default {
            log() {
                console.log("button clicked");
            }
        }
    </script>
</component>
```
More ui elements in the upcoming documentation. Here a list:
- `rm-app-bar`
- `rm-bottom-sheet`
- `rm-button`
- `rm-checkbox`
- `rm-dialog`
- `rm-divider`
- `rm-icon`
- `rm-list-subheader`
- `rm-menu-item`
- `rm-menu`
- `rm-radio`
- `rm-ripple`
- `rm-select`
- `rm-tabbed-pages`
- `rm-tabs`
- `rm-textarea`
- `rm-textfield-container`
- `rm-textfield`