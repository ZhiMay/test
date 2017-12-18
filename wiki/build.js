 // 判断ios 版本
 var str = navigator.userAgent.toLowerCase()
      var ver = str.match(/cpu iphone os (.*?) like mac os/)
      if (!ver) {
        alert('请在Ios系统中打开')
        console.log('请在Ios系统中打开')
      } else {
        console.log('你当前的Ios系统版本为：' + ver[1].replace(/_/g, '.'))
        alert('你当前的Ios系统版本为：' + ver[1].replace(/_/g, '.'))
      }
