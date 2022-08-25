export default {
  'registryOpen.createForm.btn.prev': '上一步',
  'registryOpen.createForm.btn.next': '下一步',
  'registryOpen.createForm.btn.submit': '提交',
  'registryOpen.createForm.btn.preview': '预览',
  'registryOpen.createForm.btn.return': '返回首页',

  /** 【开通注册局-创建表单】国际化字段 */
  'registryOpen.createForm.step.first': '第一步',
  'registryOpen.createForm.step.first.desc': '注册局基本信息',
  'registryOpen.createForm.step.second': '第二步',
  'registryOpen.createForm.step.second.desc': '初始化管理员帐号',
  'registryOpen.createForm.step.third': '第三步',
  'registryOpen.createForm.step.third.desc': '授权TLD',
  'registryOpen.createForm.step.fourth': '第四步',
  'registryOpen.createForm.step.fourth.desc': '预览',
  'registryOpen.createForm.step.fifth': '第五步',
  'registryOpen.createForm.step.fifth.desc': '完成',

  // 公共表单国际化字段
  'registryOpen.createForm.err.format': '只能输入中文 数字 字母 . _ - @ 空格',
  'registryOpen.createForm.required': '请输入内容',
  'registryOpen.createForm.required.prefix': '请输入',
  'registryOpen.createForm.err.max': '文本长度不能超过{max}个字符',
  'registryOpen.createForm.err.start.empty': '不能以空格开头',
  'registryOpen.createForm.err.end.empty': '不能以空格结尾',
  'registryOpen.createForm.phone.error':
    '手机号码不正确，手机号码以数字1开头，且长度为11位。',
  'registryOpen.createForm.username.required': '请输入登录账号',
  'registryOpen.createForm.username.error':
    '长度为3-32位，由大小写字母、数字或特殊符号(只包括-_.)组成，且必须由字母开头，字母或数字结尾',
  'registryOpen.createForm.password.required': '请输入登录账号',
  'registryOpen.createForm.password.error':
    '密码长度为8-16位，不能包含空格，且必须包含数字、大小写字母、特殊字符至少三种',

  'registryOpen.validator.failed': '校验失败',
  'registryOpen.registry.validator.failed': '注册局名称校验失败',
  'registryOpen.registry.validator.loading': '注册局名称后台校验中...',
  'registryOpen.registry.validator.err.exist': '注册局名称已经存在',
  'registryOpen.username.validator.failed': '登录帐号校验失败',
  'registryOpen.username.validator.loading': '登录帐号后台校验中...',
  'registryOpen.username.validator.err.exist': '注册局名称已经存在',
  'registryOpen.tld.validator.failed': 'TLD校验失败',
  'registryOpen.tld.validator.loading': 'TLD后台校验中...',
  'registryOpen.tld.validator.err.exist': '授权TLD失败！{tld} 已经被授权',

  'registryOpen.success': '注册局开通成功',
  'registryOpen.failed': '注册局开通失败',

  /** ====== 第一步 - 注册局基本信息 ======  */
  // 注册局信息
  'registryOpen.createForm.name': '注册局名称',
  'registryOpen.createForm.address': '注册局地址',
  'registryOpen.createForm.postCode': '邮编',
  'registryOpen.createForm.postCode.required': '请输入邮编',
  'registryOpen.createForm.postCode.err.format': '邮编格式错误',
  'registryOpen.createForm.tel': '电话',
  'registryOpen.createForm.tel.err': '电话为数字,长度1-12位',
  'registryOpen.createForm.fax': '传真',
  'registryOpen.createForm.fax.err': '传真号为数字,长度1-12位',
  'registryOpen.createForm.email': '邮箱',
  'registryOpen.createForm.email.err': '邮箱格式错误',
  // 管理联系人
  'registryOpen.createForm.adminContact.title': '管理联系人',
  'registryOpen.createForm.adminContactName': '名称',
  'registryOpen.createForm.adminContactTel': '手机',
  'registryOpen.createForm.adminContactPhone': '电话',
  'registryOpen.createForm.adminContactEmail': '邮箱',
  // 技术联系人
  'registryOpen.createForm.techContact.title': '技术联系人',
  'registryOpen.createForm.techContactName': '名称',
  'registryOpen.createForm.techContactTel': '手机',
  'registryOpen.createForm.techContactPhone': '电话',
  'registryOpen.createForm.techContactEmail': '邮箱',

  /** ====== 第二步 - 初始化管理员账号 ======  */
  'registryOpen.createForm.account.name': '注册局管理员名称',
  'registryOpen.createForm.account.username': '登录帐号',
  'registryOpen.createForm.account.password': '登录密码',
  'registryOpen.createForm.account.repeatPassword': '重复输入密码',
  'registryOpen.createForm.account.repeatPassword.required': '请确认密码',
  'registryOpen.createForm.account.repeatPassword.error': '密码不一致，请确认',
  'registryOpen.createForm.account.email': '邮箱',

  /** ====== 第三步 - TLD 授权 ======  */
  'registryOpen.createForm.tld.btn.create': '添加授权TLD',
  'registryOpen.createForm.tld.btn.edit': '编辑',
  'registryOpen.createForm.tld.btn.delete': '删除',
  'registryOpen.createForm.tld.registry': '注册局',
  'registryOpen.createForm.tld.delete.confirm': '确认删除?',
  'registryOpen.createForm.tld.exist': '{tld} 已经存在',
  'registryOpen.createForm.tld.modal.title': '新增授权TLD',
  'registryOpen.createForm.tld.error': '只能输入汉字、字母、数字',
  'registryOpen.createForm.tld.required': '请填写TLD',

  /** ====== 第四步 - 信息预览 ======  */
  'registryOpen.createForm.preview.first.title': '注册局信息',
  'registryOpen.createForm.preview.second.title': '注册局管理员信息',
  'registryOpen.createForm.preview.third.title': '注册局授权TLD信息',
};
