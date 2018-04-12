> Map the port to 80

config in the `host-port.md` file, and the run the command below

```
sudo node index.js
```

the `host-port.md` file looks like this.
```
#dev
127.0.0.1 oa.dev.neixin.cn 9002
127.0.0.1 oa.web.xm.test.sankuai.com 9002
127.0.0.1 qa.neixin.cn 9800
127.0.0.1 web.xm.test.sankuai.com 9800
127.0.0.1 test.admin.dev.neixin.cn 9003
127.0.0.1 admin.dev.neixin.cn 9005

#st
127.0.0.1 oa.xm.st.neixin.cn 9002
127.0.0.1 oa.st.neixin.cn 9002
127.0.0.1 test.xm.st.sankuai.com 9800
127.0.0.1 st.neixin.cn 9800
127.0.0.1 st.x.sankuai.com 9800npm 

#pro
127.0.0.1 neixin.cn 9800
127.0.0.1 x.sankuai.com 9800
```