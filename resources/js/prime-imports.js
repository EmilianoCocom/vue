import Dialog from 'primevue/dialog'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toolbar from 'primevue/toolbar'
import FileUpload from 'primevue/fileupload'
import Rating from 'primevue/rating'
import Textarea from 'primevue/textarea'
import RadioButton from 'primevue/radiobutton'
import InputNumber from 'primevue/inputnumber'
import InputSwitch from 'primevue/inputswitch'
import ProgressSpinner from 'primevue/progressspinner'
import BlockUI from 'primevue/blockui'
import InputMask from 'primevue/inputmask'
import Dropdown from 'primevue/dropdown'
import TabMenu from 'primevue/tabmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Tree from 'primevue/tree'
import Calendar from 'primevue/calendar'
import Tooltip from 'primevue/tooltip'
import MultiSelect from 'primevue/multiselect'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

export default function(app) {
    app.component('Dialog', Dialog)
    app.component('DataTable', DataTable)
    app.component('Column', Column)
    app.component('Skeleton', Skeleton)
    app.component('Button', Button)
    app.component('InputText', InputText)
    app.component('Toolbar', Toolbar)
    app.component('FileUpload', FileUpload)
    app.component('Rating', Rating)
    app.component('Textarea', Textarea)
    app.component('RadioButton', RadioButton)
    app.component('InputNumber', InputNumber)
    app.component('InputSwitch', InputSwitch)
    app.component('ProgressSpinner', ProgressSpinner)
    app.component('BlockUI', BlockUI)
    app.component('InputMask', InputMask)
    app.component('Dropdown', Dropdown)
    app.component('TabMenu', TabMenu)
    app.component('TabView', TabView)
    app.component('TabPanel', TabPanel)
    app.component('Tree', Tree)
    app.component('Calendar', Calendar)
    app.component('MultiSelect', MultiSelect)
    app.component('Card', Card)
    app.component('Checkbox', Checkbox)
    app.component('Tag', Tag)

    app.directive('tooltip', Tooltip)
}