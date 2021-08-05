// Copyright @ 2018-2021 xiejiahe. All rights reserved. MIT license.
// See https://github.com/xjh22222228/nav

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { verifyToken } from '../../services'
import { getToken, setToken } from '../../utils/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() visible: boolean
  @Output() onCancel = new EventEmitter()

  token = ''
  password = ''
  isShowToken = false
  isLogin = !!getToken()
  submiting = false

  constructor(
    private message: NzMessageService,
    private notification: NzNotificationService,
  ) {}

  ngOnInit() {}

  hanldeCancel() {
    this.onCancel.emit()
  }
  
  getTokenChange(val){
    this.isShowToken = false;
    if(val === 'imagine-nav'){
      this.isShowToken = true
    }
  }

  login() {
    if (!this.token || this.token.length < 40) {
      return this.message.error('请填写正确的Token');
    }

    this.submiting = true
      let gitToken = this.token;
      verifyToken(gitToken)
        .then(() => {
          setToken(gitToken);
          this.message.success('Token验证成功, 2秒后刷新!')
          setTimeout(() => window.location.reload(), 2000)
        })
        .catch(res => {
          this.notification.error('Token 验证失败', res.message as string)
        })
        .finally(() => {
          this.submiting = false
        })
  }
}
