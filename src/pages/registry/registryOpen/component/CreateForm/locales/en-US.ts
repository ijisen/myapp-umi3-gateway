export default {
  'registryOpen.createForm.btn.prev': 'Previous',
  'registryOpen.createForm.btn.next': 'Next',
  'registryOpen.createForm.btn.submit': 'Submit',
  'registryOpen.createForm.btn.preview': 'preview',
  'registryOpen.createForm.btn.return': 'Return to the home page',

  /** 【开通注册局-创建表单】国际化字段 */
  'registryOpen.createForm.step.first': 'First',
  'registryOpen.createForm.step.first.desc': 'Registry information',
  'registryOpen.createForm.step.second': 'Second',
  'registryOpen.createForm.step.second.desc': 'Initialize account',
  'registryOpen.createForm.step.third': 'Third',
  'registryOpen.createForm.step.third.desc': 'Authorization TLD',
  'registryOpen.createForm.step.fourth': 'Fourth',
  'registryOpen.createForm.step.fourth.desc': 'Preview',
  'registryOpen.createForm.step.fifth': 'Fifth',
  'registryOpen.createForm.step.fifth.desc': 'Done',

  // 公共表单国际化字段
  'registryOpen.createForm.err.format':
    'Only enter Chinese numbers and letters. _ - @ space',
  'registryOpen.createForm.required': 'Please enter the content',
  'registryOpen.createForm.required.prefix': 'Please enter',
  'registryOpen.createForm.err.max':
    'Text length cannot exceed {max} characters',
  'registryOpen.createForm.err.start.empty': 'Cannot start with a space',
  'registryOpen.createForm.err.end.empty': 'Cannot end with a space',
  'registryOpen.createForm.phone.error':
    'The mobile number is incorrect, the mobile number starts with the number 1 and is 11 digits long. ',
  'registryOpen.createForm.username.required': 'Please enter the login account',
  'registryOpen.createForm.username.error':
    'The length is 3-32 digits, consisting of uppercase and lowercase letters, numbers or special symbols (only including -_.), and must start with a letter and end with a letter or number',
  'registryOpen.createForm.password.required': 'Please enter the login account',
  'registryOpen.createForm.password.error':
    'The length of the password is 8-16 characters, cannot contain spaces, and must contain at least three types of numbers, uppercase and lowercase letters, and special characters',

  'registryOpen.validator.failed': 'Validation failed',
  'registryOpen.registry.validator.failed': 'registry name verification failed',
  'registryOpen.registry.validator.loading':
    'The registry name is being verified in the background...',
  'registryOpen.registry.validator.err.exist': 'registry name already exists',
  'registryOpen.username.validator.failed': 'Login account verification failed',
  'registryOpen.username.validator.loading':
    'Login account background verification...',
  'registryOpen.username.validator.err.exist': 'registry name already exists',
  'registryOpen.tld.validator.failed': 'TLD validation failed',
  'registryOpen.tld.validator.loading': 'TLD background verification...',
  'registryOpen.tld.validator.err.exist':
    'Failed to authorize TLD! {tld} has been authorized',

  'registryOpen.success': 'registry opened successfully',
  'registryOpen.failed': 'registry opening failed',

  /** ====== 第一步 - 注册局基本信息 ======  */
  // 注册局信息
  'registryOpen.createForm.name': 'registry name',
  'registryOpen.createForm.address': 'registry address',
  'registryOpen.createForm.postCode': 'postcode',
  'registryOpen.createForm.postCode.required': 'Please enter the postcode',
  'registryOpen.createForm.postCode.err.format': 'Postcode format error',
  'registryOpen.createForm.tel': 'telephone',
  'registryOpen.createForm.tel.err': 'The phone number is 1-12 digits long',
  'registryOpen.createForm.fax': 'fax',
  'registryOpen.createForm.fax.err':
    'The fax number is a number with a length of 1-12 digits',
  'registryOpen.createForm.email': 'email',
  'registryOpen.createForm.email.err': 'Email format error',
  // 管理联系人
  'registryOpen.createForm.adminContact.title': 'Manage contacts',
  'registryOpen.createForm.adminContactName': 'name',
  'registryOpen.createForm.adminContactTel': 'mobile',
  'registryOpen.createForm.adminContactPhone': 'phone',
  'registryOpen.createForm.adminContactEmail': 'email',
  // 技术联系人
  'registryOpen.createForm.techContact.title': 'Technical contacts',
  'registryOpen.createForm.techContactName': 'name',
  'registryOpen.createForm.techContactTel': 'mobile',
  'registryOpen.createForm.techContactPhone': 'phone',
  'registryOpen.createForm.techContactEmail': 'email',

  /** ====== 第二步 - 初始化管理员账号 ======  */
  'registryOpen.createForm.account.name': 'registry administrator name',
  'registryOpen.createForm.account.username': 'username',
  'registryOpen.createForm.account.password': 'password',
  'registryOpen.createForm.account.repeatPassword': 'repeat password',
  'registryOpen.createForm.account.repeatPassword.required':
    'Please confirm the password',
  'registryOpen.createForm.account.repeatPassword.error':
    'The passwords are inconsistent, please confirm',
  'registryOpen.createForm.account.email': 'email',

  /** ====== 第三步 - TLD 授权 ======  */
  'registryOpen.createForm.tld.btn.create': 'Add authorization TLD',
  'registryOpen.createForm.tld.btn.edit': 'edit',
  'registryOpen.createForm.tld.btn.delete': 'delete',
  'registryOpen.createForm.tld.registry': 'registry',
  'registryOpen.createForm.tld.delete.confirm': 'Confirm delete?',
  'registryOpen.createForm.tld.exist': '{tld} already exists',
  'registryOpen.createForm.tld.modal.title': 'Add authorization TLD',
  'registryOpen.createForm.tld.error':
    'Can only input Chinese characters, letters, numbers',
  'registryOpen.createForm.tld.required': 'Please fill in the TLD',

  /** ====== 第四步 - 信息预览 ======  */
  'registryOpen.createForm.preview.first.title': 'Registry information',
  'registryOpen.createForm.preview.second.title': 'Admin information',
  'registryOpen.createForm.preview.third.title': 'Authorization TLD',
};
