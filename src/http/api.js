import http from "./http";

export const loginAPI=(data)=>http.post(http.addURL('/sys/login'),data)

export const roleAPI=(params)=>http.post(http.addURL('/sys/profile'),params)
//组织架构总数据
export const departmentAPI=(params)=>http.get(http.addURL('/company/department'),{params})
//组织架构添加
export const companyAPI=(params)=>http.post(http.addURL('/company/department'),params)
//组织架构编辑
export const departbianAPI=(params)=>http.put(http.addURL(`/company/department/${params.id}`),params)
//组织架构获取回填数据
export const chaxunAPI=(params)=>http.get(http.addURL(`/company/department/${params.id}`),params)
//组织架构下拉选项数据
export const simpleAPI=()=>http.get(http.addURL('/sys/user/simple'))
//组织架构删除
export const deldepartmentAPI=(params)=>http.delete(http.addURL(`/company/department/${params.id}`))
//权限设置总数据
export const permissionAPI=()=>http.get(http.addURL('/sys/permission'))
//权限设置添加
export const permiAPI=(data)=>http.post(http.addURL('/sys/permission'),data)
//权限设置删除
export const permidelAPI=(data)=>http.delete(http.addURL(`/sys/permission/${data.id}`))
//权限设置编辑
export const permibian=(data)=>http.put(http.addURL(`/sys/permission/${data.id}`),data)
//权限设置获取回填
export const xiangpermiAPI=(data)=>http.get(http.addURL(`/sys/permission/${data.id}`))
//员工总数居
export const userAPI=(params)=>http.get(http.addURL(`/sys/user`),{params})
//员工基本信息
export const userbasicAPI=(params)=>http.get(http.addURL(`/sys/user/${params.id}`),{params})
//保护员工基本信息
export const userbaoAPI=(data)=>http.put(http.addURL(`/sys/user/${data.id}`),data)
///员工个人信息employees/{id}/personalInfo
export const personalInfoAPI=(params)=>http.get(http.addURL(`employees/${params.id}/personalInfo`),{params})
//员工个人信息/employees/{id}/personalInfo
export const personageern=(params)=>http.get(http.addURL(`/employees/${params.id}/personalInfo`),{params})
//员工个人信息保存/employees/{id}/personalInfo
export const personabaoAPI=(data)=>http.put(http.addURL(`/employees/${data.userId}/personalInfo`),data)
//查询员工调岗信息 /employees/{id}/transferPosition
export const transferAPI=(params)=>http.get(http.addURL(`/employees/${params.id}/jobs`))
//保存员工岗位信息/employees/{id}/jobs
export const jobsAPI=(data)=>http.put(http.addURL(`/employees/${data.userId}/jobs`),data)
//获取所有角色列表/sys/role
export const rolejiaoAPI=(params)=>http.get(http.addURL(`/sys/role`),{params})
//添加角色列表 /sys/role
export const roletianAPI=(data)=>http.post(http.addURL('/sys/role'),data)
//根据ID获取角色详情/sys/role/{id}
export const rolexiangAPI=(params)=>http.get(http.addURL(`/sys/role/${params.id}`),{params})
//编辑角色列表/sys/role/{id}
export const rolebianAPI=(data)=>http.put(http.addURL(`/sys/role/${data.id}`),data)
//删除角色列表 /sys/role/{id}
export const roledelAPI=(data)=>http.delete(http.addURL(`/sys/role/${data.id}`))
//给角色分配权限/sys/role/assignPrem
export const assignPremAPI=(data)=>http.put(http.addURL(`/sys/role/assignPrem`),data)
//渲染给角色分配权限/sys/role/assignPrem
export const assignPremtianAPI=(params)=>http.get(http.addURL(`/sys/permission`),{params})
//渲染给角色/sys/role/
export const rolexuanAPI=(params)=>http.get(http.addURL(`/sys/role/${params.id}`))
//渲染角色的复选框/sys/role/assignPrem
export const assignPremxuanAPI=(data)=>http.put(http.addURL(`/sys/role/assignPrem`),data)
