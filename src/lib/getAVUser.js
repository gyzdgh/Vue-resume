//获取当前用户
import AV from '../lib/leancloud'
export default function(user){
    var {id, attributes:{username}} = user || AV.User.current() || {attributes:{}}
    return {
        id: id || '', 
        username: username|| ''
    }
}