export default {
  '_id': '5fc8994c31aa8d1afd551812',
  'type': 'form',
  'tags': [],
  'owner': '5e4aa9cf4037892ed27d5550',
  'components': [{
    'label': 'Text Field',
    'labelPosition': 'top',
    'placeholder': '',
    'description': '',
    'tooltip': '',
    'prefix': '',
    'suffix': '',
    'widget': {
      'type': 'input'
    },
    'inputMask': '',
    'allowMultipleMasks': false,
    'customClass': '',
    'tabindex': '',
    'autocomplete': '',
    'hidden': false,
    'hideLabel': false,
    'showWordCount': false,
    'showCharCount': false,
    'mask': false,
    'autofocus': false,
    'spellcheck': true,
    'disabled': false,
    'tableView': true,
    'modalEdit': false,
    'multiple': false,
    'persistent': true,
    'inputFormat': 'plain',
    'protected': false,
    'dbIndex': false,
    'case': '',
    'encrypted': false,
    'redrawOn': '',
    'clearOnHide': true,
    'customDefaultValue': '',
    'calculateValue': '',
    'calculateServer': false,
    'allowCalculateOverride': false,
    'validateOn': 'change',
    'validate': {
      'required': false,
      'pattern': '',
      'customMessage': '',
      'custom': '',
      'customPrivate': false,
      'json': '',
      'minLength': '',
      'maxLength': '',
      'strictDateValidation': false,
      'multiple': false,
      'unique': false
    },
    'unique': false,
    'errorLabel': '',
    'key': 'textField',
    'tags': [],
    'properties': {},
    'conditional': {
      'show': null,
      'when': null,
      'eq': '',
      'json': ''
    },
    'customConditional': '',
    'logic': [],
    'attributes': {},
    'overlay': {
      'style': '',
      'page': '',
      'left': '',
      'top': '',
      'width': '',
      'height': ''
    },
    'type': 'textfield',
    'input': true,
    'refreshOn': '',
    'inputType': 'text',
    'id': 'ellcd4f000000000',
    'defaultValue': null
  }, {
    'label': 'Data Grid',
    'labelPosition': 'top',
    'description': '',
    'tooltip': '',
    'disableAddingRemovingRows': false,
    'conditionalAddButton': '',
    'reorder': false,
    'addAnother': '',
    'addAnotherPosition': 'bottom',
    'defaultOpen': false,
    'layoutFixed': false,
    'enableRowGroups': false,
    'initEmpty': false,
    'customClass': '',
    'tabindex': '',
    'hidden': false,
    'hideLabel': false,
    'autofocus': false,
    'disabled': false,
    'tableView': false,
    'modalEdit': false,
    'defaultValue': [{}],
    'persistent': true,
    'protected': false,
    'dbIndex': false,
    'encrypted': false,
    'redrawOn': '',
    'clearOnHide': true,
    'customDefaultValue': '',
    'calculateValue': '',
    'calculateServer': false,
    'allowCalculateOverride': false,
    'validateOn': 'change',
    'validate': {
      'required': false,
      'minLength': '',
      'maxLength': '',
      'customMessage': '',
      'custom': '',
      'customPrivate': false,
      'json': '',
      'strictDateValidation': false,
      'multiple': false,
      'unique': false
    },
    'unique': false,
    'errorLabel': '',
    'key': 'dataGrid',
    'tags': [],
    'properties': {},
    'conditional': {
      'show': null,
      'when': null,
      'eq': '',
      'json': ''
    },
    'customConditional': '',
    'logic': [],
    'attributes': {},
    'overlay': {
      'style': '',
      'page': '',
      'left': '',
      'top': '',
      'width': '',
      'height': ''
    },
    'type': 'datagrid',
    'input': true,
    'placeholder': '',
    'prefix': '',
    'suffix': '',
    'multiple': false,
    'refreshOn': '',
    'widget': null,
    'showCharCount': false,
    'showWordCount': false,
    'allowMultipleMasks': false,
    'tree': true,
    'components': [{
      'label': 'Number Cond',
      'labelPosition': 'top',
      'placeholder': '',
      'description': '',
      'tooltip': '',
      'prefix': '',
      'suffix': '',
      'widget': {
        'type': 'input'
      },
      'customClass': '',
      'tabindex': '',
      'autocomplete': '',
      'hidden': false,
      'hideLabel': false,
      'mask': false,
      'autofocus': false,
      'spellcheck': true,
      'disabled': false,
      'tableView': false,
      'modalEdit': false,
      'multiple': false,
      'persistent': true,
      'delimiter': false,
      'requireDecimal': false,
      'inputFormat': 'plain',
      'protected': false,
      'dbIndex': false,
      'encrypted': false,
      'redrawOn': '',
      'clearOnHide': true,
      'customDefaultValue': '',
      'calculateValue': '',
      'calculateServer': false,
      'allowCalculateOverride': false,
      'validateOn': 'change',
      'validate': {
        'required': false,
        'customMessage': '',
        'custom': '',
        'customPrivate': false,
        'json': '',
        'min': '',
        'max': '',
        'strictDateValidation': false,
        'multiple': false,
        'unique': false,
        'step': 'any',
        'integer': ''
      },
      'errorLabel': '',
      'key': 'numberCond',
      'tags': [],
      'properties': {},
      'conditional': {
        'show': true,
        'when': 'textField',
        'eq': 'show',
        'json': ''
      },
      'customConditional': '',
      'logic': [],
      'attributes': {},
      'overlay': {
        'style': '',
        'page': '',
        'left': '',
        'top': '',
        'width': '',
        'height': ''
      },
      'type': 'number',
      'input': true,
      'unique': false,
      'refreshOn': '',
      'showCharCount': false,
      'showWordCount': false,
      'allowMultipleMasks': false,
      'id': 'epoubm80',
      'defaultValue': null
    }, {
      'label': 'Number',
      'labelPosition': 'top',
      'placeholder': '',
      'description': '',
      'tooltip': '',
      'prefix': '',
      'suffix': '',
      'widget': {
        'type': 'input'
      },
      'customClass': '',
      'tabindex': '',
      'autocomplete': '',
      'hidden': false,
      'hideLabel': false,
      'mask': false,
      'autofocus': false,
      'spellcheck': true,
      'disabled': false,
      'tableView': false,
      'modalEdit': false,
      'multiple': false,
      'persistent': true,
      'delimiter': false,
      'requireDecimal': false,
      'inputFormat': 'plain',
      'protected': false,
      'dbIndex': false,
      'encrypted': false,
      'redrawOn': '',
      'clearOnHide': true,
      'customDefaultValue': '',
      'calculateValue': '',
      'calculateServer': false,
      'allowCalculateOverride': false,
      'validateOn': 'change',
      'validate': {
        'required': false,
        'customMessage': '',
        'custom': '',
        'customPrivate': false,
        'json': '',
        'min': '',
        'max': '',
        'strictDateValidation': false,
        'multiple': false,
        'unique': false,
        'step': 'any',
        'integer': ''
      },
      'errorLabel': '',
      'key': 'number',
      'tags': [],
      'properties': {},
      'conditional': {
        'show': null,
        'when': null,
        'eq': '',
        'json': ''
      },
      'customConditional': '',
      'logic': [],
      'attributes': {},
      'overlay': {
        'style': '',
        'page': '',
        'left': '',
        'top': '',
        'width': '',
        'height': ''
      },
      'type': 'number',
      'input': true,
      'unique': false,
      'refreshOn': '',
      'showCharCount': false,
      'showWordCount': false,
      'allowMultipleMasks': false,
      'id': 'eq8br4m00',
      'defaultValue': null
    }],
    'id': 'ee1lkow'
  }, {
    'type': 'button',
    'label': 'Submit',
    'key': 'submit',
    'size': 'md',
    'block': false,
    'action': 'submit',
    'disableOnInvalid': true,
    'theme': 'primary',
    'input': true,
    'placeholder': '',
    'prefix': '',
    'customClass': '',
    'suffix': '',
    'multiple': false,
    'defaultValue': null,
    'protected': false,
    'unique': false,
    'persistent': false,
    'hidden': false,
    'clearOnHide': true,
    'refreshOn': '',
    'redrawOn': '',
    'tableView': false,
    'modalEdit': false,
    'labelPosition': 'top',
    'description': '',
    'errorLabel': '',
    'tooltip': '',
    'hideLabel': false,
    'tabindex': '',
    'disabled': false,
    'autofocus': false,
    'dbIndex': false,
    'customDefaultValue': '',
    'calculateValue': '',
    'calculateServer': false,
    'widget': {
      'type': 'input'
    },
    'attributes': {},
    'validateOn': 'change',
    'validate': {
      'required': false,
      'custom': '',
      'customPrivate': false,
      'strictDateValidation': false,
      'multiple': false,
      'unique': false
    },
    'conditional': {
      'show': null,
      'when': null,
      'eq': ''
    },
    'overlay': {
      'style': '',
      'left': '',
      'top': '',
      'width': '',
      'height': ''
    },
    'allowCalculateOverride': false,
    'encrypted': false,
    'showCharCount': false,
    'showWordCount': false,
    'properties': {},
    'allowMultipleMasks': false,
    'leftIcon': '',
    'rightIcon': '',
    'dataGridLabel': true,
    'id': 'egxeqz'
  }],
  'title': 'testDataGrid',
  'display': 'form',
  'name': 'testDataGrid',
  'path': 'testdatagrid',
  'machineName': 'hznolkjxuncjxep:testDataGrid'
}
